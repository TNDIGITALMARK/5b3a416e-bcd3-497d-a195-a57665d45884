import { IndiaMap } from '@/components/india-map';
import { AlertCircle, AlertTriangle } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-[hsl(var(--background))] py-8">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_380px] gap-8">
          {/* Left Side - Map and Intro */}
          <div>
            {/* Hero Section */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-3">
                Stay Informed, Stay Safe.
              </h1>
              <p className="text-base text-[hsl(var(--muted-foreground))] leading-relaxed max-w-2xl">
                Our AI Disaster System provides real-time information and guidance to help you prepare and respond effectively. Monitor risk levels across India and access critical safety information when you need it most.
              </p>
            </div>

            {/* Interactive Map */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-[hsl(var(--border))]">
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-4">
                Live Risk Assessment Map
              </h2>
              <div className="bg-[#F7FAFC] rounded-md p-4 border border-[hsl(var(--border))]">
                <IndiaMap />
              </div>
              <div className="mt-4 flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-[#48BB78]" />
                  <span className="text-[hsl(var(--muted-foreground))]">Safe</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-[#ED8936]" />
                  <span className="text-[hsl(var(--muted-foreground))]">Alert</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-[#E53E3E]" />
                  <span className="text-[hsl(var(--muted-foreground))]">Danger</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-6 text-sm text-[hsl(var(--muted-foreground))]">
              <p>
                <span className="font-medium">Contact Us:</span>{' '}
                <a href="mailto:info@disaster-alert.gov.in" className="text-[hsl(var(--primary))] hover:underline">
                  info@disaster-alert.gov.in
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Live Alert Panel */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className="bg-white rounded-lg shadow-md border border-[hsl(var(--border))]">
              {/* Panel Header */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-5 py-4 border-b border-[hsl(var(--border))] rounded-t-lg">
                <h3 className="text-lg font-bold text-[hsl(var(--foreground))]">LIVE ALERT PANEL</h3>
              </div>

              {/* Alert Items */}
              <div className="p-5 space-y-4">
                {/* Heavy Rainfall Warning */}
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-md border border-red-200">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-full bg-[#E53E3E] flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[hsl(var(--foreground))]">
                      Heavy Rainfall Warning
                    </h4>
                    <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
                      Chennai, Bhubaneswar, Guwahati experiencing severe flooding conditions
                    </p>
                  </div>
                </div>

                {/* Cyclone Watch */}
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-md border border-orange-200">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-full bg-[#ED8936] flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[hsl(var(--foreground))]">
                      Cyclone Watch: Bay of Bengal
                    </h4>
                    <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
                      Coastal regions of Odisha and West Bengal on high alert
                    </p>
                  </div>
                </div>

                {/* Moderate Seismic Activity */}
                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-md border border-yellow-200">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-full bg-[#ED8936] flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[hsl(var(--foreground))]">
                      Moderate Seismic Activity
                    </h4>
                    <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
                      Northeast regions reporting minor tremors, monitoring ongoing
                    </p>
                  </div>
                </div>

                {/* Flood Advisory */}
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-md border border-orange-200">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-full bg-[#ED8936] flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[hsl(var(--foreground))]">
                      Flood Advisory: Mumbai
                    </h4>
                    <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
                      River levels rising, residents advised to stay alert
                    </p>
                  </div>
                </div>
              </div>

              {/* Panel Footer */}
              <div className="px-5 py-3 bg-gray-50 border-t border-[hsl(var(--border))] rounded-b-lg">
                <p className="text-xs text-[hsl(var(--muted-foreground))] text-center">
                  Last updated: {new Date().toLocaleTimeString('en-IN', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}