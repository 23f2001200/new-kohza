import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Globe } from 'lucide-react';
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

// Subsection
const Subsection = ({ id, title, children }) => (
    <div style={{ marginBottom: '20px' }}>
        <h3 style={{ ...typography.h3, color: 'rgb(55, 53, 47)', marginBottom: '8px' }}>
            {id} {title}
        </h3>
        <div style={{ ...typography.body }}>
            {children}
        </div>
    </div>
);

// List
const List = ({ items }) => (
    <ul style={{
        marginTop: '8px',
        marginBottom: '8px',
        listStyleType: 'disc'
    }}>
        {items.map((item, i) => (
            <li key={i} style={{ ...typography.body, marginBottom: '3px', paddingLeft: '4px' }}>{item}</li>
        ))}
    </ul>
);

// Callout
const Callout = ({ children, highlight = false }) => (
    <div style={{
        padding: '16px 16px 16px 20px',
        borderRadius: '4px',
        marginTop: '10px',
        marginBottom: '10px',
        background: highlight ? 'rgba(255, 212, 0, 0.08)' : 'rgba(55, 53, 47, 0.03)',
        borderLeft: highlight ? '3px solid rgba(203, 145, 47, 0.6)' : '3px solid rgba(55, 53, 47, 0.1)',
        ...typography.body
    }}>
        {children}
    </div>
);

// Paragraph
const P = ({ children, style = {} }) => (
    <p style={{ ...typography.body, marginBottom: '8px', ...style }}>{children}</p>
);

// Strong text
const Strong = ({ children }) => (
    <strong style={{ fontWeight: '500', color: 'rgb(55, 53, 47)' }}>{children}</strong>
);

