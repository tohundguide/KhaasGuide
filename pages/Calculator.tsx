import React, { useState, useEffect } from 'react';
import { Button } from '../components/UI';
import { RefreshCw } from 'lucide-react';

export const Calculator: React.FC = () => {
  const [jurisdiction, setJurisdiction] = useState<'freezone' | 'mainland'>('freezone');
  const [visas, setVisas] = useState(0);
  const [needOffice, setNeedOffice] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Basic Logic for estimation (Not real pricing, just for demo)
    let base = 0;
    
    if (jurisdiction === 'freezone') {
      base = 12500; // Base license
    } else {
      base = 22000; // Mainland license (higher)
    }

    const visaCost = visas * 3500;
    const officeCost = needOffice ? (jurisdiction === 'mainland' ? 15000 : 8000) : 0;

    setTotal(base + visaCost + officeCost);
  }, [jurisdiction, visas, needOffice]);

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold font-serif text-gray-900">Cost Estimator</h3>
        <button 
            onClick={() => { setVisas(0); setNeedOffice(false); setJurisdiction('freezone'); }}
            className="text-gray-400 hover:text-corporate-500 transition-colors"
        >
            <RefreshCw className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-6">
        {/* Jurisdiction */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Jurisdiction</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setJurisdiction('freezone')}
              className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                jurisdiction === 'freezone' 
                  ? 'border-corporate-500 bg-corporate-50 text-corporate-900 ring-1 ring-corporate-500' 
                  : 'border-gray-200 text-gray-500 hover:border-corporate-300'
              }`}
            >
              Freezone
            </button>
            <button
              onClick={() => setJurisdiction('mainland')}
              className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                jurisdiction === 'mainland' 
                  ? 'border-corporate-500 bg-corporate-50 text-corporate-900 ring-1 ring-corporate-500' 
                  : 'border-gray-200 text-gray-500 hover:border-corporate-300'
              }`}
            >
              Mainland
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            {jurisdiction === 'freezone' 
              ? 'Best for international trade and virtual businesses. 100% ownership.' 
              : 'Best for local trading within UAE. Requires physical presence.'}
          </p>
        </div>

        {/* Visas */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Number of Visas: <span className="text-corporate-600 font-bold">{visas}</span>
          </label>
          <input 
            type="range" 
            min="0" 
            max="10" 
            step="1" 
            value={visas}
            onChange={(e) => setVisas(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-corporate-600"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>0 (Investor only)</span>
            <span>10 Employees</span>
          </div>
        </div>

        {/* Office */}
        <div>
          <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input 
              type="checkbox"
              checked={needOffice}
              onChange={(e) => setNeedOffice(e.target.checked)}
              className="w-5 h-5 text-corporate-600 rounded focus:ring-corporate-500 border-gray-300"
            />
            <span className="text-sm font-medium text-gray-700">Include Physical Office Space?</span>
          </label>
        </div>

        {/* Total */}
        <div className="pt-6 border-t border-gray-100">
          <div className="flex justify-between items-end mb-2">
            <span className="text-gray-500 text-sm">Estimated Total (AED)</span>
            <span className="text-3xl font-bold text-corporate-900">{total.toLocaleString()}</span>
          </div>
          <p className="text-[10px] text-gray-400 text-right mb-6">
            *Estimates only. Government fees subject to change.
          </p>
          <Button className="w-full">Request Official Quote</Button>
        </div>
      </div>
    </div>
  );
};
