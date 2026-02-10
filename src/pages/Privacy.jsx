import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Globe, Clock, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Section = ({ id, title, children }) => (
    <section id={id} className="scroll-mt-28">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-border">{title}</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
    </section>
);

const SubSection = ({ title, children }) => (
    <div className="mt-6">
        <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
        <div className="space-y-3 text-muted-foreground">{children}</div>
    </div>
);

const BulletList = ({ items }) => (
    <ul className="space-y-2 pl-1">
        {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
                <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

const sections = [
    { id: 'info-collect', label: '1. Information We Collect' },
    { id: 'how-use', label: '2. How We Use Your Info' },
    { id: 'how-share', label: '3. How We Share Your Info' },
    { id: 'security', label: '4. Data Security' },
    { id: 'rights', label: '5. Your Privacy Rights' },
    { id: 'third-party', label: '6. Third-Party Links' },
    { id: 'international', label: '7. International Transfers' },
    { id: 'children', label: '8. Children\'s Privacy' },
    { id: 'changes', label: '9. Policy Changes' },
    { id: 'contact', label: '10. Contact Us' },
];

export default function Privacy() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />
            <main className="pt-28 pb-20 px-6">
                <div className="container max-w-5xl mx-auto">

                    {/* Header */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                                <Shield className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Legal</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Last Updated: February 9, 2026</span>
                            <span className="hidden sm:inline text-border">|</span>
                            <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> kohza.in</span>
                        </div>
                        <p className="mt-6 text-muted-foreground max-w-3xl leading-relaxed">
                            Kohza ("we," "us," "our") is committed to protecting your privacy. This policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                        </p>
                    </div>

                    {/* Layout: Sidebar + Content */}
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Table of Contents — Sticky Sidebar */}
                        <aside className="lg:w-64 shrink-0">
                            <div className="lg:sticky lg:top-28">
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">On This Page</p>
                                <nav className="space-y-1">
                                    {sections.map(s => (
                                        <a
                                            key={s.id}
                                            href={`#${s.id}`}
                                            className="block text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 px-3 py-1.5 rounded-md transition-colors"
                                        >
                                            {s.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <div className="flex-1 min-w-0 space-y-16">

                            {/* 1. Information We Collect */}
                            <Section id="info-collect" title="1. Information We Collect">
                                <SubSection title="Information You Provide Directly">
                                    <p className="font-medium text-foreground text-sm">Account Registration & Onboarding</p>
                                    <BulletList items={[
                                        'Full name and business/organization name',
                                        'Email address and phone number',
                                        'Billing address and payment information',
                                        'Company details, website, and business type',
                                        'Content ownership information and authorization documentation',
                                    ]} />

                                    <p className="font-medium text-foreground text-sm mt-4">Service Engagement</p>
                                    <BulletList items={[
                                        'Content metadata (titles, descriptions, file types, URLs, duration)',
                                        'Copyright and infringement evidence you submit',
                                        'Takedown request details and target URLs',
                                        'Analytics and monitoring data',
                                        'Communication records between you and our team',
                                    ]} />

                                    <p className="font-medium text-foreground text-sm mt-4">Payment Information</p>
                                    <BulletList items={[
                                        'Billing details, invoicing information, and payment history',
                                        'Credit card or payment processor information (securely processed by third parties)',
                                        'Subscription and usage records',
                                        'Tax identification numbers (if applicable)',
                                    ]} />
                                </SubSection>

                                <SubSection title="Information Collected Automatically">
                                    <BulletList items={[
                                        'IP address and location information',
                                        'Browser type, device type, and operating system',
                                        'Pages visited, time spent, and referring URL',
                                        'Clickstream data and interaction patterns',
                                        'Login timestamps and session duration',
                                    ]} />
                                    <p className="mt-3">We use cookies, web beacons, Google Analytics, and similar technologies to remember preferences, analyze traffic, personalize experiences, and enhance security.</p>
                                </SubSection>

                                <SubSection title="Information from Third Parties">
                                    <BulletList items={[
                                        'Payment processors — transaction data from Stripe, PayPal, etc.',
                                        'Enforcement services — piracy detection data, takedown responses, copyright reports',
                                        'Authentication services — device verification, IP reputation, geolocation data',
                                    ]} />
                                </SubSection>
                            </Section>

                            {/* 2. How We Use */}
                            <Section id="how-use" title="2. How We Use Your Information">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { title: 'Service Delivery', items: ['DRM protection & access control', 'Dynamic watermarking & encryption', 'Piracy detection & monitoring', 'Takedown processing', 'Analytics & reporting'] },
                                        { title: 'Account Management', items: ['Account creation & maintenance', 'Ownership verification', 'Payment processing & billing', 'Subscription management'] },
                                        { title: 'Communication', items: ['Support inquiries', 'Service announcements', 'Enforcement notifications', 'Marketing (with consent)'] },
                                        { title: 'Security & Compliance', items: ['Fraud prevention', 'Unauthorized access detection', 'Legal compliance', 'Security audits & testing'] },
                                    ].map((cat, i) => (
                                        <div key={i} className="p-5 rounded-xl border border-border bg-card">
                                            <h4 className="font-semibold text-foreground mb-3">{cat.title}</h4>
                                            <ul className="space-y-1.5 text-sm">
                                                {cat.items.map((item, j) => (
                                                    <li key={j} className="flex items-start gap-2">
                                                        <span className="text-primary mt-1.5 text-[6px]">●</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </Section>

                            {/* 3. Sharing */}
                            <Section id="how-share" title="3. How We Share Your Information">
                                <div className="p-5 rounded-xl border border-primary/20 bg-primary/5 mb-4">
                                    <p className="font-semibold text-foreground">Kohza does <span className="text-primary">NOT</span> sell, rent, or trade your personal information to third parties for marketing purposes.</p>
                                </div>
                                <SubSection title="We share information with:">
                                    <BulletList items={[
                                        'Service providers — payment processing, cloud hosting, analytics, support (contractually bound to confidentiality)',
                                        'Enforcement partners — social media platforms, file hosts, ISPs, domain registrars, DMCA clearinghouses',
                                        'Legal requirements — subpoenas, court orders, government requests, law enforcement',
                                        'Business transfers — in the event of acquisition, merger, or bankruptcy',
                                        'Aggregate data — anonymized, non-identifiable data for research and analytics',
                                    ]} />
                                </SubSection>
                            </Section>

                            {/* 4. Security */}
                            <Section id="security" title="4. Data Security & Protection">
                                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                                    {[
                                        { title: 'Technical', items: ['SSL/TLS encryption', 'Encryption at rest', 'Intrusion detection', 'Firewalls'] },
                                        { title: 'Administrative', items: ['Restricted access', 'Confidentiality agreements', 'Incident response', 'Security training'] },
                                        { title: 'Physical', items: ['Secure data centers', 'Surveillance systems', 'Disaster recovery', 'Secure disposal'] },
                                    ].map((cat, i) => (
                                        <div key={i} className="p-4 rounded-xl border border-border bg-card">
                                            <h4 className="font-semibold text-foreground mb-2 text-sm">{cat.title}</h4>
                                            <ul className="space-y-1 text-sm">
                                                {cat.items.map((item, j) => <li key={j} className="text-muted-foreground">• {item}</li>)}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm"><strong className="text-foreground">Important:</strong> No system is 100% secure. You acknowledge the inherent risks of digital data transmission.</p>

                                <SubSection title="Data Retention">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                                            <thead>
                                                <tr className="bg-secondary/50">
                                                    <th className="text-left px-4 py-2.5 font-semibold text-foreground">Data Type</th>
                                                    <th className="text-left px-4 py-2.5 font-semibold text-foreground">Retention Period</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {[
                                                    ['Account information', 'Duration of service + 3 years'],
                                                    ['Payment records', 'As required by tax/accounting regulations'],
                                                    ['Enforcement data', 'Enforcement period + 2 years'],
                                                    ['Analytics data', 'Up to 24 months'],
                                                    ['Backup data', 'Up to 90 days'],
                                                ].map(([type, period], i) => (
                                                    <tr key={i} className="border-t border-border">
                                                        <td className="px-4 py-2.5 text-foreground">{type}</td>
                                                        <td className="px-4 py-2.5">{period}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </SubSection>
                            </Section>

                            {/* 5. Rights */}
                            <Section id="rights" title="5. Your Privacy Rights & Choices">
                                <SubSection title="Access, Correction & Deletion">
                                    <BulletList items={[
                                        'Request access to your personal information',
                                        'Correct inaccurate or outdated information',
                                        'Request deletion of unnecessary data',
                                        'Receive copies in a portable format',
                                    ]} />
                                    <p className="mt-3">Contact <a href="mailto:aryan@kohza.in" className="text-primary hover:underline font-medium">aryan@kohza.in</a> with "Data Access Request" in the subject line.</p>
                                </SubSection>

                                <SubSection title="Opt-Out Options">
                                    <BulletList items={[
                                        'Email — Unsubscribe link in any marketing email',
                                        'Cookies — Disable through browser settings',
                                        'Analytics — Install Google Analytics opt-out extension',
                                    ]} />
                                </SubSection>

                                <SubSection title="Regional Rights">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl border border-border bg-card">
                                            <h4 className="font-semibold text-foreground mb-2 text-sm">India / GDPR</h4>
                                            <ul className="space-y-1 text-sm">
                                                <li>• Right to be informed</li>
                                                <li>• Right to erasure</li>
                                                <li>• Right to restrict processing</li>
                                                <li>• Right to data portability</li>
                                                <li>• Right to object</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 rounded-xl border border-border bg-card">
                                            <h4 className="font-semibold text-foreground mb-2 text-sm">California (CCPA)</h4>
                                            <ul className="space-y-1 text-sm">
                                                <li>• Right to know</li>
                                                <li>• Right to delete</li>
                                                <li>• Right to opt-out of sale</li>
                                                <li>• Right to non-discrimination</li>
                                            </ul>
                                        </div>
                                    </div>
                                </SubSection>
                            </Section>

                            {/* 6-8 Shorter sections */}
                            <Section id="third-party" title="6. Third-Party Links & Services">
                                <p>Our website may contain links to third-party services not operated by Kohza. This Privacy Policy does not apply to third-party services. We encourage you to review their privacy policies before providing personal information.</p>
                            </Section>

                            <Section id="international" title="7. International Data Transfers">
                                <p>Kohza operates primarily in India. By using Kohza, you consent to transfer of your information to India and other jurisdictions. We implement safeguards to ensure adequate protection in accordance with international data protection standards.</p>
                            </Section>

                            <Section id="children" title="8. Children's Privacy">
                                <p>Kohza services are <strong className="text-foreground">not intended for individuals under 18 years of age.</strong> We do not knowingly collect personal information from minors. If we learn that we have, we will delete that information immediately.</p>
                            </Section>

                            {/* 9. Changes */}
                            <Section id="changes" title="9. Privacy Policy Changes">
                                <p>Kohza may update this Privacy Policy at any time. Material changes will be communicated via email, in-app notification, or prominent notice on our website. <strong className="text-foreground">Continued use constitutes acceptance.</strong></p>
                            </Section>

                            {/* 10. Contact */}
                            <Section id="contact" title="10. Contact Us">
                                <div className="p-6 rounded-xl border border-border bg-card">
                                    <h3 className="font-semibold text-foreground mb-4">Kohza Privacy Team</h3>
                                    <div className="space-y-3 text-sm">
                                        <p className="flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-primary" />
                                            <a href="mailto:aryan@kohza.in" className="text-primary hover:underline">aryan@kohza.in</a>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Globe className="w-4 h-4 text-primary" />
                                            <a href="https://www.kohza.in" className="text-primary hover:underline">www.kohza.in</a>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-primary" />
                                            <span>Response within 30 days</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm"><strong className="text-foreground">Grievance Redressal (India):</strong> Under the IT Act, 2000, contact <a href="mailto:aryan@kohza.in" className="text-primary hover:underline">aryan@kohza.in</a> (Subject: "Grievance Redressal"). Response within 45 days.</p>
                            </Section>

                            {/* Footer note */}
                            <div className="pt-8 border-t border-border text-sm text-muted-foreground space-y-2">
                                <p>This Privacy Policy became effective on <strong className="text-foreground">February 9, 2026</strong>.</p>
                                <p>By using Kohza, you acknowledge that you have read and understood this Privacy Policy.</p>
                                <p className="mt-4">© 2026 Kohza. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