export default function Terms() {
    const tocSections = [
        "What is Kohza?", "Eligibility & Age Restriction", "How Kohza Works",
        "Content Ownership & Rights", "Payments, Fees & Billing", "Prohibited Uses",
        "Third-Party Platforms & Services", "Data, Privacy & Confidentiality",
        "Disclaimer of Warranties", "Limitation of Liability", "Indemnification",
        "Termination & Suspension", "Modifications to Terms", "Governing Law & Jurisdiction",
        "Dispute Resolution & Arbitration", "General Provisions", "Contact & Support",
        "Acknowledgment & Acceptance", "Effectiveness"
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
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: PREMIUM_EASE }}
                >
                    {/* Header */}
                    <header style={{ marginBottom: '40px' }}>
                        <span style={{ ...typography.label, display: 'block', marginBottom: '14px' }}>Legal</span>
                        <h1 style={{ ...typography.h1, color: 'rgb(55, 53, 47)', marginBottom: '12px' }}>
                            Terms of Service
                        </h1>
                        <p style={{ ...typography.small }}>Last updated February 9, 2026</p>
                    </header>

                    {/* Intro */}
                    <div style={{ marginBottom: '32px' }}>
                        <P>Welcome to Kohza. These Terms of Service ("Terms") govern your access to and use of the Kohza website, applications, services, and tools.</P>
                        <P>By accessing or using Kohza, you agree to be bound by these Terms. If you do not agree, please do not use our services.</P>
                    </div>

                    {/* TOC */}
                    <div style={{ marginBottom: '40px', padding: '18px 22px', background: 'rgba(55, 53, 47, 0.024)', borderRadius: '8px' }}>
                        <p style={{ ...typography.small, fontWeight: '500', color: 'rgb(55, 53, 47)', marginBottom: '10px' }}>Contents</p>
                        <div style={{ columns: 2, columnGap: '40px' }}>
                            {tocSections.map((s, i) => (
                                <a key={i} href={`#section-${i + 1}`} style={{
                                    display: 'block', fontSize: '13px', color: 'rgba(55, 53, 47, 0.5)',
                                    textDecoration: 'none', lineHeight: '1.7', breakInside: 'avoid'
                                }}>
                                    {i + 1}. {s}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Sections */}
                    <Section id={1} title="What is Kohza?">
                        <P>Kohza is a comprehensive digital protection and control platform for creators, coaches, and businesses who sell premium content online.</P>
                        <P><Strong>Kohza provides:</Strong></P>
                        <List items={[
                            "DRM-style access control and encryption for video and digital content",
                            "Dynamic watermarking and screen capture prevention",
                            "Real-time piracy detection and monitoring",
                            "Automated and manual piracy takedowns (DMCA and equivalent legal actions)",
                            "User authentication and device management",
                            "Analytics and enforcement reporting"
                        ]} />
                        <P>Kohza acts as a service provider and authorized enforcement agent. We do not store, host, or distribute content; we only protect and enforce rights for content you own or are authorized to manage.</P>
                        <Callout highlight>
                            <Strong>Important:</Strong> Kohza does not provide legal advice or legal representation. We act in good faith with best efforts to identify and pursue removal of unauthorized content.
                        </Callout>
                    </Section>

                    <Section id={2} title="Eligibility & Age Restriction">
                        <P>You must be at least <Strong>18 years old</Strong> to use Kohza and have the legal capacity to enter into a binding contract.</P>
                        <P>By using Kohza, you represent and warrant that:</P>
                        <List items={[
                            "You are 18 years of age or older",
                            "You are legally capable of entering into this agreement",
                            "You will comply with all applicable laws and regulations",
                            "You have the authority to agree to these Terms on behalf of any organization you represent"
                        ]} />
                    </Section>

                    <Section id={3} title="How Kohza Works">
                        <Subsection id="3.1" title="Service Model">
                            <P>Kohza provides personalized DRM and anti-piracy services through:</P>
                            <List items={[
                                "Direct engagement and onboarding with the Kohza team",
                                "A secure dashboard for content management and monitoring",
                                "Automated enforcement workflows",
                                "Real-time analytics and reporting"
                            ]} />
                        </Subsection>
                        <Subsection id="3.2" title="Your Responsibilities">
                            <P>When using Kohza, you agree to:</P>
                            <List items={[
                                "Provide accurate information about your content and ownership",
                                "Ensure you own or are legally authorized to protect the content you upload",
                                "Supply correct URLs, files, or evidence for enforcement actions",
                                "Ensure all instructions you provide to Kohza are lawful and legitimate",
                                "Comply with DMCA, copyright laws, and platform terms of service"
                            ]} />
                            <P><Strong>You are solely responsible for:</Strong></P>
                            <List items={[
                                "The accuracy of infringement claims you submit",
                                "Ensuring your content does not violate third-party rights or intellectual property",
                                "Ensuring your content does not violate applicable laws"
                            ]} />
                        </Subsection>
                    </Section>

                    <Section id={4} title="Content Ownership & Rights">
                        <Subsection id="4.1" title="Your Content">
                            <P>You retain full ownership of all content you upload to Kohza.</P>
                            <P>By uploading content, you grant Kohza a non-exclusive, worldwide, royalty-free license to:</P>
                            <List items={[
                                "Host, store, and process your content",
                                "Display and distribute your content for authorized users only",
                                "Analyze your content for piracy and unauthorized sharing",
                                "Create watermarks and DRM protections for your content",
                                "Generate reports and analytics about your content"
                            ]} />
                            <P>This license is strictly limited to operating Kohza's protection and enforcement services.</P>
                        </Subsection>
                        <Subsection id="4.2" title="Kohza Intellectual Property">
                            <P>All Kohza software, platform features, branding, user interface, underlying technology, and proprietary systems are owned by Kohza.</P>
                            <P><Strong>You may not:</Strong></P>
                            <List items={[
                                "Copy, reverse-engineer, or attempt to extract Kohza's technology",
                                "Resell, redistribute, or sublicense Kohza's services",
                                "Use Kohza's branding, logos, or trade names without written permission"
                            ]} />
                        </Subsection>
                    </Section>

                    <Section id={5} title="Payments, Fees & Billing">
                        <Subsection id="5.1" title="Fee Structure">
                            <P>Fees for Kohza services may include:</P>
                            <List items={[
                                "Subscription plans — Monthly or annual recurring fees",
                                "Per-takedown fees — Charges for individual enforcement actions",
                                "Usage-based fees — Charges based on bandwidth, analytics, or active users",
                                "Custom service fees — Charges for specialized DRM or enforcement needs"
                            ]} />
                        </Subsection>
                        <Subsection id="5.2" title="Payment Terms">
                            <List items={[
                                "All fees are non-refundable unless explicitly agreed in a signed contract",
                                "Invoices are due within 30 days of issue",
                                "Kohza may suspend services if payment is more than 15 days overdue",
                                "Kohza does not store full payment card information"
                            ]} />
                        </Subsection>
                    </Section>

                    <Section id={6} title="Prohibited Uses">
                        <P>You agree <Strong>not</Strong> to use Kohza for:</P>
                        <List items={[
                            "False claims — Submitting false, misleading, or fraudulent infringement claims",
                            "Unauthorized content — Attempting to remove content you do not own",
                            "Abuse — Abusing DMCA or copyright takedown systems",
                            "Harassment — Targeting competitors or individuals maliciously",
                            "Illegal activity — Violating any applicable laws or regulations",
                            "Reverse engineering — Attempting to extract Kohza's technology"
                        ]} />
                        <Callout>
                            Kohza reserves the right to reject, suspend, or cancel any request, terminate accounts, and pursue legal action against violators.
                        </Callout>
                    </Section>

                    <Section id={7} title="Third-Party Platforms & Services">
                        <P>Kohza interacts with third-party platforms (YouTube, social media, file hosts, ISPs, etc.) to enforce your rights.</P>
                        <P><Strong>Important limitations:</Strong></P>
                        <List items={[
                            "Kohza has no control over third-party platform policies, decisions, or response times",
                            "Kohza is not responsible for platform refusals, delays, or content reinstatement",
                            "Kohza does not guarantee that third parties will comply with takedown requests",
                            "Enforcement outcomes vary by platform, jurisdiction, and circumstances"
                        ]} />
                    </Section>

                    <Section id={8} title="Data, Privacy & Confidentiality">
                        <Subsection id="8.1" title="Data Collection">
                            <P>Kohza collects only the data necessary to provide DRM and enforcement services, including content metadata, user access logs, device information, and payment information.</P>
                        </Subsection>
                        <Subsection id="8.2" title="Confidentiality">
                            <P>Kohza treats all client materials as confidential. We may disclose information when required by law, necessary for enforcement, or needed to address security threats. Confidentiality obligations survive termination.</P>
                        </Subsection>
                    </Section>

                    <Section id={9} title="Disclaimer of Warranties">
                        <Callout highlight>
                            <Strong>KOHZA SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE."</Strong>
                        </Callout>
                        <P>To the maximum extent permitted by law, Kohza disclaims all warranties, including:</P>
                        <List items={[
                            "No guarantee of complete or permanent content removal",
                            "Best efforts only — results vary by platform and jurisdiction",
                            "No specific response time guarantees from third parties",
                            "No legal advice or representation provided"
                        ]} />
                        <P><Strong>You use Kohza at your own risk.</Strong></P>
                    </Section>

                    <Section id={10} title="Limitation of Liability">
                        <P>To the maximum extent permitted by law:</P>
                        <List items={[
                            "Kohza is not liable for indirect, incidental, or consequential damages",
                            "Kohza is not liable for lost revenue, profits, or reputational damage",
                            "Total liability shall not exceed fees paid in the preceding 12 months"
                        ]} />
                        <P style={{ fontStyle: 'italic', ...typography.small }}>Some jurisdictions do not allow liability limitations, so the above may not apply to you.</P>
                    </Section>

                    <Section id={11} title="Indemnification">
                        <P>You agree to indemnify and hold harmless Kohza from claims arising from:</P>
                        <List items={[
                            "False or improper infringement claims you submit",
                            "Misrepresentation of ownership or authorization",
                            "Misuse of DRM or takedown services",
                            "Your violation of these Terms or applicable laws"
                        ]} />
                    </Section>

                    <Section id={12} title="Termination & Suspension">
                        <Subsection id="12.1" title="Termination by Kohza">
                            <P>Kohza may suspend or terminate your account for Terms violations, illegal activity, non-payment, or at our sole discretion.</P>
                        </Subsection>
                        <Subsection id="12.2" title="Effects of Termination">
                            <P>Upon termination, your access ceases immediately, enforcement activities stop (subject to legal obligations), and you remain liable for incurred fees.</P>
                        </Subsection>
                        <Subsection id="12.3" title="Termination by You">
                            <P>Cancel by contacting <a href="mailto:aryan@kohza.in" style={{ color: 'rgb(55, 53, 47)', textDecoration: 'underline' }}>aryan@kohza.in</a>. You remain liable for fees through the current billing period.</P>
                        </Subsection>
                    </Section>

                    <Section id={13} title="Modifications to Terms">
                        <P>Kohza may update these Terms at any time. <Strong>Continued use constitutes acceptance.</Strong> For significant changes, we will provide notice via email or in-app notification.</P>
                    </Section>

                    <Section id={14} title="Governing Law & Jurisdiction">
                        <P>These Terms are governed by the laws of <Strong>India</Strong>. Any disputes shall be resolved exclusively in Indian courts.</P>
                    </Section>

                    <Section id={15} title="Dispute Resolution & Arbitration">
                        <P>Before litigation, we encourage good-faith negotiation. Contact <a href="mailto:aryan@kohza.in" style={{ color: 'rgb(55, 53, 47)', textDecoration: 'underline' }}>aryan@kohza.in</a> with a description of the issue. If negotiation fails, disputes may be resolved through binding arbitration under Indian law.</P>
                    </Section>

                    <Section id={16} title="General Provisions">
                        <List items={[
                            "Entire Agreement — These Terms constitute the complete agreement between you and Kohza",
                            "Severability — Invalid provisions do not affect remaining terms",
                            "Waiver — No waiver of any breach constitutes waiver of subsequent breaches",
                            "Assignment — You may not assign without written consent; Kohza may assign freely"
                        ]} />
                    </Section>

                    <Section id={17} title="Contact & Support">
                        <div style={{
                            padding: '24px',
                            background: 'rgba(55, 53, 47, 0.024)',
                            borderRadius: '8px',
                            marginTop: '16px'
                        }}>
                            <p style={{ fontWeight: '500', color: 'rgb(55, 53, 47)', marginBottom: '16px', fontSize: '16px' }}>Kohza</p>
                            <p style={{ ...typography.body, display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Mail size={15} strokeWidth={1.5} /> <a href="mailto:aryan@kohza.in" style={{ color: 'rgb(55, 53, 47)', textDecoration: 'underline' }}>aryan@kohza.in</a>
                            </p>
                            <p style={{ ...typography.body, display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Globe size={15} strokeWidth={1.5} /> <a href="https://www.kohza.in" style={{ color: 'rgb(55, 53, 47)', textDecoration: 'underline' }}>kohza.in</a>
                            </p>
                        </div>
                    </Section>

                    <Section id={18} title="Acknowledgment & Acceptance">
                        <Callout>
                            <Strong>By using Kohza, you acknowledge that:</Strong>
                            <List items={[
                                "You have read and understood these Terms",
                                "You agree to be bound by these Terms",
                                "You have the legal authority to agree"
                            ]} />
                        </Callout>
                        <P>If you do not agree, you must not use Kohza.</P>
                    </Section>

                    <Section id={19} title="Effectiveness">
                        <P>These Terms became effective on February 9, 2026.</P>
                        <P>For questions, contact <a href="mailto:aryan@kohza.in" style={{ color: 'rgb(55, 53, 47)', textDecoration: 'underline' }}>aryan@kohza.in</a></P>
                    </Section>

                    {/* Footer */}
                    <footer style={{
                        marginTop: '48px',
                        paddingTop: '24px',
                        borderTop: '1px solid rgba(55,53,47,0.09)',
                        textAlign: 'center',
                        ...typography.small
                    }}>
                        © 2026 Kohza. All rights reserved.
                    </footer>
                </motion.div>
            </main>
        </div>
    );
}
