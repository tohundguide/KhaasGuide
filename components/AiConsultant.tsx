import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2 } from 'lucide-react';
import { createChatSession, sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Chat } from "@google/genai";

// Component to render formatted markdown-like text
const FormattedMessage: React.FC<{ text: string; isUser: boolean }> = ({ text, isUser }) => {
  const formatText = (content: string) => {
    // Split by newlines to handle line breaks
    const lines = content.split('\n');
    
    return lines.map((line, lineIndex) => {
      // Check for bullet points
      if (line.trim().startsWith('- ') || line.trim().startsWith('• ')) {
        const bulletContent = line.trim().substring(2);
        return (
          <div key={lineIndex} className="flex gap-2 ml-2 my-1">
            <span className="text-gold-500">•</span>
            <span>{formatInlineText(bulletContent)}</span>
          </div>
        );
      }
      
      // Check for numbered lists
      const numberedMatch = line.trim().match(/^(\d+)\.\s(.+)/);
      if (numberedMatch) {
        return (
          <div key={lineIndex} className="flex gap-2 ml-2 my-1">
            <span className="text-gold-500 font-semibold">{numberedMatch[1]}.</span>
            <span>{formatInlineText(numberedMatch[2])}</span>
          </div>
        );
      }
      
      // Check for headers (##)
      if (line.trim().startsWith('## ')) {
        return (
          <h4 key={lineIndex} className="font-bold text-corporate-900 mt-2 mb-1">
            {line.trim().substring(3)}
          </h4>
        );
      }
      
      // Check for headers (#)
      if (line.trim().startsWith('# ')) {
        return (
          <h3 key={lineIndex} className="font-bold text-corporate-900 text-base mt-2 mb-1">
            {line.trim().substring(2)}
          </h3>
        );
      }
      
      // Empty line = paragraph break
      if (line.trim() === '') {
        return <div key={lineIndex} className="h-2" />;
      }
      
      // Regular paragraph
      return (
        <p key={lineIndex} className="my-1">
          {formatInlineText(line)}
        </p>
      );
    });
  };
  
  const formatInlineText = (text: string) => {
    // Handle bold (**text** or __text__)
    // Handle italic (*text* or _text_)
    // Handle links [text](url)
    const parts: (string | JSX.Element)[] = [];
    let remaining = text;
    let keyIndex = 0;
    
    while (remaining.length > 0) {
      // Check for bold **text**
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      // Check for links [text](url)
      const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/);
      
      let firstMatch: { type: string; index: number; length: number; content: string; url?: string } | null = null;
      
      if (boldMatch && boldMatch.index !== undefined) {
        if (!firstMatch || boldMatch.index < firstMatch.index) {
          firstMatch = { type: 'bold', index: boldMatch.index, length: boldMatch[0].length, content: boldMatch[1] };
        }
      }
      
      if (linkMatch && linkMatch.index !== undefined) {
        if (!firstMatch || linkMatch.index < firstMatch.index) {
          firstMatch = { type: 'link', index: linkMatch.index, length: linkMatch[0].length, content: linkMatch[1], url: linkMatch[2] };
        }
      }
      
      if (firstMatch) {
        // Add text before the match
        if (firstMatch.index > 0) {
          parts.push(remaining.substring(0, firstMatch.index));
        }
        
        // Add the formatted element
        if (firstMatch.type === 'bold') {
          parts.push(<strong key={keyIndex++} className="font-semibold">{firstMatch.content}</strong>);
        } else if (firstMatch.type === 'link') {
          parts.push(
            <a key={keyIndex++} href={firstMatch.url} target="_blank" rel="noopener noreferrer" className="text-corporate-600 underline hover:text-corporate-800">
              {firstMatch.content}
            </a>
          );
        }
        
        remaining = remaining.substring(firstMatch.index + firstMatch.length);
      } else {
        parts.push(remaining);
        break;
      }
    }
    
    return <>{parts}</>;
  };
  
  return <div className={isUser ? '' : 'prose-sm'}>{formatText(text)}</div>;
};

export const AiConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '0', role: 'model', text: 'Hello! I am your Khaas Guide assistant. How can I help you start your business in UAE today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
      chatSessionRef.current = createChatSession();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const responseText = await sendMessageToGemini(chatSessionRef.current, userMsg.text);
      const modelMsg: ChatMessage = { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: responseText 
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-corporate-900 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-200 group flex items-center gap-2"
      >
        <span className="hidden group-hover:block text-sm font-medium pr-2">Ask Expert AI</span>
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm md:max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col max-h-[600px] h-[80vh] overflow-hidden animate-fade-in-up">
      {/* Header */}
      <div className="bg-corporate-900 p-4 flex justify-between items-center text-white shrink-0">
        <div className="flex items-center gap-3">
          <div className="bg-white/10 p-2 rounded-lg">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold">Khaas Guide AI</h3>
            <p className="text-xs text-corporate-100 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Online
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition-colors">
            <Minimize2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl p-3 text-sm ${
              msg.role === 'user' 
                ? 'bg-corporate-600 text-white rounded-tr-none' 
                : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
            }`}>
              <FormattedMessage text={msg.text} isUser={msg.role === 'user'} />
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-500 p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-xs flex gap-1 items-center">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-gray-100 shrink-0">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }} 
          className="flex gap-2 relative"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about business setup..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-corporate-500 focus:border-transparent pr-10"
          />
          <button 
            type="submit" 
            disabled={!input.trim() || isTyping}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-corporate-900 text-white p-1.5 rounded-full hover:bg-corporate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
        <p className="text-[10px] text-gray-400 text-center mt-2">
          AI can make mistakes. Please verify critical information with our consultants.
        </p>
      </div>
    </div>
  );
};
