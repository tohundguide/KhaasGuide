import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  avatar: string;
}

export interface CostEstimate {
  licenseType: 'freezone' | 'mainland' | 'offshore';
  visas: number;
  officeSpace: boolean;
  insurance: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}