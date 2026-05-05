import { Link } from "react-router";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen pb-8">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="flex items-center gap-3 p-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            ←
          </Link>
          <h2 className="text-lg font-semibold">Terms of Service</h2>
        </div>
      </div>

      <div className="p-4 prose prose-sm dark:prose-invert max-w-none">
        <section className="space-y-4">
          <h3 className="text-xl font-bold">1. Acceptance of Terms</h3>
          <p className="text-muted-foreground">
            By accessing or using EasyBuy through the Pi Browser on the Pi Network, you agree to be bound by these Terms of Service (“Terms”).
          </p>
          <p className="text-muted-foreground">
            If you do not agree, you must not use the app.
          </p>

          <h3 className="text-xl font-bold">2. Eligibility</h3>
          <p className="text-muted-foreground">
            To use this app, you must:
          </p>
          <p className="text-muted-foreground">
            Be at least 18 years old (or legal age in your jurisdiction)
          </p>
          <p className="text-muted-foreground">
            Have a valid Pi Network account
          </p>
          <p className="text-muted-foreground">
            Be legally able to enter into binding agreements
          </p>

          <h3 className="text-xl font-bold">3. Description of Service</h3>
          <p className="text-muted-foreground">
            EasyBuy provides a portal to Pi Network's app ecosystem and enables users to make payments using Pi cryptocurrency within the Pi Network ecosystem.
          </p>

          <h3 className="text-xl font-bold">4. User Responsibilities</h3>
          <p className="text-muted-foreground">
            You agree to:
          </p>
          <p className="text-muted-foreground">
            Provide accurate and truthful information
          </p>
          <p className="text-muted-foreground">
            Use the app only for lawful purposes
          </p>
          <p className="text-muted-foreground">
            Not engage in fraud, abuse, or illegal transactions
          </p>
          <p className="text-muted-foreground">
            Not interfere with the app’s operation or security
          </p>
          <p className="text-muted-foreground">
            You are solely responsible for all activities under your account.
          </p>

          <h3 className="text-xl font-bold">5. Payments and Transactions</h3>
          <p className="text-muted-foreground">
            <h3 className="text-lg font-bold">5.1 Use of Pi Cryptocurrency</h3>
            <br />
            <p className="text-muted-foreground">
              - All payments in the app are conducted using Pi via the Pi Network.
            </p>
            <br />
            <p className="text-muted-foreground">
              - You acknowledge that Pi is a digital asset and may fluctuate in value.
            </p>
            <br />
            <p className="text-muted-foreground">
              - You are responsible for understanding the nature and risks of using cryptocurrency.
            </p>
            <br />
            <h3 className="text-lg font-bold">5.2 Transaction Finality</h3>
            <br />
            <p className="text-muted-foreground">
              - Transactions, once confirmed on the Pi Network, are final and irreversible.
            </p>
            <br />
            <p className="text-muted-foreground">
              - We are not responsible for incorrect transactions, including wrong recipient details or amounts.
            </p>
            <br />
            <h3 className="text-lg font-bold">5.3 Fees</h3>
            <p className="text-muted-foreground">
              We may charge service or transaction fees (clearly disclosed before payment).
            </p>

            <p className="text-muted-foreground">
              Pi Network may also impose its own fees.
            </p>
            <br />
            <h3 className="text-lg font-bold">5.4 Refunds</h3>
            <br />
            <p className="text-muted-foreground">
              - Refunds are not guaranteed and are handled at our sole discretion unless otherwise stated.
            </p>
            <br />
            <p className="text-muted-foreground">
              - Any approved refunds will be processed in Pi where possible.
            </p>
          </p>

          <h3 className="text-xl font-bold">6. Prohibited Activities</h3>
          <p className="text-muted-foreground">
            You must not:
          </p>
          <p className="text-muted-foreground">
            - Use the app for money laundering, fraud, or illegal trade.
          </p>
          <p className="text-muted-foreground">
            - Attempt to manipulate pricing or transactions.
          </p>
          <p className="text-muted-foreground">
            - Use bots, scripts, or automation without permission.
          </p>
          <p className="text-muted-foreground">
            - Exploit bugs or vulnerabilities.
            <br />
            <br />
            <p className="text-muted-foreground">
              Violations may result in suspension or termination.
            </p>
          </p>

          <h3 className="text-xl font-bold">7. Third-Party Dependency</h3>
          <p className="text-muted-foreground">
            Our app relies on Pi Network services for authentication and payments.
          </p>
          <p className="text-muted-foreground">
            We are not liable for:
          </p>
          <p className="text-muted-foreground">
            - Network downtime or technical failures.
          </p>
          <p className="text-muted-foreground">
            - Transaction delays caused by Pi Network.
          </p>
          <p className="text-muted-foreground">
            - Changes in Pi Network policies or functionality.
          </p>
          <p className="text-muted-foreground">
            Your use of Pi Network is subject to its own terms and policies.
          </p>

          <h3 className="text-xl font-bold">8. Intellectual Property</h3>
          <p className="text-muted-foreground">
            All app content (excluding user-generated content) is owned by Easybuy and protected by applicable laws.


          </p>
          <p className="text-muted-foreground">
            You may not reproduce, distribute, or modify any part of the app without permission.
          </p>

          <h3 className="text-xl font-bold">9. User Content (if applicable)</h3>
          <p className="text-muted-foreground">
            If you submit content:
          </p>
          <p className="text-muted-foreground">
            - You retain ownership.
          </p>
          <p className="text-muted-foreground">
            - You grant us a license to use, display, and distribute it within the app.
          </p>
          <p className="text-muted-foreground">
            - You are responsible for ensuring it is lawful and does not infringe others’ rights
          </p>

          <h3 className="text-xl font-bold">10. Limitation of Liability</h3>
          <p className="text-muted-foreground">
            The app is provided “as is” without warranties.
          </p>
          <p className="text-muted-foreground">
            We do not guarantee uninterrupted or error-free operation.
          </p>
          <p className="text-muted-foreground">
            We are not liable for financial losses, including loss of Pi, due to:
          </p>
          <p className="text-muted-foreground">
            - User error
          </p>
          <p className="text-muted-foreground">
            - Network issues
          </p>
          <p className="text-muted-foreground">
            - Unauthorized access
          </p>

          <h3 className="text-xl font-bold">11. Indemnification</h3>
          <p className="text-muted-foreground">
            You agree to indemnify and hold us harmless from any claims, damages, or losses arising from:
          </p>
          <p className="text-muted-foreground">
            - Your use of the app.
          </p>
          <p className="text-muted-foreground">
            - Your violation of these Terms
          </p>
          <p className="text-muted-foreground">
            - Your infringement of any rights.
          </p>

          <h3 className="text-xl font-bold">12. Suspension and Termination</h3>
          <p className="text-muted-foreground">
            We may suspend or terminate your access if:
          </p>
          <p className="text-muted-foreground">
            - You violate these Terms.
          </p>
          <p className="text-muted-foreground">
            - Required by law or regulatory authorities.
          </p>
          <p className="text-muted-foreground">
            - Necessary to protect users or the platform
          </p>

          <h3 className="text-xl font-bold">13. Changes to Terms</h3>
          <p className="text-muted-foreground">
            We may update these Terms at any time. Continued use of the app constitutes acceptance of the revised Terms.
          </p>

          <h3 className="text-xl font-bold">14. Governing Law</h3>
          <p className="text-muted-foreground">
            These Terms shall be governed by the laws of Singapore, without regard to conflict of law principles.
          </p>

          <h3 className="text-xl font-bold">15. Contact Information</h3>
          <p className="text-muted-foreground">
            For questions or support, contact:
            <br />
            📧 navigan9@hotmail.com
          </p>
        </section>
      </div>
    </div>
  );
}
