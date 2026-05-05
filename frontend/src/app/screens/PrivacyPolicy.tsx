import { Link } from "react-router";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pb-8">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="flex items-center gap-3 p-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            ←
          </Link>
          <h2 className="text-lg font-semibold">Privacy Policy</h2>
        </div>
      </div>

      <div className="p-4 prose prose-sm dark:prose-invert max-w-none">
        <section className="space-y-4">
          <h3 className="text-xl font-bold">1. Introduction</h3>
          <p className="text-muted-foreground">
            Welcome to EasyBuy. This Privacy Policy explains how we collect, use, and protect your information when you use our application on the Pi Network via the Pi Browser.
          </p>
          <p className="text-muted-foreground">
            By using our app, you agree to the collection and use of information in accordance with this policy.
          </p>

          <h3 className="text-xl font-bold">2. Information We Collect</h3>
          <p className="text-muted-foreground">
            We may collect the following types of information:
            <br />
            <br />
            <h3 className="text-lg font-bold">a. Pi Account Information</h3>
            <p className="text-muted-foreground">
              - Your Pi username
            </p>
            <p className="text-muted-foreground">
              - Unique user identifier (UID) provided by Pi Network
            </p>
            <br />
            <h3 className="text-lg font-bold">b. Usage Data</h3>
            <p className="text-muted-foreground">
              App interactions and activity
            </p>
            <p className="text-muted-foreground">
              - Device/browser type
            </p>
            <p className="text-muted-foreground">
              - Log data (IP address, timestamps)
            </p>
            <br />
            <h3 className="text-lg font-bold">c.  Optional Information</h3>
            <p className="text-muted-foreground">
              Any data you voluntarily provide (e.g., profile details, messages, forms)
            </p>
          </p>
          <h3 className="text-xl font-bold">3. How We Use Your Information</h3>
          <p className="text-muted-foreground">
            We use the collected data to:
          </p>
          <p className="text-muted-foreground">
            - Provide and maintain app functionality.
          </p>
          <p className="text-muted-foreground">
            - Authenticate users via Pi Network.
          </p>
          <p className="text-muted-foreground">
            - Improve user experience.


          </p>
          <p className="text-muted-foreground">
            - Monitor usage and detect fraud or abuse.


          </p>
          <p className="text-muted-foreground">
            - Communicate updates or important notices.
          </p>

          <h3 className="text-xl font-bold">4. Data Sharing and Disclosure</h3>
          <p className="text-muted-foreground">
            We do not sell your personal data.
          </p>
          <p className="text-muted-foreground">
            We may share information:
          </p>
          <p className="text-muted-foreground">
            - With Pi Network services for authentication and platform functionality
          </p>
          <p className="text-muted-foreground">
            - If required by law or legal process
          </p>
          <p className="text-muted-foreground">
            - To protect our rights, users, or prevent fraud
          </p>

          <h3 className="text-xl font-bold">5. Data Storage and Security</h3>
          <p className="text-muted-foreground">
            We implement reasonable security measures to protect your data. However, no method of transmission over the internet is 100% secure.
          </p>
          <p className="text-muted-foreground">
            Data may be stored on secure servers or third-party services used by our app.
          </p>

          <h3 className="text-xl font-bold">6. Third-Party Services</h3>
          <p className="text-muted-foreground">
            Our app may rely on third-party services (e.g., analytics, hosting). These services may collect information in accordance with their own privacy policies.
          </p>

          <h3 className="text-xl font-bold">7. Your Rights</h3>
          <p className="text-muted-foreground">
            Depending on your jurisdiction, you may have the right to:
          </p>
          <p className="text-muted-foreground">
            - Access your personal data.
          </p>
          <p className="text-muted-foreground">
            - Request correction or deletion.
          </p>
          <p className="text-muted-foreground">
            - Withdraw consent where applicable.
          </p>
          <p className="text-muted-foreground">
            To exercise these rights, contact us at: navigan9@hotmail.com
          </p>

          <h3 className="text-xl font-bold">8. Children’s Privacy</h3>
          <p className="text-muted-foreground">
            Our app is not intended for individuals under the age of 13 (or applicable local age requirement). We do not knowingly collect data from children.
          </p>

          <h3 className="text-xl font-bold">9. Changes to This Privacy Policy</h3>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. Changes will be posted within the app with an updated date.
          </p>

          <h3 className="text-xl font-bold">10. Contact Us</h3>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact:
          </p>
          <p className="text-muted-foreground">
            📧 navigan9@hotmail.com
          </p>
        </section>
      </div>
    </div >
  );
}
