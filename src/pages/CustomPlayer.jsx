import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Lock, Eye, Zap, Layers, Globe, Smartphone, Download, Activity, Play, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CustomPlayer() {
    return (
        <div style={{ minHeight: '100vh', background: '#fffdf9', color: '#211f1a', fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol'" }}>

            {/* Navigation Bar (Simplified) */}
            <nav className="responsive-container responsive-padding" style={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                background: 'rgba(255, 253, 249, 0.95)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid rgba(33, 31, 26, 0.1)',
                padding: '24px 48px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: '#211f1a', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        <ArrowLeft size={16} /> Back
                    </Link>
                    <div style={{ width: '1px', height: '24px', background: 'rgba(33, 31, 26, 0.2)' }}></div>
                    <h2 style={{ fontSize: '18px', fontWeight: '900', letterSpacing: '-0.02em', margin: 0, textTransform: 'lowercase' }}>kohza.</h2>
                </div>
                <div>
                    <Link to="/" style={{
                        fontSize: '11px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        background: '#211f1a',
                        color: '#ffffff',
                        padding: '10px 24px',
                        borderRadius: '2px',
                        textDecoration: 'none',
                        display: 'inline-block'
                    }}>
                        Contact Us
                    </Link>
                </div>
            </nav>

            <main style={{ paddingTop: '80px' }}>

                {/* Hero Section */}
                <header className="responsive-container responsive-section-padding" style={{ maxWidth: '1440px', margin: '0 auto 80px', padding: '0 48px', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(33, 31, 26, 0.6)', fontWeight: 'bold', display: 'block', marginBottom: '24px' }}>
                            The Viewing Protocol
                        </span>
                        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4rem)', lineHeight: '1.1', marginBottom: '32px', letterSpacing: '-0.02em', fontWeight: 'bold', color: '#211f1a' }}>
                            Technical Documentation:<br />Secure Playback Engine.
                        </h1>
                        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'rgba(33, 31, 26, 0.8)', marginBottom: '24px', fontFamily: "'Cormorant Garamond', serif" }}>
                                <strong>Overview:</strong> The Kohza Playback Engine provides a hardware-encrypted video interface designed for high-value intellectual property.
                                It eliminates common platform vulnerabilities (e.g., stream ripping, screen recording) through a proprietary multi-layer defense system.
                            </p>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'rgba(33, 31, 26, 0.8)', marginBottom: '48px', fontFamily: "'Cormorant Garamond', serif" }}>
                                <strong>System Architecture:</strong> Utilizing Google Widevine and Apple FairPlay DRM at the kernel level, the engine ensures that decrypted content never resides in system memory accessible to user-space applications.
                                This documentation outlines the core capabilities, integration protocols, and security specifications for enterprise deployment.
                            </p>
                        </div>
                    </motion.div>
                </header>

                {/* Core Features Grid */}
                <section className="responsive-container responsive-section-padding" style={{ maxWidth: '1440px', margin: '0 auto 128px', padding: '0 48px' }}>
                    <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                        {[
                            {
                                title: "Bespoke Interface Engine",
                                desc: "Complete aesthetic control. Customize every pixel of the player to align with your institution's prestige. No YouTube branding, no 'recommended' distractions.",
                                icon: Layers
                            },
                            {
                                title: "Military-Grade DRM",
                                desc: "Google Widevine & Apple FairPlay encryption integrated at hardware level. The same protection used by Netflix and Hulu, now deploying your courses.",
                                icon: Lock
                            },
                            {
                                title: "Forensic Identity Layer",
                                desc: "Dynamic watermarking overlays viewer specific data (IP, Email, ID) in real-time. A psychological and technological deterrent against screen capture.",
                                icon: Eye
                            },
                            {
                                title: "Planetary Distribution",
                                desc: "Global CDN architecture ensuring buffer-free 4K playback from Tokyo to New York. Adaptive bitrate streaming adjusts instantly to viewer conditions.",
                                icon: Globe
                            },
                            {
                                title: "Secure Offline Vault",
                                desc: "Allow encrypted offshore viewing on mobile devices. Content remains locked within the app sandbox, inaccessible to the file system.",
                                icon: Download
                            },
                            {
                                title: "Deep Analytics",
                                desc: "Granular engagement tracking. Know exactly where users drop off, re-watch, or skip. Data-driven insights to refine your curriculum.",
                                icon: Activity
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    padding: '32px',
                                    background: '#ffffff',
                                    border: '1px solid rgba(33, 31, 26, 0.05)',
                                    borderRadius: '16px'
                                }}
                            >
                                <div style={{ width: '48px', height: '48px', background: 'rgba(33, 31, 26, 0.03)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                                    <item.icon size={24} color="#6f0202" />
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#211f1a' }}>{item.title}</h3>
                                <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(33, 31, 26, 0.6)' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Technical Specs Strip */}
                <section style={{ background: '#211f1a', color: '#fffdf9', padding: '80px 0' }}>
                    <div className="responsive-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 48px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '48px' }}>
                            <div>
                                <h2 style={{ fontSize: '32px', fontFamily: "'Playfair Display', serif", marginBottom: '16px', color: '#fff' }}>Universal Capability</h2>
                                <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '400px' }}>Deploy seamlessly across all modern viewing environments.</p>
                            </div>
                            <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
                                {[
                                    { label: 'Web', val: 'HTML5 / React' },
                                    { label: 'Mobile', val: 'iOS / Android SDK' },
                                    { label: 'TV', val: 'Airplay / Cast' },
                                    { label: 'Quality', val: '4K HDR / AV1' }
                                ].map((spec, i) => (
                                    <div key={i}>
                                        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>{spec.label}</div>
                                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{spec.val}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integration Call to Action */}
                <section className="responsive-container responsive-section-padding" style={{ padding: '128px 0', textAlign: 'center' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#6f0202', fontWeight: 'bold', display: 'block', marginBottom: '24px' }}>
                            Integration Ready
                        </span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: "'Playfair Display', serif", color: '#211f1a', marginBottom: '48px' }}>
                            Deploy the engine today.
                        </h2>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                            <Link to="/" style={{
                                padding: '16px 32px',
                                background: '#211f1a',
                                color: '#ffffff',
                                textDecoration: 'none',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                borderRadius: '2px'
                            }}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer (Simplified) */}
            <footer style={{ borderTop: '1px solid rgba(33, 31, 26, 0.1)', padding: '40px 0', background: '#fff' }}>
                <div className="responsive-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '12px', color: 'rgba(33, 31, 26, 0.4)' }}>
                        © 2024 Kohza. Security Infrastructure.
                    </div>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        {['Privacy', 'Terms', 'Contact'].map((item, i) => (
                            <Link key={i} to="/" style={{ fontSize: '12px', color: 'rgba(33, 31, 26, 0.6)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item}</Link>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
}
