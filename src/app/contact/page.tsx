export default function ContactPage() {
  return (
    <div className="bg-[hsl(var(--background))] py-12 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-6">Contact Us</h1>

          <div className="bg-white rounded-lg border border-[hsl(var(--border))] shadow-md p-8 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-2">
                Get in Touch
              </h2>
              <p className="text-[hsl(var(--muted-foreground))]">
                For inquiries about the AI Disaster Alert System, please reach out to us using the contact information below.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[hsl(var(--foreground))]">Email</h3>
                <p className="text-[hsl(var(--muted-foreground))]">
                  <a href="mailto:info@disaster-alert.gov.in" className="text-[hsl(var(--primary))] hover:underline">
                    info@disaster-alert.gov.in
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[hsl(var(--foreground))]">Emergency Hotline</h3>
                <p className="text-[hsl(var(--muted-foreground))]">112 (National Emergency Number)</p>
              </div>

              <div>
                <h3 className="font-semibold text-[hsl(var(--foreground))]">Address</h3>
                <p className="text-[hsl(var(--muted-foreground))]">
                  National Disaster Management Authority<br />
                  NDMA Bhawan, A-1, Safdarjung Enclave<br />
                  New Delhi - 110029, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
