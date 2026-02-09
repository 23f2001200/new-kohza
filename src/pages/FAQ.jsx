import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const PREMIUM_EASE = [0.22, 1, 0.36, 1];

// FAQ Item Component
const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div style={{ borderBottom: '1px solid rgba(55, 53, 47, 0.09)' }}>
        <button
            onClick={onClick}
            style={{
                width: '100%',
                padding: '20px 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'left',
                gap: '16px'
            }}
        >
            <span style={{ fontSize: '15px', fontWeight: '500', color: 'rgb(55, 53, 47)', lineHeight: '1.5' }}>
                {question}
            </span>
            <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ flexShrink: 0 }}
            >
                <ChevronDown size={18} color="rgba(55, 53, 47, 0.4)" />
            </motion.div>
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ overflow: 'hidden' }}
                >
                    <div style={{
                        paddingBottom: '20px',
                        fontSize: '14px',
                        lineHeight: '1.7',
                        color: 'rgba(55, 53, 47, 0.65)'
                    }}>
                        {answer}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

// FAQ Section Component
const FAQSection = ({ title, items, openIndex, setOpenIndex, startIndex }) => (
    <div style={{ marginBottom: '48px' }}>
        <h2 style={{
            fontSize: '20px',
            fontWeight: '500',
            color: 'rgb(55, 53, 47)',
            marginBottom: '20px',
            letterSpacing: '-0.01em'
        }}>
            {title}
        </h2>
        <div>
            {items.map((item, i) => (
                <FAQItem
                    key={i}
                    question={item.q}
                    answer={item.a}
                    isOpen={openIndex === startIndex + i}
                    onClick={() => setOpenIndex(openIndex === startIndex + i ? null : startIndex + i)}
                />
            ))}
        </div>
    </div>
);

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const securityFAQs = [
        {
            q: "How much security does Kohza provide?",
            a: "Kohza provides enterprise-grade security through Hollywood-standard DRM encryption (Widevine & FairPlay) and multi-layer authentication. No internet-based downloader can download or play videos protected by Kohza. We use the same encryption technology as Netflix, Disney+, and other major streaming platforms. Additionally, we provide dynamic watermarking to prevent redistribution through screen captures."
        },
        {
            q: "How does viewer-specific watermarking work?",
            a: "We implement dynamic watermarking that can display user-specific information (User ID, email, IP address) as either moving or static overlays on the video. This creates a forensic trail that helps identify the source of any leaked content. Our team handles all watermarking implementation for you—you just tell us what information to display."
        },
        {
            q: "Does Kohza provide domain/URL whitelisting?",
            a: "Yes, all Kohza integrations include domain whitelisting by default. Your videos will only play on authorized domains that you specify. We configure this for you during onboarding to ensure your content is protected from unauthorized embedding."
        },
        {
            q: "Can I restrict users based on total watch time?",
            a: "Absolutely. We can implement watch time restrictions based on your requirements. Whether you want to limit total viewing hours, restrict simultaneous streams, or create custom access rules, we'll configure it for you. Just tell us your requirements and we handle the technical implementation."
        }
    ];

    const integrationFAQs = [
        {
            q: "How do I integrate Kohza with my website or app?",
            a: "You don't have to worry about integration—we do everything for you. Our team handles the complete setup, including embedding the player on your website, configuring security settings, and ensuring everything works perfectly. Just provide us access to your platform and we'll take care of the rest."
        },
        {
            q: "Do you support WordPress, Moodle, or custom platforms?",
            a: "Yes, we support all platforms including WordPress, Moodle, custom PHP/Node.js sites, React apps, and more. Our team will integrate Kohza directly into your existing system. There's no plugin to install or code to write on your end—we handle the complete technical implementation."
        },
        {
            q: "What if I don't have a website?",
            a: "No problem! We can provide you with secure, shareable video links that can be sent directly to your users. These links are protected with the same DRM security and can include viewer-specific restrictions. We'll set up everything you need."
        },
        {
            q: "Does Kohza include server and CDN?",
            a: "Yes, we use enterprise-grade infrastructure with AWS S3 storage and CloudFront CDN for global content delivery. Your videos are stored securely and delivered with optimal performance worldwide. This is all included—no additional setup required."
        }
    ];

    const usageFAQs = [
        {
            q: "Can Kohza handle high traffic?",
            a: "Whether you have 100 or 100,000 concurrent viewers, Kohza's infrastructure scales automatically. We use AWS CloudFront's global CDN network to ensure smooth playback for viewers anywhere in the world, regardless of peak traffic. There are no limits on concurrent viewers."
        },
        {
            q: "How do I upload videos?",
            a: "You can send us your videos via secure upload link, cloud storage (Dropbox, Google Drive), or direct transfer. We handle the encoding, encryption, and optimization. You don't need to manage any technical upload process—just get the files to us and we take care of everything."
        },
        {
            q: "Can I customize the video player?",
            a: "Yes, the Kohza player is fully customizable. We offer various themes, branding options, and feature configurations. Tell us how you want the player to look and behave, and we'll configure it for you. Custom colors, logos, controls—you name it."
        },
        {
            q: "Do you provide video analytics?",
            a: "Yes, we provide detailed analytics including video views, watch time, engagement metrics, bandwidth usage, and viewer behavior data. You'll get regular reports and can request custom analytics based on your needs."
        }
    ];

    const pricingFAQs = [
        {
            q: "Do you offer a free trial?",
            a: "We don't offer a self-service free trial. Instead, we provide personalized demos and consultations to understand your specific needs. Contact us to schedule a call and we'll show you exactly how Kohza can protect your content."
        },
        {
            q: "Is bandwidth unlimited?",
            a: "Yes! Unlike other providers, Kohza includes unlimited bandwidth at no extra cost. Your videos will never stop playing due to bandwidth limits, and you won't receive surprise overage charges. Stream as much as you need."
        },
        {
            q: "What happens if my usage increases significantly?",
            a: "Nothing to worry about! Your videos will continue playing without interruption. We don't have usage caps or overage charges like other providers. We'll proactively reach out if we notice significant growth to ensure your experience remains optimal."
        },
        {
            q: "What payment methods do you accept?",
            a: "We accept credit/debit cards, PayPal, bank transfers, and UPI (for India). For enterprise clients, we offer flexible payment terms. Contact us to discuss the best option for you."
        },
        {
            q: "Are there any additional taxes?",
            a: "For clients in India, GST at 18% applies. For international clients, no additional taxes are charged by Kohza, though your local tax laws may apply."
        }
    ];

    const supportFAQs = [
        {
            q: "How do I get support?",
            a: "Contact us anytime at aryan@kohza.in or through our booking link. We provide direct, personalized support—no ticket queues or chatbots. You'll work directly with our team who knows your setup."
        },
        {
            q: "What if I have custom requirements?",
            a: "We love custom requirements! Whether it's specific DRM configurations, custom player features, unique integration needs, or specialized workflows, we're happy to accommodate. Just reach out and tell us what you need."
        }
    ];

    return (
        <div style={{
            minHeight: '100vh',
            background: '#ffffff',
            color: 'rgb(55, 53, 47)',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
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
                    <header style={{ marginBottom: '48px' }}>
                        <span style={{
                            fontSize: '11px',
                            fontWeight: '500',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: 'rgba(55, 53, 47, 0.4)',
                            display: 'block',
                            marginBottom: '14px'
                        }}>
                            Support
                        </span>
                        <h1 style={{
                            fontSize: '40px',
                            fontWeight: '500',
                            letterSpacing: '-0.025em',
                            lineHeight: '1.2',
                            color: 'rgb(55, 53, 47)',
                            marginBottom: '16px'
                        }}>
                            Frequently Asked Questions
                        </h1>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.6',
                            color: 'rgba(55, 53, 47, 0.6)'
                        }}>
                            Everything you need to know about Kohza's video protection platform.
                        </p>
                    </header>

                    {/* FAQ Sections */}
                    <FAQSection title="Security & Protection" items={securityFAQs} openIndex={openIndex} setOpenIndex={setOpenIndex} startIndex={0} />
                    <FAQSection title="Integration & Setup" items={integrationFAQs} openIndex={openIndex} setOpenIndex={setOpenIndex} startIndex={4} />
                    <FAQSection title="Features & Usage" items={usageFAQs} openIndex={openIndex} setOpenIndex={setOpenIndex} startIndex={8} />
                    <FAQSection title="Pricing & Billing" items={pricingFAQs} openIndex={openIndex} setOpenIndex={setOpenIndex} startIndex={12} />
                    <FAQSection title="Support" items={supportFAQs} openIndex={openIndex} setOpenIndex={setOpenIndex} startIndex={17} />

                    {/* CTA */}
                    <div style={{
                        marginTop: '48px',
                        padding: '32px',
                        background: 'rgba(55, 53, 47, 0.024)',
                        borderRadius: '12px',
                        textAlign: 'center'
                    }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '12px', color: 'rgb(55, 53, 47)' }}>
                            Still have questions?
                        </h3>
                        <p style={{ fontSize: '14px', color: 'rgba(55, 53, 47, 0.6)', marginBottom: '20px' }}>
                            We're here to help. Get in touch with our team.
                        </p>
                        <a
                            href="mailto:aryan@kohza.in"
                            style={{
                                display: 'inline-block',
                                padding: '12px 24px',
                                background: 'rgb(55, 53, 47)',
                                color: '#fff',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontSize: '14px',
                                fontWeight: '500'
                            }}
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Footer */}
                    <footer style={{
                        marginTop: '48px',
                        paddingTop: '24px',
                        borderTop: '1px solid rgba(55,53,47,0.09)',
                        textAlign: 'center',
                        fontSize: '14px',
                        color: 'rgba(55, 53, 47, 0.5)'
                    }}>
                        © 2026 Kohza. All rights reserved.
                    </footer>
                </motion.div>
            </main>
        </div>
    );
}
