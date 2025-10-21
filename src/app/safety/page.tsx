import { disasterSafetyTips } from '@/lib/mock-data';
import { Cloud, Wind, Building2, AlertTriangle } from 'lucide-react';

export default function SafetyPage() {
  const getDisasterIcon = (disaster: string) => {
    switch (disaster.toLowerCase()) {
      case 'flood':
        return <Cloud className="w-12 h-12 text-blue-600" />;
      case 'cyclone':
        return <Wind className="w-12 h-12 text-purple-600" />;
      case 'earthquake':
        return <Building2 className="w-12 h-12 text-orange-600" />;
      default:
        return <AlertTriangle className="w-12 h-12 text-gray-600" />;
    }
  };

  const getDisasterColor = (disaster: string) => {
    switch (disaster.toLowerCase()) {
      case 'flood':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          text: 'text-blue-900',
          accent: 'bg-blue-100',
        };
      case 'cyclone':
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          text: 'text-purple-900',
          accent: 'bg-purple-100',
        };
      case 'earthquake':
        return {
          bg: 'bg-orange-50',
          border: 'border-orange-200',
          text: 'text-orange-900',
          accent: 'bg-orange-100',
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          text: 'text-gray-900',
          accent: 'bg-gray-100',
        };
    }
  };

  return (
    <div className="bg-[hsl(var(--background))] py-8 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-3">
            Emergency Safety Guide
          </h1>
          <p className="text-base text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Essential safety instructions organized by disaster type. Follow these guidelines to protect yourself and your loved ones during emergencies.
          </p>
        </div>

        {/* How the System Works */}
        <div className="mb-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-4 flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            How Our AI Disaster Alert System Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">Data Collection</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  AI continuously monitors weather data, seismic activity, river gauges, and satellite imagery in real-time
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">Risk Assessment</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Machine learning algorithms analyze patterns and predict disaster likelihood based on historical data and current conditions
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">Alert Display</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Color-coded risk levels and actionable alerts are instantly distributed through our platform to help communities prepare
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disaster Safety Sections */}
        <div className="space-y-8">
          {disasterSafetyTips.map((disaster, index) => {
            const colors = getDisasterColor(disaster.disaster);

            return (
              <div
                key={index}
                className={`${colors.bg} rounded-lg border ${colors.border} shadow-md overflow-hidden`}
              >
                {/* Section Header */}
                <div className={`${colors.accent} px-6 py-5 border-b ${colors.border}`}>
                  <div className="flex items-center gap-4">
                    {getDisasterIcon(disaster.disaster)}
                    <div>
                      <h2 className={`text-2xl font-bold ${colors.text}`}>
                        {disaster.disaster} Safety
                      </h2>
                      <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">
                        Critical safety measures for {disaster.disaster.toLowerCase()} emergencies
                      </p>
                    </div>
                  </div>
                </div>

                {/* Safety Tips Grid */}
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    {disaster.tips.map((tip, tipIndex) => (
                      <div
                        key={tipIndex}
                        className="bg-white rounded-lg border border-[hsl(var(--border))] p-5 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 text-3xl">{tip.icon}</div>
                          <div className="flex-1">
                            <h3 className="text-base font-bold text-[hsl(var(--foreground))] mb-2">
                              {tip.title}
                            </h3>
                            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                              {tip.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Infographic Section */}
                <div className={`${colors.accent} px-6 py-4 border-t ${colors.border}`}>
                  <div className="flex items-center justify-between text-sm">
                    <span className={`font-semibold ${colors.text}`}>
                      📋 Emergency Checklist: Always have water, food, first aid kit, flashlight, and radio ready
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Contacts Section */}
        <div className="mt-10 bg-red-50 rounded-lg border border-red-200 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">🚨</span>
            Emergency Contacts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-red-200 p-4">
              <h3 className="font-semibold text-[hsl(var(--foreground))] mb-2">National Emergency</h3>
              <p className="text-2xl font-bold text-red-600">112</p>
              <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">24/7 Emergency Response</p>
            </div>

            <div className="bg-white rounded-lg border border-red-200 p-4">
              <h3 className="font-semibold text-[hsl(var(--foreground))] mb-2">Disaster Management</h3>
              <p className="text-2xl font-bold text-red-600">1078</p>
              <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">National Disaster Response</p>
            </div>

            <div className="bg-white rounded-lg border border-red-200 p-4">
              <h3 className="font-semibold text-[hsl(var(--foreground))] mb-2">Ambulance</h3>
              <p className="text-2xl font-bold text-red-600">102</p>
              <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">Medical Emergency Services</p>
            </div>
          </div>
        </div>

        {/* General Preparedness Tips */}
        <div className="mt-10 bg-white rounded-lg border border-[hsl(var(--border))] shadow-md p-6">
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-4">
            🎒 General Disaster Preparedness
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <p className="text-[hsl(var(--muted-foreground))]">
                Create and practice a family emergency evacuation plan
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <p className="text-[hsl(var(--muted-foreground))]">
                Keep important documents in waterproof containers
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <p className="text-[hsl(var(--muted-foreground))]">
                Maintain emergency supplies for at least 3 days
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <p className="text-[hsl(var(--muted-foreground))]">
                Know the location of nearest evacuation centers
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <p className="text-[hsl(var(--muted-foreground))]">
                Keep mobile phones charged and have backup power banks
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <p className="text-[hsl(var(--muted-foreground))]">
                Stay informed through official disaster alert channels
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
