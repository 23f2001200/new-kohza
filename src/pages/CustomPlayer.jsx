import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Shield, Lock, Eye, Zap, Layers, Globe, Download, Activity, Play,
    ArrowLeft, Terminal, Tv, BookOpen, RotateCcw, Wifi, Gauge, Keyboard, Hand, Settings, ChevronDown, ChevronUp,
    Building, BarChart3, Clock, Volume2, Subtitles, Maximize2, Palette, Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PREMIUM_EASE = [0.22, 1, 0.36, 1];

// Typography-focused Section Header
const SectionHeader = ({ label, title, subtitle, light = false }) => (
    <div style={{ marginBottom: '56px' }}>
        {label && (
            <span style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: light ? 'rgba(255,255,255,0.4)' : 'rgba(33, 31, 26, 0.4)',
                fontWeight: '500',
                display: 'block',
                marginBottom: '12px'
            }}>
                {label}
            </span>
        )}
        <h2 style={{
            fontSize: '32px',
            fontWeight: '600',
            color: light ? '#ffffff' : '#211f1a',
            lineHeight: '1.25',
            letterSpacing: '-0.02em',
            marginBottom: subtitle ? '16px' : '0'
        }}>
            {title}
        </h2>
        {subtitle && (
            <p style={{
                fontSize: '17px',
                lineHeight: '1.7',
                color: light ? 'rgba(255,255,255,0.55)' : 'rgba(33, 31, 26, 0.55)',
                maxWidth: '640px'
            }}>
                {subtitle}
            </p>
        )}
    </div>
);

// Clean Feature Block
const FeatureBlock = ({ icon: Icon, title, desc }) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: PREMIUM_EASE }}
        style={{ marginBottom: '48px' }}
    >
        <div style={{ display: 'flex', gap: '20px', alignItems: 'start' }}>
            <div style={{
                width: '40px', height: '40px',
                background: 'rgba(33, 31, 26, 0.04)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0
            }}>
                <Icon size={18} color="#211f1a" strokeWidth={1.5} />
            </div>
            <div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '6px', color: '#211f1a', lineHeight: '1.4' }}>{title}</h3>
                <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'rgba(33, 31, 26, 0.55)' }}>{desc}</p>
            </div>
        </div>
    </motion.div>
);

// FAQ Accordion
const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div style={{ borderBottom: '1px solid rgba(33,31,26,0.06)' }}>
        <button
            onClick={onClick}
            style={{
                width: '100%', padding: '24px 0', background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left'
            }}
        >
            <span style={{ fontSize: '15px', fontWeight: '500', color: '#211f1a', lineHeight: '1.5' }}>{question}</span>
            <ChevronDown size={16} color="rgba(33,31,26,0.4)" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: PREMIUM_EASE }}
                    style={{ overflow: 'hidden' }}
                >
                    <p style={{ fontSize: '15px', lineHeight: '1.75', color: 'rgba(33,31,26,0.55)', paddingBottom: '24px' }}>{answer}</p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

