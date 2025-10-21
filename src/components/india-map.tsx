'use client';

import { useState } from 'react';
import { stateRiskData } from '@/lib/mock-data';
import { AlertLevel } from '@/lib/types';

interface TooltipData {
  state: string;
  risk_level: AlertLevel;
  primary_threat: string;
  x: number;
  y: number;
}

export function IndiaMap() {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);

  const getStateColor = (riskLevel: AlertLevel): string => {
    switch (riskLevel) {
      case 'safe':
        return '#48BB78'; // Green
      case 'alert':
        return '#ED8936'; // Orange
      case 'danger':
        return '#E53E3E'; // Red
      default:
        return '#E2E8F0'; // Gray
    }
  };

  const handleStateHover = (e: React.MouseEvent<SVGPathElement>, state: string) => {
    const stateData = stateRiskData.find((s) => s.state === state);
    if (stateData) {
      const rect = e.currentTarget.getBoundingClientRect();
      setTooltip({
        state: stateData.state,
        risk_level: stateData.risk_level,
        primary_threat: stateData.primary_threat,
        x: rect.left + rect.width / 2,
        y: rect.top - 10,
      });
    }
  };

  const handleStateLeave = () => {
    setTooltip(null);
  };

  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 800 900"
        className="w-full h-full"
        style={{ maxHeight: '700px' }}
      >
        {/* Simplified India Map - Major States */}

        {/* Kashmir & Northern States */}
        <path
          d="M 350 50 L 380 45 L 410 55 L 425 75 L 420 100 L 400 110 L 375 105 L 360 90 Z"
          fill={getStateColor(stateRiskData.find(s => s.state === 'Jammu and Kashmir')?.risk_level || 'safe')}
          stroke="#2D3748"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={(e) => handleStateHover(e, 'Jammu and Kashmir')}
          onMouseLeave={handleStateLeave}
        />

        {/* Himachal Pradesh */}
        <path
          d="M 385 110 L 415 105 L 430 120 L 425 140 L 405 145 L 385 135 Z"
          fill={getStateColor(stateRiskData.find(s => s.state === 'Himachal Pradesh')?.risk_level || 'safe')}
          stroke="#2D3748"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={(e) => handleStateHover(e, 'Himachal Pradesh')}
          onMouseLeave={handleStateLeave}
        />

        {/* Punjab */}
        <path
          d="M 360 120 L 385 115 L 395 135 L 385 150 L 365 145 Z"
          fill={getStateColor(stateRiskData.find(s => s.state === 'Punjab')?.risk_level || 'safe')}
          stroke="#2D3748"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={(e) => handleStateHover(e, 'Punjab')}
          onMouseLeave={handleStateLeave}
        />

        {/* Haryana & Delhi */}
        <path
          d="M 365 150 L 395 145 L 410 165 L 400 180 L 375 175 Z"
          fill={getStateColor(stateRiskData.find(s => s.state === 'Haryana')?.risk_level || 'safe')}
          stroke="#2D3748"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={(e) => handleStateHover(e, 'Haryana')}
          onMouseLeave={handleStateLeave}
        />

        {/* Rajasthan */}
        <path
          d="M 280 160 L 365 155 L 380 200 L 365 280 L 320 300 L 275 280 L 265 220 Z"
          fill={getStateColor(stateRiskData.find(s => s.state === 'Rajasthan')?.risk_level || 'safe')}
          stroke="#2D3748"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={(e) => handleStateHover(e, 'Rajasthan')}
          onMouseLeave={handleStateLeave}
        />

        {/* Uttar Pradesh */}
        <path
          d="M 380 175 L 450 170 L 480 190 L 485 230 L 470 260 L 430 270 L 380 260 L 365 240 Z"
          fill={getStateColor(stateRiskData.find(s => s.state === 'Uttar Pradesh')?.risk_level || 'safe')}
          stroke="#2D3748"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={(e) => handleStateHover(e, 'Uttar Pradesh')}
          onMouseLeave={handleStateLeave}
        />

        {/* Bihar */}
        <path
          d="M 470 265 L 510 260 L 530 275 L 525 295 L 500 300 L 470 290 Z"
          fill={getStateColor(stateRiskData.find(s => s.state === 'Bihar')?.risk_level || 'safe')}
          stroke="#2D3748"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={(e) => handleStateHover(e, 'Bihar')}
          onMouseLeave={handleStateLeave}
        />

        {/* West Bengal */}
        <path
          d="M 525 300 L 555 290 L 570 310 L 565 350 L 545 365 L 520 355 L 510 325 Z"
          fill={getStateColor(stateRiskData.find(s => s.state === 'West Bengal')?.risk_level || 'safe')}
          stroke="#2D3748"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={(e) => handleStateHover(e, 'West Bengal')}
          onMouseLeave={handleStateLeave}
        />

        {/* Assam & Northeast */}
        <path
          d="M 565 280 L 610 270 L 640 285 L 645 310 L 635 330 L 605 335 L 575 320 L 570 295 Z"
          fill={getStateColor(stateRiskData.find(s => s.state === 'Assam')?.risk_level || 'safe')}
          stroke="#2D3748"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={(e) => handleStateHover(e, 'Assam')}
          onMouseLeave={handleStateLeave}
        />

        {/* Gujarat */}
        <path
          d="M 220 310 L 280 300 L 310 340 L 295 400 L 260 420 L 225 405 L 210 360 Z"
          fill={getStateColor(stateRiskData.find(s => s.state === 'Gujarat')?.risk_level || 'safe')}
          stroke="#2D3748"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={(e) => handleStateHover(e, 'Gujarat')}
          onMouseLeave={handleStateLeave}
        />

        {/* Madhya Pradesh */}
        <path
          d="M 320 305 L 430 280 L 465 300 L 470 350 L 445 390 L 380 405 L 330 395 L 310 350 Z"
          fill={getStateColor(stateRiskData.find(s => s.state === 'Madhya Pradesh')?.risk_level || 'safe')}
          stroke="#2D3748"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={(e) => handleStateHover(e, 'Madhya Pradesh')}
          onMouseLeave={handleStateLeave}
        />

        {/* Chhattisgarh */}
        <path
          d="M 465 355 L 510 340 L 530 365 L 525 400 L 495 420 L 465 410 L 450 385 Z"
          fill={getStateColor(stateRiskData.find(s => s.state === 'Chhattisgarh')?.risk_level || 'safe')}
          stroke="#2D3748"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={(e) => handleStateHover(e, 'Chhattisgarh')}
          onMouseLeave={handleStateLeave}
        />

        {/* Odisha */}
        <path
          d="M 520 405 L 560 390 L 580 420 L 575 460 L 545 480 L 515 470 L 505 440 Z"
          fill={getStateColor(stateRiskData.find(s => s.state === 'Odisha')?.risk_level || 'safe')}
          stroke="#2D3748"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={(e) => handleStateHover(e, 'Odisha')}
          onMouseLeave={handleStateLeave}
        />

        {/* Maharashtra */}
        <path
          d="M 295 410 L 380 410 L 430 435 L 440 490 L 410 530 L 360 540 L 310 520 L 280 475 Z"
          fill={getStateColor(stateRiskData.find(s => s.state === 'Maharashtra')?.risk_level || 'safe')}
          stroke="#2D3748"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={(e) => handleStateHover(e, 'Maharashtra')}
          onMouseLeave={handleStateLeave}
        />

        {/* Telangana */}
        <path
          d="M 440 495 L 485 475 L 510 500 L 505 535 L 475 550 L 445 540 Z"
          fill={getStateColor(stateRiskData.find(s => s.state === 'Telangana')?.risk_level || 'safe')}
          stroke="#2D3748"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={(e) => handleStateHover(e, 'Telangana')}
          onMouseLeave={handleStateLeave}
        />

        {/* Andhra Pradesh */}
        <path
          d="M 445 545 L 510 540 L 535 570 L 530 620 L 495 650 L 455 640 L 430 605 Z"
          fill={getStateColor(stateRiskData.find(s => s.state === 'Andhra Pradesh')?.risk_level || 'safe')}
          stroke="#2D3748"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={(e) => handleStateHover(e, 'Andhra Pradesh')}
          onMouseLeave={handleStateLeave}
        />

        {/* Karnataka */}
        <path
          d="M 360 545 L 430 540 L 455 580 L 450 640 L 415 680 L 370 685 L 340 660 L 330 610 Z"
          fill={getStateColor(stateRiskData.find(s => s.state === 'Karnataka')?.risk_level || 'safe')}
          stroke="#2D3748"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={(e) => handleStateHover(e, 'Karnataka')}
          onMouseLeave={handleStateLeave}
        />

        {/* Goa */}
        <path
          d="M 310 545 L 335 540 L 345 560 L 340 580 L 315 575 Z"
          fill={getStateColor(stateRiskData.find(s => s.state === 'Goa')?.risk_level || 'safe')}
          stroke="#2D3748"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={(e) => handleStateHover(e, 'Goa')}
          onMouseLeave={handleStateLeave}
        />

        {/* Kerala */}
        <path
          d="M 340 665 L 380 690 L 390 740 L 375 790 L 350 805 L 325 795 L 315 750 L 320 710 Z"
          fill={getStateColor(stateRiskData.find(s => s.state === 'Kerala')?.risk_level || 'safe')}
          stroke="#2D3748"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={(e) => handleStateHover(e, 'Kerala')}
          onMouseLeave={handleStateLeave}
        />

        {/* Tamil Nadu */}
        <path
          d="M 380 695 L 445 650 L 485 670 L 500 720 L 485 780 L 450 810 L 405 820 L 375 795 L 385 745 Z"
          fill={getStateColor(stateRiskData.find(s => s.state === 'Tamil Nadu')?.risk_level || 'safe')}
          stroke="#2D3748"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={(e) => handleStateHover(e, 'Tamil Nadu')}
          onMouseLeave={handleStateLeave}
        />
      </svg>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 bg-white rounded-md shadow-lg border border-[hsl(var(--border))] p-3 pointer-events-none"
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            transform: 'translate(-50%, -100%)',
          }}
        >
          <div className="text-sm font-semibold text-[hsl(var(--foreground))]">{tooltip.state}</div>
          <div className="flex items-center gap-2 mt-1">
            <span
              className={`inline-block w-3 h-3 rounded-full ${
                tooltip.risk_level === 'safe'
                  ? 'alert-safe'
                  : tooltip.risk_level === 'alert'
                  ? 'alert-warning'
                  : 'alert-danger'
              }`}
            />
            <span className="text-xs capitalize">
              {tooltip.risk_level} - {tooltip.primary_threat.replace('_', ' ')}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
