import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Mail, Globe, Clock, ChevronRight, AlertTriangle } from 'lucide-react';
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
    { id: 'what-is', label: '1. What is Kohza?' },
    { id: 'eligibility', label: '2. Eligibility' },
    { id: 'how-works', label: '3. How Kohza Works' },
    { id: 'ownership', label: '4. Content Ownership' },
    { id: 'payments', label: '5. Payments & Billing' },
    { id: 'prohibited', label: '6. Prohibited Uses' },
    { id: 'third-party', label: '7. Third-Party Platforms' },
    { id: 'data-privacy', label: '8. Data & Privacy' },
    { id: 'warranties', label: '9. Disclaimer of Warranties' },
    { id: 'liability', label: '10. Limitation of Liability' },
    { id: 'indemnification', label: '11. Indemnification' },
    { id: 'termination', label: '12. Termination' },
    { id: 'modifications', label: '13. Modifications' },
    { id: 'governing-law', label: '14. Governing Law' },
    { id: 'disputes', label: '15. Dispute Resolution' },
    { id: 'contact', label: '16. Contact & Support' },
];

export default function Terms() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />
            <main className="pt-28 pb-20 px-6">
                <div className="container max-w-5xl mx-auto">

                    {/* Header */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                                <FileText className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Legal</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Last Updated: February 9, 2026</span>
                            <span className="hidden sm:inline text-border">|</span>
                            <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> kohza.in</span>
                        </div>
                        <p className="mt-6 text-muted-foreground max-w-3xl leading-relaxed">
                            Welcome to Kohza. These Terms of Service govern your access to and use of the Kohza website, applications, services, and tools. By accessing or using Kohza, you agree to be bound by these Terms.
                        </p>
                    </div>

                    {/* Layout: Sidebar + Content */}
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Table of Contents — Sticky Sidebar */}
                        <aside className="lg:w-64 shrink-0">
                            <div className="lg:sticky lg:top-28">
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">On This Page</p>
                                <nav className="space-y-1 max-h-[70vh] overflow-y-auto">
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

                            {/* 1. What is Kohza */}
                            <Section id="what-is" title="1. What is Kohza?">
                                <p>Kohza is a comprehensive digital protection and control platform for creators, coaches, and businesses who sell premium content online.</p>
                                <div className="grid sm:grid-cols-2 gap-3 mt-2">
                                    {[
                                        'DRM-style access control & encryption',
                                        'Dynamic watermarking & screen capture prevention',
                                        'Real-time piracy detection & monitoring',
                                        'Automated & manual DMCA takedowns',
                                        'User authentication & device management',
                                        'Analytics & enforcement reporting',
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-2 text-sm p-3 rounded-lg border border-border bg-card">
                                            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <span className="text-foreground">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 mt-4 flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                                    <p className="text-sm"><strong className="text-foreground">Important:</strong> Kohza does not provide legal advice or legal representation. We act in good faith with best efforts to identify and pursue removal of unauthorized content.</p>
                                </div>
                            </Section>

                            {/* 2. Eligibility */}
                            <Section id="eligibility" title="2. Eligibility & Age Restriction">
                                <p>You must be at least <strong className="text-foreground">18 years old</strong> to use Kohza and have the legal capacity to enter into a binding contract.</p>
                                <BulletList items={[
                                    'You are 18 years of age or older',
                                    'You are legally capable of entering into this agreement',
                                    'You will comply with all applicable laws and regulations',
                                    'You have the authority to agree on behalf of any organization you represent',
                                ]} />
                            </Section>

                            {/* 3. How Kohza Works */}
                            <Section id="how-works" title="3. How Kohza Works">
                                <SubSection title="Service Model">
                                    <p>Services are delivered through direct engagement and onboarding, a secure dashboard for content management, automated enforcement workflows, and real-time analytics and reporting.</p>
                                </SubSection>
                                <SubSection title="Your Responsibilities">
                                    <BulletList items={[
                                        'Provide accurate information about your content and ownership',
                                        'Ensure you own or are legally authorized to protect the content',
                                        'Supply correct URLs, files, or evidence for enforcement actions',
                                        'Ensure all instructions you provide to Kohza are lawful',
                                        'Comply with DMCA, copyright laws, and platform terms of service',
                                    ]} />
                                    <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 mt-4 flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                                        <p className="text-sm"><strong className="text-foreground">You are solely responsible</strong> for the accuracy of infringement claims, ensuring content doesn't violate third-party rights, and ensuring compliance with applicable laws.</p>
                                    </div>
                                </SubSection>
                            </Section>

                            {/* 4. Content Ownership */}
                            <Section id="ownership" title="4. Content Ownership & Rights">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="p-5 rounded-xl border border-border bg-card">
                                        <h4 className="font-semibold text-foreground mb-3">Your Content</h4>
                                        <p className="text-sm mb-3">You retain <strong className="text-foreground">full ownership</strong> of all content you upload.</p>
                                        <p className="text-sm">By uploading, you grant Kohza a non-exclusive, worldwide, royalty-free license to host, process, analyze, watermark, and generate reports — strictly limited to operating protection services.</p>
                                    </div>
                                    <div className="p-5 rounded-xl border border-border bg-card">
                                        <h4 className="font-semibold text-foreground mb-3">Kohza IP</h4>
                                        <p className="text-sm mb-3">All Kohza software, branding, and technology are owned by Kohza. You may not:</p>
                                        <ul className="space-y-1 text-sm">
                                            <li>• Copy or reverse-engineer our technology</li>
                                            <li>• Resell or redistribute our services</li>
                                            <li>• Use our branding without permission</li>
                                            <li>• Remove proprietary notices</li>
                                        </ul>
                                    </div>
                                </div>
                            </Section>

                            {/* 5. Payments */}
                            <Section id="payments" title="5. Payments, Fees & Billing">
                                <SubSection title="Fee Structure">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                                            <thead>
                                                <tr className="bg-secondary/50">
                                                    <th className="text-left px-4 py-2.5 font-semibold text-foreground">Fee Type</th>
                                                    <th className="text-left px-4 py-2.5 font-semibold text-foreground">Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {[
                                                    ['Subscription', 'Monthly or annual recurring fees'],
                                                    ['Per-takedown', 'Charges for individual enforcement actions'],
                                                    ['Usage-based', 'Based on bandwidth, analytics, or active users'],
                                                    ['Custom service', 'Specialized DRM or enforcement needs'],
                                                ].map(([type, desc], i) => (
                                                    <tr key={i} className="border-t border-border">
                                                        <td className="px-4 py-2.5 text-foreground font-medium">{type}</td>
                                                        <td className="px-4 py-2.5">{desc}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </SubSection>
                                <SubSection title="Payment Terms">
                                    <BulletList items={[
                                        'All fees are non-refundable unless explicitly agreed in a signed contract',
                                        'Invoices are due within 30 days of issue',
                                        'Services may be suspended if payment is 15+ days overdue',
                                        'Payment credentials are processed through secure third-party processors',
                                        'You are responsible for all applicable taxes, duties, and charges',
                                    ]} />
                                </SubSection>
                            </Section>

                            {/* 6. Prohibited Uses */}
                            <Section id="prohibited" title="6. Prohibited Uses">
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        { title: 'False Claims', desc: 'Submitting fraudulent infringement claims' },
                                        { title: 'Unauthorized Content', desc: 'Controlling content you don\'t own' },
                                        { title: 'Abuse', desc: 'Abusing DMCA or legal processes' },
                                        { title: 'Harassment', desc: 'Targeting competitors or individuals' },
                                        { title: 'Illegal Activity', desc: 'Violating applicable laws' },
                                        { title: 'Reverse Engineering', desc: 'Extracting Kohza\'s technology' },
                                        { title: 'Spam or Malware', desc: 'Uploading malicious code or spam' },
                                        { title: 'Interference', desc: 'Disrupting Kohza\'s services or infrastructure' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-destructive/10 bg-destructive/5">
                                            <span className="text-destructive font-bold text-sm mt-0.5">✕</span>
                                            <div>
                                                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                                <p className="text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-sm"><strong className="text-foreground">Kohza reserves the right</strong> to reject, suspend, or cancel any request, suspend or terminate your account, and pursue legal action against violators.</p>
                            </Section>

                            {/* 7. Third-Party */}
                            <Section id="third-party" title="7. Third-Party Platforms & Services">
                                <p>Kohza interacts with third-party platforms (YouTube, social media, file hosts, ISPs, etc.) to enforce your rights and pursue takedowns.</p>
                                <SubSection title="Important Limitations">
                                    <BulletList items={[
                                        'Kohza has no control over third-party platform policies or response times',
                                        'Kohza is not responsible for platform refusals, delays, or content reinstatement',
                                        'Kohza does not guarantee third-party compliance with takedown requests',
                                        'Enforcement outcomes vary by platform, jurisdiction, and circumstances',
                                        'Content removal is on a best-effort basis and not guaranteed',
                                    ]} />
                                </SubSection>
                            </Section>

                            {/* 8. Data & Privacy */}
                            <Section id="data-privacy" title="8. Data, Privacy & Confidentiality">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="p-5 rounded-xl border border-border bg-card">
                                        <h4 className="font-semibold text-foreground mb-3">Data We Collect</h4>
                                        <ul className="space-y-1.5 text-sm">
                                            <li>• Content metadata and URLs</li>
                                            <li>• User access logs and analytics</li>
                                            <li>• Device info and IP addresses</li>
                                            <li>• Infringement evidence and reports</li>
                                            <li>• Payment info (processed securely)</li>
                                        </ul>
                                    </div>
                                    <div className="p-5 rounded-xl border border-border bg-card">
                                        <h4 className="font-semibold text-foreground mb-3">We Keep Confidential</h4>
                                        <ul className="space-y-1.5 text-sm">
                                            <li>• Your content and URLs</li>
                                            <li>• Credentials and auth data</li>
                                            <li>• Enforcement records and reports</li>
                                            <li>• Business information and strategies</li>
                                        </ul>
                                        <p className="text-xs mt-3 text-muted-foreground">Confidentiality obligations survive termination.</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm">For our full Privacy Policy, visit <Link to="/privacy" className="text-primary hover:underline font-medium">/privacy</Link>.</p>
                            </Section>

                            {/* 9. Warranties */}
                            <Section id="warranties" title="9. Disclaimer of Warranties">
                                <div className="p-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5">
                                    <p className="font-bold text-foreground text-sm uppercase tracking-wide mb-4">Services are provided "as is" and "as available"</p>
                                    <BulletList items={[
                                        'No guarantee of complete or permanent removal of infringing content',
                                        'Best efforts only — commercially reasonable efforts are used',
                                        'No response time guarantee from third-party platforms',
                                        'No platform guarantee — we cannot force third-party compliance',
                                        'No legal advice — Kohza does not provide legal representation',
                                        'Variable outcomes — results depend on factors outside our control',
                                    ]} />
                                </div>
                            </Section>

                            {/* 10. Liability */}
                            <Section id="liability" title="10. Limitation of Liability">
                                <p>To the maximum extent permitted by law:</p>
                                <BulletList items={[
                                    'Kohza is not liable for indirect, incidental, consequential, punitive, or exemplary damages',
                                    'Kohza is not liable for lost revenue, profits, business interruption, or reputational damage',
                                    'Kohza is not liable for loss or corruption of data',
                                    'Total liability shall not exceed fees paid in the preceding 12 months',
                                ]} />
                                <p className="text-sm mt-3 italic">Some jurisdictions do not allow liability limitations, so the above may not apply to you.</p>
                            </Section>

                            {/* 11. Indemnification */}
                            <Section id="indemnification" title="11. Indemnification">
                                <p>You agree to indemnify, defend, and hold harmless Kohza from any claims arising from:</p>
                                <BulletList items={[
                                    'False or improper infringement claims you submit',
                                    'Misrepresentation of ownership or authorization',
                                    'Misuse of DRM or takedown services',
                                    'Violation of these Terms or applicable laws',
                                    'Disputes with third parties or platforms',
                                    'Violation of others\' intellectual property or privacy rights',
                                ]} />
                            </Section>

                            {/* 12. Termination */}
                            <Section id="termination" title="12. Termination & Suspension">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="p-5 rounded-xl border border-border bg-card">
                                        <h4 className="font-semibold text-foreground mb-3">By Kohza</h4>
                                        <p className="text-sm mb-2">Kohza may suspend or terminate your account for:</p>
                                        <ul className="space-y-1 text-sm">
                                            <li>• Violation of these Terms</li>
                                            <li>• Illegal activity or misuse</li>
                                            <li>• Non-payment of fees</li>
                                            <li>• At Kohza's sole discretion</li>
                                        </ul>
                                    </div>
                                    <div className="p-5 rounded-xl border border-border bg-card">
                                        <h4 className="font-semibold text-foreground mb-3">By You</h4>
                                        <p className="text-sm mb-2">Cancel your account by contacting:</p>
                                        <a href="mailto:aryan@kohza.in" className="text-primary hover:underline text-sm font-medium">aryan@kohza.in</a>
                                        <p className="text-sm mt-3">You remain liable for fees through the end of your current billing period.</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm">Upon termination, your access ceases immediately and enforcement activities will stop (subject to legal obligations). Confidentiality obligations survive termination.</p>
                            </Section>

                            {/* 13. Modifications */}
                            <Section id="modifications" title="13. Modifications to Terms">
                                <p>Kohza may update these Terms at any time. For significant changes, we will provide notice via email or in-app notification. <strong className="text-foreground">Continued use of Kohza constitutes acceptance of updated Terms.</strong></p>
                            </Section>

                            {/* 14. Governing Law */}
                            <Section id="governing-law" title="14. Governing Law & Jurisdiction">
                                <p>These Terms are governed by the laws of <strong className="text-foreground">India</strong>, without regard to conflict of law principles. Any legal disputes shall be resolved exclusively in Indian courts.</p>
                            </Section>

                            {/* 15. Disputes */}
                            <Section id="disputes" title="15. Dispute Resolution">
                                <p>Before pursuing litigation, we encourage good-faith negotiation. Contact <a href="mailto:aryan@kohza.in" className="text-primary hover:underline font-medium">aryan@kohza.in</a> with a detailed description. If negotiation fails, disputes may be resolved through binding arbitration under Indian arbitration law.</p>
                            </Section>

                            {/* 16. Contact */}
                            <Section id="contact" title="16. Contact & Support">
                                <div className="p-6 rounded-xl border border-border bg-card">
                                    <h3 className="font-semibold text-foreground mb-4">Kohza Support</h3>
                                    <div className="space-y-3 text-sm">
                                        <p className="flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-primary" />
                                            <a href="mailto:aryan@kohza.in" className="text-primary hover:underline">aryan@kohza.in</a>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Globe className="w-4 h-4 text-primary" />
                                            <a href="https://www.kohza.in" className="text-primary hover:underline">www.kohza.in</a>
                                        </p>
                                    </div>
                                </div>
                            </Section>

                            {/* Footer note */}
                            <div className="pt-8 border-t border-border text-sm text-muted-foreground space-y-2">
                                <p>These Terms became effective on <strong className="text-foreground">February 9, 2026</strong>.</p>
                                <p>By using Kohza, you acknowledge that you have read and understood these Terms and agree to be bound by them.</p>
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
