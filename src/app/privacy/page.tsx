export default function PrivacyPage() {
  return (
    <div className="bg-[hsl(var(--background))] py-12 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-6">Privacy Policy</h1>

          <div className="bg-white rounded-lg border border-[hsl(var(--border))] shadow-md p-8 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
                Information Collection
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                The AI Disaster Alert System collects and processes publicly available disaster-related data including weather patterns, seismic activity, and geographic information to provide accurate risk assessments.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
                Data Usage
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                Your data is used solely for the purpose of providing disaster alerts and safety information. We do not sell or share personal information with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
                Data Security
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                We implement industry-standard security measures to protect your information and ensure the integrity of our disaster alert system.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
                Contact
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                For privacy-related inquiries, please contact us at{' '}
                <a href="mailto:privacy@disaster-alert.gov.in" className="text-[hsl(var(--primary))] hover:underline">
                  privacy@disaster-alert.gov.in
                </a>
              </p>
            </section>

            <div className="text-sm text-[hsl(var(--muted-foreground))] pt-4 border-t border-[hsl(var(--border))]">
              Last updated: October 21, 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
