export default function TermsPage() {
  return (
    <div className="bg-[hsl(var(--background))] py-12 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-6">Terms of Service</h1>

          <div className="bg-white rounded-lg border border-[hsl(var(--border))] shadow-md p-8 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
                Service Description
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                The AI Disaster Alert System provides real-time disaster risk assessment and safety information for regions across India. This service is provided as-is for public safety purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
                User Responsibilities
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                Users are responsible for following official emergency guidance and evacuation orders. The alert system provides information to assist decision-making but should not be the sole basis for emergency actions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
                Disclaimer
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                While we strive for accuracy, disaster predictions and risk assessments are estimates based on available data. Always follow local authority instructions during emergencies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
                Service Availability
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                We aim to provide continuous service but cannot guarantee uninterrupted access during extreme conditions or technical issues.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
                Modifications
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                We reserve the right to modify these terms as needed. Continued use of the service constitutes acceptance of updated terms.
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
