import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Vinova Infotech",
  description: "Privacy Policy for Vinova Infotech. Learn how we collect, use, and protect your information when using our services, mobile applications, and websites.",
  keywords: "privacy policy, data protection, user privacy, GDPR, data security, Vinova Infotech",
  openGraph: {
    title: "Privacy Policy | Vinova Infotech",
    description: "Privacy Policy for Vinova Infotech. Learn how we collect, use, and protect your information.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Privacy Policy for Vinova Infotech",
    "url": "https://vinovainfotech.com/privacy",
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "publisher": {
      "@type": "Organization",
      "name": "Vinova Infotech",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2nd Floor, Seawood Park, Above Shangun Dining Hall, Near Old Gangapur Naka, Gangapur Road",
        "addressLocality": "Nashik",
        "postalCode": "422005",
        "addressCountry": "IN"
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
        <Header />
        <main style={{ paddingTop: "80px", paddingBottom: "40px" }}>
          <article style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
            <header style={{ marginBottom: "40px", textAlign: "center" }}>
              <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "16px", color: "#111827" }}>
                Privacy Policy
              </h1>
              <p style={{ color: "#6b7280", fontSize: "1rem" }}>
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </header>

            <div style={{ backgroundColor: "#ffffff", padding: "40px", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
              <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#111827" }}>
                  1. Introduction
                </h2>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  Vinova Infotech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile applications, websites, and services (collectively, the "Services"). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access or use our Services.
                </p>
              </section>

              <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#111827" }}>
                  2. Information We Collect
                </h2>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  We collect information that you provide directly to us and information that is automatically collected when you use our Services.
                </p>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginTop: "24px", marginBottom: "12px", color: "#111827" }}>
                  2.1 Information You Provide:
                </h3>
                <ul style={{ lineHeight: "1.75", color: "#374151", marginLeft: "24px", marginBottom: "16px" }}>
                  <li>Personal identification information (name, email address, phone number, postal address)</li>
                  <li>Account credentials (username, password)</li>
                  <li>Payment information (processed securely through third-party payment processors)</li>
                  <li>Communications with us (customer support inquiries, feedback)</li>
                  <li>Profile information and preferences</li>
                  <li>Content you create, upload, or share through our Services</li>
                </ul>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginTop: "24px", marginBottom: "12px", color: "#111827" }}>
                  2.2 Automatically Collected Information:
                </h3>
                <ul style={{ lineHeight: "1.75", color: "#374151", marginLeft: "24px", marginBottom: "16px" }}>
                  <li>Device information (device type, operating system, unique device identifiers)</li>
                  <li>Usage data (features accessed, time spent, interactions)</li>
                  <li>Log data (IP address, browser type, access times, pages viewed)</li>
                  <li>Location data (with your permission, for location-based features)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#111827" }}>
                  3. How We Use Your Information
                </h2>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  We use the information we collect to:
                </p>
                <ul style={{ lineHeight: "1.75", color: "#374151", marginLeft: "24px", marginBottom: "16px" }}>
                  <li>Provide, maintain, and improve our Services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Personalize and improve your experience</li>
                  <li>Detect, prevent, and address technical issues and fraudulent activity</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                  <li>Send promotional communications (with your consent)</li>
                </ul>
              </section>

              <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#111827" }}>
                  4. Information Sharing and Disclosure
                </h2>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginTop: "24px", marginBottom: "12px", color: "#111827" }}>
                  4.1 Service Providers:
                </h3>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  We may share information with third-party service providers who perform services on our behalf, such as payment processing, data analytics, cloud hosting and storage, customer support, and marketing and advertising.
                </p>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginTop: "24px", marginBottom: "12px", color: "#111827" }}>
                  4.2 Legal Requirements:
                </h3>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  We may disclose information if required by law, court order, or government regulation, or to protect our rights, property, or safety, prevent fraud or security issues, or respond to legal processes.
                </p>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginTop: "24px", marginBottom: "12px", color: "#111827" }}>
                  4.3 Business Transfers:
                </h3>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                </p>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginTop: "24px", marginBottom: "12px", color: "#111827" }}>
                  4.4 With Your Consent:
                </h3>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  We may share information with your explicit consent or at your direction.
                </p>
              </section>

              <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#111827" }}>
                  5. Data Security
                </h2>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption of data in transit and at rest, secure authentication and access controls, regular security assessments and updates, and employee training on data protection.
                </p>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#111827" }}>
                  6. Data Retention
                </h2>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  We retain your personal information for as long as necessary to provide our Services to you, comply with legal obligations, resolve disputes and enforce our agreements, and support business operations. When information is no longer needed, we will securely delete or anonymize it in accordance with our data retention policies.
                </p>
              </section>

              <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#111827" }}>
                  7. Your Rights and Choices
                </h2>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul style={{ lineHeight: "1.75", color: "#374151", marginLeft: "24px", marginBottom: "16px" }}>
                  <li><strong>Access and Portability:</strong> Request access to your personal information and request a copy of your data in a portable format</li>
                  <li><strong>Correction and Deletion:</strong> Request correction of inaccurate information and request deletion of your personal information</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications, disable location tracking, and manage cookie preferences</li>
                  <li><strong>Account Controls:</strong> Update your account information through app settings and delete your account (subject to legal retention requirements)</li>
                </ul>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  To exercise these rights, please contact us at <a href="mailto:privacy@vinovainfotech.com" style={{ color: "#034c80", textDecoration: "underline" }}>privacy@vinovainfotech.com</a>.
                </p>
              </section>

              <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#111827" }}>
                  8. Children's Privacy
                </h2>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  Our Services are not intended for children under the age of 13 (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.
                </p>
              </section>

              <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#111827" }}>
                  9. International Data Transfers
                </h2>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our Services, you consent to the transfer of your information to these countries. We take appropriate safeguards to ensure your information receives adequate protection.
                </p>
              </section>

              <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#111827" }}>
                  10. Third-Party Services
                </h2>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  Our Services may contain links to third-party websites, services, or integrate with third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any information.
                </p>
              </section>

              <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#111827" }}>
                  11. Changes to This Privacy Policy
                </h2>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page, updating the "Last Updated" date, sending you an email notification (for significant changes), or displaying a notice in our mobile applications. Your continued use of our Services after changes become effective constitutes acceptance of the updated Privacy Policy.
                </p>
              </section>

              <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#111827" }}>
                  12. Contact Us
                </h2>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <address style={{ lineHeight: "1.75", color: "#374151", fontStyle: "normal", marginBottom: "16px" }}>
                  <strong>Vinova Infotech</strong><br />
                  2nd Floor, Seawood Park, Above Shangun Dining Hall<br />
                  Near Old Gangapur Naka, Gangapur Road<br />
                  Nashik-422005, India<br />
                  <br />
                  Email: <a href="mailto:privacy@vinovainfotech.com" style={{ color: "#034c80", textDecoration: "underline" }}>privacy@vinovainfotech.com</a><br />
                  Phone: <a href="tel:+918956566675" style={{ color: "#034c80", textDecoration: "underline" }}>+91 8956566675</a><br />
                  <br />
                  <strong>Data Protection Officer:</strong><br />
                  Email: <a href="mailto:dpo@vinovainfotech.com" style={{ color: "#034c80", textDecoration: "underline" }}>dpo@vinovainfotech.com</a>
                </address>
              </section>

              <section style={{ marginTop: "40px", padding: "24px", backgroundColor: "#f3f4f6", borderRadius: "8px" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#111827" }}>
                  Additional Information for Google Play Store
                </h2>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  <strong>Data Collection:</strong> Our applications may collect and process the following types of data: device information, usage analytics, crash reports, and user-provided content. All data collection complies with Google Play Store policies and applicable privacy laws.
                </p>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  <strong>Third-Party Services:</strong> We use Google Analytics, Firebase, and other Google services that may collect information in accordance with Google's privacy policies. We also integrate with payment processors and cloud services as necessary for app functionality.
                </p>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  <strong>Permissions:</strong> Our apps may request permissions for camera, location, storage, and network access. These permissions are only used for the specific features that require them, and you can revoke them at any time through your device settings.
                </p>
                <p style={{ lineHeight: "1.75", color: "#374151", marginBottom: "16px" }}>
                  <strong>Data Deletion:</strong> You can request deletion of your data by contacting us at <a href="mailto:privacy@vinovainfotech.com" style={{ color: "#034c80", textDecoration: "underline" }}>privacy@vinovainfotech.com</a> or through the app settings. We will process deletion requests within 30 days, subject to legal retention requirements.
                </p>
              </section>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}

