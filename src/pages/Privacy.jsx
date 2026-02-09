import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PREMIUM_EASE = [0.22, 1, 0.36, 1];

// Typography styles
const typography = {
    h1: { fontSize: '40px', fontWeight: '500', letterSpacing: '-0.025em', lineHeight: '1.2' },
    h2: { fontSize: '24px', fontWeight: '500', letterSpacing: '-0.02em', lineHeight: '1.35' },
    h3: { fontSize: '17px', fontWeight: '500', letterSpacing: '-0.01em', lineHeight: '1.4' },
    body: { fontSize: '16px', fontWeight: '400', lineHeight: '1.75', color: 'rgba(55, 53, 47, 0.65)' },
    small: { fontSize: '14px', fontWeight: '400', lineHeight: '1.6', color: 'rgba(55, 53, 47, 0.5)' },
    label: { fontSize: '11px', fontWeight: '500', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(55, 53, 47, 0.4)' }
};

// Section component
const Section = ({ id, title, children }) => (
    <section id={`section-${id}`} style={{ marginBottom: '16px' }}>
        <h2 style={{ ...typography.h2, color: 'rgb(55, 53, 47)', marginBottom: '16px' }}>
            {id}. {title}
        </h2>
        <div style={{ ...typography.body }}>
            {children}
        </div>
    </section>
);

// Subsection component
const Subsection = ({ title, children }) => (
    <div style={{ marginBottom: '20px' }}>
        <h3 style={{ ...typography.h3, color: 'rgb(55, 53, 47)', marginBottom: '8px' }}>
            {title}
        </h3>
        <div style={{ ...typography.body }}>
            {children}
        </div>
    </div>
);

// List component
const List = ({ items }) => (
    <ul style={{ margin: '8px 0', paddingLeft: '20px', ...typography.body }}>
        {items.map((item, i) => (
            <li key={i} style={{ marginBottom: '3px' }}>{item}</li>
        ))}
    </ul>
);

// Paragraph component
const P = ({ children }) => (
    <p style={{ marginBottom: '8px', ...typography.body }}>{children}</p>
);

// Strong component
const Strong = ({ children }) => (
    <strong style={{ fontWeight: '500', color: 'rgb(55, 53, 47)' }}>{children}</strong>
);

export default function Privacy() {
    const sections = [
        { id: 1, title: "Information We Collect" },
        { id: 2, title: "How We Use Your Information" },
        { id: 3, title: "How We Share Your Information" },
        { id: 4, title: "Data Security & Protection" },
        { id: 5, title: "Your Privacy Rights & Choices" },
        { id: 6, title: "Third-Party Links & Services" },
        { id: 7, title: "International Data Transfers" },
        { id: 8, title: "Children's Privacy" },
        { id: 9, title: "California \"Shine the Light\" Law" },
        { id: 10, title: "Do Not Track (DNT)" },
        { id: 11, title: "Privacy Policy Changes" },
        { id: 12, title: "Contact Us" },
        { id: 13, title: "Data Protection Officer" },
        { id: 14, title: "Grievance Redressal" },
        { id: 15, title: "Effective Date" },
        { id: 16, title: "Acknowledgment" }
    ];

    return (
        <div style={{
            minHeight: '100vh',
            background: '#ffffff',
            color: 'rgb(55, 53, 47)',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
            WebkitFontSmoothing: 'antialiased'
        }}>
            {/* Nav */}
            <nav style={{
                position: 'sticky', top: 0, zIndex: 100,
                background: 'rgba(255, 255, 255, 0.97)',
                backdropFilter: 'blur(8px)',
                borderBottom: '1px solid rgba(55, 53, 47, 0.09)'
            }}>
                <div style={{ maxWidth: '720px', margin: '0 auto', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'rgba(55,53,47,0.5)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '400' }}>
                        <ArrowLeft size={15} strokeWidth={1.5} /> Back
                    </Link>
                    <Link to="/" style={{ fontSize: '15px', fontWeight: '600', letterSpacing: '-0.02em', textDecoration: 'none', color: 'rgb(55, 53, 47)' }}>kohza.</Link>
                    <div style={{ width: '60px' }}></div>
                </div>
            </nav>

            <main style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px 80px' }}>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: PREMIUM_EASE }}>
                    {/* Header */}
                    <header style={{ marginBottom: '40px' }}>
                        <span style={{ ...typography.label, display: 'block', marginBottom: '14px' }}>Legal</span>
                        <h1 style={{ ...typography.h1, color: 'rgb(55, 53, 47)', marginBottom: '16px' }}>Privacy Policy</h1>
                        <p style={{ ...typography.small }}>Last Updated: February 9, 2026</p>
                    </header>

                    {/* Intro */}
                    <div style={{ marginBottom: '40px', ...typography.body }}>
                        <P>Kohza ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (https://www.kohza.in), use our platform, and engage our services.</P>
                        <P><Strong>Please read this Privacy Policy carefully.</Strong> If you do not agree with our policies and practices, please do not use our services.</P>
                    </div>

                    {/* Table of Contents */}
                    <nav style={{ marginBottom: '40px', padding: '20px 24px', background: 'rgba(55, 53, 47, 0.024)', borderRadius: '8px' }}>
                        <h2 style={{ ...typography.label, marginBottom: '16px' }}>Table of Contents</h2>
                        <div style={{ columns: 2, columnGap: '24px' }}>
                            {sections.map((s) => (
                                <a key={s.id} href={`#section-${s.id}`} style={{ display: 'block', fontSize: '13px', color: 'rgba(55, 53, 47, 0.7)', textDecoration: 'none', marginBottom: '8px', lineHeight: '1.5' }}>
                                    {s.id}. {s.title}
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* Sections */}
                    <Section id={1} title="Information We Collect">
                        <Subsection title="1.1 Information You Provide Directly">
                            <P><Strong>Account Registration & Onboarding</Strong></P>
                            <List items={[
                                "Full name and business/organization name",
                                "Email address and phone number",
                                "Billing address and payment information",
                                "Company details, website, and business type",
                                "Content ownership information and authorization documentation"
                            ]} />
                            <P><Strong>Service Engagement</Strong></P>
                            <List items={[
                                "Content metadata (titles, descriptions, file types, URLs, duration)",
                                "Copyright and infringement evidence you submit",
                                "Takedown request details and target URLs",
                                "Analytics and monitoring data",
                                "Communication records between you and our team"
                            ]} />
                            <P><Strong>Payment Information</Strong></P>
                            <List items={[
                                "Billing details, invoicing information, and payment history",
                                "Credit card or payment processor information (securely processed by third parties)",
                                "Subscription and usage records",
                                "Tax identification numbers (if applicable)"
                            ]} />
                        </Subsection>
                        <Subsection title="1.2 Information Collected Automatically">
                            <P><Strong>Usage & Analytics</Strong></P>
                            <List items={[
                                "IP address and location information",
                                "Browser type, device type, and operating system",
                                "Pages visited, time spent on each page, and referring URL",
                                "Clickstream data and interaction patterns",
                                "Login timestamps and session duration"
                            ]} />
                            <P><Strong>Cookies & Tracking Technologies</Strong></P>
                            <P>We use cookies, web beacons, and similar technologies to remember your preferences, analyze website traffic, personalize your experience, and enhance security.</P>
                        </Subsection>
                        <Subsection title="1.3 Information from Third Parties">
                            <List items={[
                                "Transaction data from payment processors (Stripe, PayPal, etc.)",
                                "Piracy detection data from content monitoring platforms",
                                "Device verification and security data",
                                "IP reputation and geolocation data"
                            ]} />
                        </Subsection>
                    </Section>

                    <Section id={2} title="How We Use Your Information">
                        <Subsection title="2.1 Service Delivery">
                            <List items={[
                                "Providing DRM protection and access control for your content",
                                "Implementing dynamic watermarking and encryption",
                                "Detecting and monitoring unauthorized content distribution",
                                "Processing and executing takedown requests",
                                "Generating analytics, reports, and enforcement summaries"
                            ]} />
                        </Subsection>
                        <Subsection title="2.2 Account Management">
                            <List items={[
                                "Creating and maintaining your account",
                                "Verifying ownership and authorization",
                                "Processing payments and billing",
                                "Managing subscriptions and service access"
                            ]} />
                        </Subsection>
                        <Subsection title="2.3 Security & Legal Compliance">
                            <List items={[
                                "Complying with legal obligations and court orders",
                                "Preventing fraud, abuse, and illegal activity",
                                "Detecting and preventing unauthorized access",
                                "Protecting our legal rights and intellectual property"
                            ]} />
                        </Subsection>
                    </Section>

                    <Section id={3} title="How We Share Your Information">
                        <Subsection title="3.1 Information We Do NOT Share">
                            <P>Kohza <Strong>does not sell, rent, or trade</Strong> your personal information to third parties for marketing purposes.</P>
                        </Subsection>
                        <Subsection title="3.2 Information We DO Share">
                            <P><Strong>Third-Party Service Providers</Strong></P>
                            <List items={[
                                "Payment processing (Stripe, PayPal, etc.)",
                                "Cloud hosting and storage providers",
                                "Analytics platforms (Google Analytics)",
                                "Customer support systems",
                                "Security and fraud prevention services"
                            ]} />
                            <P><Strong>Enforcement & Takedown Activities</Strong></P>
                            <List items={[
                                "Social media platforms (YouTube, Twitter, Instagram, etc.)",
                                "File hosting services and CDN providers",
                                "Copyright enforcement organizations"
                            ]} />
                            <P><Strong>Legal Requirements</Strong></P>
                            <P>We may disclose information when required by law, in response to subpoenas, court orders, or government agency requests.</P>
                        </Subsection>
                    </Section>

                    <Section id={4} title="Data Security & Protection">
                        <Subsection title="4.1 Security Measures">
                            <P><Strong>Technical Safeguards</Strong></P>
                            <List items={[
                                "Encryption in transit (SSL/TLS protocol)",
                                "Encryption at rest for sensitive data",
                                "Secure authentication and access controls",
                                "Regular security audits and vulnerability scanning",
                                "Intrusion detection and prevention systems"
                            ]} />
                            <P><Strong>Administrative Safeguards</Strong></P>
                            <List items={[
                                "Restricted access to personal information",
                                "Employee confidentiality agreements",
                                "Data access logging and monitoring",
                                "Incident response and breach protocols"
                            ]} />
                        </Subsection>
                        <Subsection title="4.2 Data Retention">
                            <List items={[
                                "Account information: Duration of service + 3 years",
                                "Payment records: As required by tax/accounting regulations",
                                "Enforcement data: Duration of enforcement period + 2 years",
                                "Analytics data: Up to 24 months",
                                "Backup data: Up to 90 days"
                            ]} />
                        </Subsection>
                    </Section>

                    <Section id={5} title="Your Privacy Rights & Choices">
                        <Subsection title="5.1 Access & Portability">
                            <P>You have the right to request access to your personal information, confirmation of what information we hold, and copies of your data in a portable format.</P>
                            <P>To request access, contact us at <Strong>aryan@kohza.in</Strong> with "Data Access Request" in the subject line.</P>
                        </Subsection>
                        <Subsection title="5.2 Correction & Deletion">
                            <P>You have the right to correct inaccurate information, update outdated information, and request deletion of unnecessary data.</P>
                        </Subsection>
                        <Subsection title="5.3 Opt-Out & Preferences">
                            <List items={[
                                "Email Communications: Unsubscribe via link in any email",
                                "Cookies: Disable through browser settings",
                                "Analytics: Opt out via Google Analytics opt-out extension",
                                "Marketing: Email aryan@kohza.in to opt out"
                            ]} />
                        </Subsection>
                        <Subsection title="5.4 Data Subject Rights (India/GDPR)">
                            <P>If you are located in India or another jurisdiction with data protection laws, you may have additional rights including the right to erasure, right to restrict processing, and right to data portability.</P>
                        </Subsection>
                        <Subsection title="5.5 California Privacy Rights (CCPA)">
                            <P>California residents have the right to know what personal information is collected, right to delete, right to opt-out of sale/sharing, and right to non-discrimination.</P>
                            <P>Submit CCPA requests to <Strong>aryan@kohza.in</Strong> with "CCPA Request" in the subject line.</P>
                        </Subsection>
                    </Section>

                    <Section id={6} title="Third-Party Links & Services">
                        <P>Our website may contain links to third-party websites and services. This Privacy Policy does not apply to third-party services. We encourage you to review their privacy policies before providing personal information.</P>
                        <P>Kohza is not responsible for the privacy practices, data collection, or security incidents of third parties.</P>
                    </Section>

                    <Section id={7} title="International Data Transfers">
                        <P>Kohza operates primarily in India. If you access our services from outside India, your information may be transferred to, processed in, and stored in India or other countries.</P>
                        <P>By using Kohza, you consent to transfer and processing of your information in India and other jurisdictions.</P>
                    </Section>

                    <Section id={8} title="Children's Privacy">
                        <P>Kohza services are <Strong>not intended for individuals under 18 years of age.</Strong> We do not knowingly collect personal information from minors.</P>
                        <P>If we learn that we have collected information from a minor without parental consent, we will delete that information immediately.</P>
                    </Section>

                    <Section id={9} title='California "Shine the Light" Law'>
                        <P>Under California Civil Code Section 1798.83, California residents have the right to request information about categories of personal information shared with third parties for direct marketing purposes.</P>
                        <P>Contact <Strong>aryan@kohza.in</Strong> with subject "California Shine the Light Request". We will respond within 30 days.</P>
                    </Section>

                    <Section id={10} title="Do Not Track (DNT)">
                        <P>Kohza does not currently respond to DNT browser signals as there is no industry standard. You can control cookies and tracking through browser settings.</P>
                    </Section>

                    <Section id={11} title="Privacy Policy Changes">
                        <P>Kohza may update this Privacy Policy at any time. Material changes will be communicated via email notification, in-app notification, or prominent notice on our website.</P>
                        <P><Strong>Continued use of Kohza following updates constitutes your acceptance of the revised Privacy Policy.</Strong></P>
                    </Section>

                    <Section id={12} title="Contact Us">
                        <P>For privacy inquiries, requests, or concerns:</P>
                        <P><Strong>Email:</Strong> aryan@kohza.in<br />
                            <Strong>Subject Line:</Strong> "Privacy Request" or "Privacy Concern"<br />
                            <Strong>Website:</Strong> https://www.kohza.in</P>
                        <P>We aim to respond within 30 days.</P>
                    </Section>

                    <Section id={13} title="Data Protection Officer">
                        <P>For data protection inquiries in jurisdictions requiring a DPO, contact <Strong>aryan@kohza.in</Strong> with "Data Protection Officer Inquiry" in the subject line.</P>
                    </Section>

                    <Section id={14} title="Grievance Redressal">
                        <P>Under the Information Technology Act, 2000 (India), if you have a grievance regarding data processing, contact <Strong>aryan@kohza.in</Strong> with subject "Grievance Redressal".</P>
                        <P>We will respond within 45 days as required by law.</P>
                    </Section>

                    <Section id={15} title="Effective Date">
                        <P>This Privacy Policy became effective on <Strong>February 9, 2026</Strong>.</P>
                    </Section>

                    <Section id={16} title="Acknowledgment">
                        <P><Strong>By using Kohza, you acknowledge that:</Strong></P>
                        <List items={[
                            "You have read and understood this Privacy Policy",
                            "You consent to our collection, use, and sharing of information as described",
                            "You understand the risks associated with digital data transmission"
                        ]} />
                        <P>If you do not agree with this Privacy Policy, please do not use Kohza's services.</P>
                    </Section>

                    {/* Footer */}
                    <footer style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid rgba(55,53,47,0.09)', textAlign: 'center', ...typography.small }}>
                        © 2026 Kohza. All rights reserved.
                    </footer>
                </motion.div>
            </main>
        </div>
    );
}