export default function CustomPlayer() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const features = {
        core: [
            { icon: Palette, title: "Complete Visual Control", desc: "Customize every element of the player interface. Add your logo, adjust colors, embed forms and CTAs. Your brand identity, preserved." },
            { icon: Layers, title: "Distraction-Free Playback", desc: "No advertisements. No recommended videos. No algorithm hijacking your viewers' attention. Just your content." },
            { icon: Smartphone, title: "Native SDKs for Every Platform", desc: "Ready-to-use integrations for React, iOS, Android, Flutter, and vanilla JavaScript. One API, all devices." },
            { icon: Settings, title: "Visual Configuration Editor", desc: "Adjust appearance and controls through a simple GUI. No code required for most customizations." },
            { icon: Subtitles, title: "Automated Captioning", desc: "AI-powered subtitle generation in 40+ languages. Upload custom VTT files with full styling support." },
            { icon: Terminal, title: "Programmatic API Access", desc: "RESTful API for batch operations, webhook integrations, and deep platform customization." }
        ],
        playback: [
            { icon: BookOpen, title: "Chapter Navigation", desc: "Split videos into logical sections. Viewers can jump to specific content instantly." },
            { icon: RotateCcw, title: "Smart Resume", desc: "Playback automatically resumes from the last watched position, across devices." },
            { icon: Download, title: "Secure Offline Access", desc: "Encrypted downloads on mobile devices. Content stays protected in a sandboxed environment." },
            { icon: Gauge, title: "Lightweight Performance", desc: "Optimized player that loads in milliseconds. Works smoothly even on slow connections." },
            { icon: BarChart3, title: "Detailed Analytics", desc: "Track watch time, engagement curves, and drop-off points. Export data via API." },
            { icon: Maximize2, title: "Picture-in-Picture", desc: "Floating video window that follows viewers across applications." }
        ],
        controls: [
            { icon: Keyboard, title: "Keyboard Navigation", desc: "Full keyboard shortcuts. Space to pause, arrows to seek, M for mute." },
            { icon: Hand, title: "Touch Gestures", desc: "Tap, double-tap, and swipe controls optimized for mobile experiences." },
            { icon: Wifi, title: "Adaptive Streaming", desc: "Quality adjusts automatically based on network conditions. No buffering." },
            { icon: Clock, title: "Playback Speed Control", desc: "Variable speed from 0.5x to 4.0x with pitch correction." }
        ],
        security: [
            { icon: Lock, title: "Hardware-Level DRM", desc: "Google Widevine L1 and Apple FairPlay encryption. The same protection used by major streaming platforms." },
            { icon: Eye, title: "Dynamic Watermarking", desc: "Overlay viewer-specific information (email, IP, user ID) in real-time. Traceable and deterrent." },
            { icon: Shield, title: "Encrypted Delivery", desc: "HLS/DASH streams with AES-128 encryption. Content cannot be intercepted or downloaded." }
        ]
    };

    const faqs = [
        { q: "How does the DRM protection work?", a: "We use Google Widevine and Apple FairPlay at the hardware level. Decrypted content never enters accessible system memory, making extraction technically impossible on compliant devices." },
        { q: "Can I fully customize the player appearance?", a: "Yes. You control colors, controls, overlays, and can embed custom HTML including forms. Use our visual editor for quick changes or the API for programmatic control." },
        { q: "What platforms do you support?", a: "Web (all frameworks), iOS, Android, React Native, Flutter, and JavaScript. TV support includes Chromecast and AirPlay integration." },
        { q: "How does watermarking work?", a: "Watermarks render in real-time during playback, displaying viewer-specific data. They cannot be removed because they're not part of the source file." },
        { q: "What analytics are available?", a: "Play count, watch duration, engagement percentages, drop-off timestamps, device breakdown, and geographic data. All accessible via dashboard or API." }
    ];

    return (
        <div style={{ minHeight: '100vh', background: '#ffffff', color: '#211f1a', fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif" }}>
            <div className="bg-noise" style={{ opacity: 0.015 }}></div>

            {/* Navigation */}
            <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(33, 31, 26, 0.06)' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'rgba(33,31,26,0.5)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '500' }}>
                        <ArrowLeft size={14} /> Back
                    </Link>
                    <span style={{ fontSize: '15px', fontWeight: '700', letterSpacing: '-0.02em' }}>kohza.</span>
                    <Link to="/" style={{ padding: '8px 16px', background: '#211f1a', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '500', borderRadius: '6px' }}>
                        Get Started
                    </Link>
                </div>
            </nav>

            <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>

                {/* Hero */}
                <section style={{ padding: '80px 0 64px' }}>
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: PREMIUM_EASE }}>
                        <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(33, 31, 26, 0.4)', fontWeight: '500', display: 'block', marginBottom: '16px' }}>
                            Custom Video Player
                        </span>
                        <h1 style={{ fontSize: 'clamp(36px, 5vw, 48px)', lineHeight: '1.15', marginBottom: '24px', letterSpacing: '-0.03em', fontWeight: '600', color: '#211f1a', maxWidth: '700px' }}>
                            A video player that protects your content and respects your brand.
                        </h1>
                        <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'rgba(33, 31, 26, 0.55)', marginBottom: '40px', maxWidth: '580px' }}>
                            Hardware-encrypted playback with forensic watermarking, adaptive streaming, and complete visual customization. No third-party branding involved.
                        </p>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <Link to="/" style={{ padding: '12px 24px', background: '#211f1a', color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: '500', borderRadius: '6px' }}>
                                Contact Us
                            </Link>
                            <Link to="/" style={{ padding: '12px 24px', border: '1px solid rgba(33,31,26,0.15)', color: '#211f1a', textDecoration: 'none', fontSize: '14px', fontWeight: '500', borderRadius: '6px' }}>
                                View Documentation
                            </Link>
                        </div>
                    </motion.div>
                </section>

                {/* Player Preview */}
                <section style={{ paddingBottom: '80px' }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: PREMIUM_EASE }}>
                        <div style={{ aspectRatio: '16/9', background: '#0a0a0a', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 24px 48px -12px rgba(0,0,0,0.12)', position: 'relative' }}>
                            <video src="/MyComp.mp4" autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)' }}></div>
                            <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                                <div style={{ width: '100%', height: '3px', background: 'rgba(255,255,255,0.2)', marginBottom: '12px', borderRadius: '2px' }}>
                                    <div style={{ width: '42%', height: '100%', background: '#fff', borderRadius: '2px' }}></div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontSize: '12px', fontFamily: 'monospace' }}>
                                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                        <Play size={12} fill="#fff" /><span style={{ opacity: 0.8 }}>05:14 / 12:30</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', opacity: 0.6 }}>
                                        <span>1080p</span><Volume2 size={12} /><Maximize2 size={12} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Core Features */}
                <section style={{ paddingBottom: '80px' }}>
                    <SectionHeader
                        label="Core Features"
                        title="Everything you need to deliver premium video"
                        subtitle="A complete toolkit for hosting, protecting, and customizing your video content across all platforms."
                    />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 64px' }}>
                        {features.core.map((f, i) => <FeatureBlock key={i} {...f} />)}
                    </div>
                </section>

                <hr style={{ border: 'none', borderTop: '1px solid rgba(33,31,26,0.06)', margin: '0 0 80px' }} />

                {/* Playback Features */}
                <section style={{ paddingBottom: '80px' }}>
                    <SectionHeader
                        label="Playback Experience"
                        title="Designed for viewer engagement"
                        subtitle="Features that keep your audience watching and coming back."
                    />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 64px' }}>
                        {features.playback.map((f, i) => <FeatureBlock key={i} {...f} />)}
                    </div>
                </section>

                <hr style={{ border: 'none', borderTop: '1px solid rgba(33,31,26,0.06)', margin: '0 0 80px' }} />

                {/* Control Features */}
                <section style={{ paddingBottom: '80px' }}>
                    <SectionHeader
                        label="Controls"
                        title="Intuitive on every device"
                        subtitle="Keyboard, touch, and accessibility controls built-in."
                    />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 64px' }}>
                        {features.controls.map((f, i) => <FeatureBlock key={i} {...f} />)}
                    </div>
                </section>

                {/* Security Section */}
                <section style={{ background: '#0F0F0F', color: '#fff', margin: '0 -32px', padding: '80px 32px', borderRadius: '0' }}>
                    <div style={{ maxWidth: '1036px', margin: '0 auto' }}>
                        <SectionHeader
                            label="Security"
                            title="Enterprise-grade content protection"
                            subtitle="The same encryption technology trusted by major streaming platforms, available for your content."
                            light={true}
                        />
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                            {features.security.map((f, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1, ease: PREMIUM_EASE }}>
                                    <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', display: 'inline-flex', marginBottom: '20px' }}>
                                        <f.icon size={20} color="#d97706" strokeWidth={1.5} />
                                    </div>
                                    <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: '#fff' }}>{f.title}</h3>
                                    <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(255,255,255,0.5)' }}>{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Platform Support */}
                <section style={{ padding: '80px 0' }}>
                    <SectionHeader
                        label="Integration"
                        title="Works everywhere"
                    />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
                        {[
                            { cat: 'Web', items: ['React', 'Vue', 'Angular', 'HTML5'] },
                            { cat: 'Mobile', items: ['iOS SDK', 'Android SDK', 'Flutter', 'React Native'] },
                            { cat: 'TV', items: ['tvOS', 'Android TV', 'Chromecast', 'AirPlay'] },
                            { cat: 'Codecs', items: ['H.264', 'H.265', 'AV1', 'VP9'] }
                        ].map((col, i) => (
                            <div key={i} style={{ padding: '24px', background: 'rgba(33,31,26,0.02)', borderRadius: '10px' }}>
                                <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '16px', color: '#211f1a' }}>{col.cat}</div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {col.items.map((item, j) => <li key={j} style={{ fontSize: '14px', color: 'rgba(33,31,26,0.5)' }}>{item}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <hr style={{ border: 'none', borderTop: '1px solid rgba(33,31,26,0.06)', margin: '0 0 80px' }} />

                {/* FAQ */}
                <section style={{ paddingBottom: '80px' }}>
                    <SectionHeader
                        label="FAQ"
                        title="Common questions"
                    />
                    <div style={{ maxWidth: '700px' }}>
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.q} answer={faq.a} isOpen={openFAQ === i} onClick={() => setOpenFAQ(openFAQ === i ? null : i)} />
                        ))}
                    </div>
                </section>

                {/* Footer CTA */}
                <section style={{ padding: '64px 0 80px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '16px', letterSpacing: '-0.02em' }}>Ready to get started?</h2>
                    <p style={{ fontSize: '16px', color: 'rgba(33,31,26,0.55)', marginBottom: '32px' }}>Start protecting your content with a free trial.</p>
                    <Link to="/" style={{ display: 'inline-block', padding: '14px 32px', background: '#211f1a', color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: '500', borderRadius: '6px' }}>
                        Start Free Trial
                    </Link>
                </section>
            </main>
        </div>
    );
}
