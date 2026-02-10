import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Fingerprint, Monitor, Eye, Server, CheckCircle, X, ArrowRight, Play, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TubelightNavBar } from '@/components/ui/tubelight-navbar';
import Footer from '@/components/layout/Footer';
import { Home as HomeIcon, FileText, Mail } from 'lucide-react';
import watermarkImg from '@/assets/Generated_images/water-mark-png.png';

const FadeInSection = ({ children, className = '', delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

export default function DRM() {
    const navItems = [
        { name: 'Home', url: '/', icon: HomeIcon },
        { name: 'Player', url: '/custom-player', icon: Play }, // Added Player link
        { name: 'DRM', url: '/drm', icon: Shield },
        { name: 'Audit', url: '/audit', icon: FileText },
    ];

    const features = [
        {
            icon: Lock,
            title: 'Google Widevine DRM',
            desc: 'Industry-standard encryption used by Netflix, Disney+, and Amazon Prime. Hardware-level protection that prevents downloaders and screen capture tools.',
            badge: 'L1-L3 Security'
        },
        {
            icon: Shield,
            title: 'Apple FairPlay DRM',
            desc: 'Apple\'s proprietary DRM for iOS, macOS, and tvOS. Complete screen capture blocking on Safari and iOS apps with hardware-backed encryption.',
            badge: 'iOS Exclusive'
        },
        {
            icon: Fingerprint,
            title: 'Dynamic Watermarking',
            desc: 'User-specific data (IP, email, user ID) floats across video in real-time. Psychological + legal deterrent that identifies piracy origin.',
            badge: '98% Deterrence'
        },
        {
            icon: Monitor,
            title: 'Screen Capture Block',
            desc: '100% block rate on mobile and Safari. On Chrome/Windows, we layer forensic watermarking with browser fingerprinting for maximum deterrence.',
            badge: 'Multi-Layer'
        },
        {
            icon: Eye,
            title: 'Security Analytics',
            desc: 'AI-powered user behavior analysis. Detects suspicious patterns like credential sharing, abnormal playback speeds, and emulator usage.',
            badge: 'Real-Time'
        },
        {
            icon: Server,
            title: 'Rooted Device Protection',
            desc: 'Enhanced Google Play Integrity checks. Blocks playback on rooted, jailbroken, or emulated devices to prevent security bypasses.',
            badge: 'Device-Level'
        },
    ];

    const drmTechnologies = [
        {
            name: 'Google Widevine',
            icon: Lock,
            coverage: 'Chrome, Firefox, Edge, Android',
            security: 'L1 (Hardware) / L3 (Software)',
            use: 'Web browsers and Android apps',
            color: 'from-blue-500/20 to-blue-600/5'
        },
        {
            name: 'Apple FairPlay',
            icon: Shield,
            coverage: 'Safari, iOS, macOS, tvOS',
            security: 'Hardware-backed encryption',
            use: 'Apple ecosystem exclusively',
            color: 'from-purple-500/20 to-purple-600/5'
        },
        {
            name: 'Microsoft PlayReady',
            icon: Server,
            coverage: 'Edge, Xbox, Windows',
            security: 'TEE (Trusted Execution)',
            use: 'Microsoft devices and browsers',
            color: 'from-emerald-500/20 to-emerald-600/5'
        },
    ];

    const comparisonData = [
        { feature: 'Encryption Standard', drm: 'AES-128 with rotating keys', basic: 'AES-128 static key' },
        { feature: 'Key Exchange', drm: 'Hardware-secured black box', basic: 'Open-source, visible in code' },
        { feature: 'Screen Capture Block', drm: 'Yes (mobile/Safari 100%)', basic: 'No protection' },
        { feature: 'License Management', drm: 'Server-side validation', basic: 'Client-side only' },
        { feature: 'Device Binding', drm: 'Hardware-level attestation', basic: 'None' },
        { feature: 'Browser Support', drm: 'Chrome, Safari, Firefox, Edge', basic: 'All browsers (insecure)' },
        { feature: 'Downloader Vulnerability', drm: 'Immune to all tools', basic: 'Easily downloadable' },
        { feature: 'Ideal Use Case', drm: 'Premium paid courses', basic: 'Free preview content' },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <TubelightNavBar items={navItems} />

            {/* ═══════════════════════ HERO ═══════════════════════ */}
            <section className="relative min-h-[90vh] flex flex-col px-6 overflow-hidden pt-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

                <div className="container relative z-10 max-w-5xl mx-auto flex-1 flex flex-col justify-center text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20 mb-8">
                            <Shield className="w-4 h-4" />
                            <span>Multi-DRM Protection</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
                            Hollywood-Grade<br />
                            <span className="text-primary">DRM Encryption</span>
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
                            The same encryption technology protecting Netflix, Disney+, and Amazon Prime — now available for your courses. Widevine, FairPlay, and PlayReady DRM in one platform.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                size="lg"
                                className="h-14 px-8 text-lg shadow-lg shadow-primary/20"
                                data-cal-link="kohza/15min"
                                data-cal-namespace="15min"
                                data-cal-config='{"layout":"month_view"}'
                            >
                                Book Demo Call
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <a href="#what-is-drm" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                <Play className="w-4 h-4" />
                                Learn what DRM is
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Trust Strip */}
                <div className="relative z-10 py-10 border-t border-border/40 mt-auto bg-background/50 backdrop-blur-sm">
                    <div className="container max-w-5xl mx-auto text-center">
                        <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-5 font-bold">Certified DRM Partner</p>
                        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
                            {['Google Widevine', 'Apple FairPlay', 'Microsoft PlayReady'].map((std, i) => (
                                <div key={i} className="flex items-center gap-2.5 opacity-50 hover:opacity-80 transition-opacity">
                                    <Lock className="w-4 h-4 text-primary" />
                                    <span className="text-base font-bold">{std}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ FEATURES GRID ═══════════════════════ */}
            <section className="py-28 px-6">
                <div className="container max-w-6xl mx-auto">
                    <FadeInSection className="text-center mb-16">
                        <p className="text-sm text-primary uppercase tracking-widest font-bold mb-4">DRM Security Stack</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Six Layers of Protection</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Every DRM technology, every security feature — integrated into a single, easy-to-use platform.</p>
                    </FadeInSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <FadeInSection key={i} delay={i * 0.08}>
                                <div className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 h-full">
                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-5">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                                <f.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <span className="text-xs font-bold text-primary/80 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                                {f.badge}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm">{f.desc}</p>
                                    </div>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ DRM TECHNOLOGIES ═══════════════════════ */}
            <section className="py-28 px-6 bg-card border-y border-border">
                <div className="container max-w-6xl mx-auto">
                    <FadeInSection className="text-center mb-16">
                        <p className="text-sm text-primary uppercase tracking-widest font-bold mb-4">Multi-DRM Coverage</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Three DRM Technologies.<br />One Platform.</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We integrate all major DRM systems so you don't have to license each separately.</p>
                    </FadeInSection>

                    <div className="grid md:grid-cols-3 gap-6">
                        {drmTechnologies.map((tech, i) => (
                            <FadeInSection key={i} delay={i * 0.1}>
                                <div className={`group relative p-8 rounded-2xl border border-border bg-background hover:border-primary/30 transition-all duration-300 h-full`}>
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    <div className="relative z-10">
                                        <tech.icon className="w-10 h-10 text-primary mb-5" />
                                        <h3 className="text-2xl font-bold mb-4">{tech.name}</h3>
                                        <div className="space-y-3 text-sm">
                                            <div>
                                                <span className="text-muted-foreground">Coverage:</span>
                                                <p className="font-semibold text-foreground">{tech.coverage}</p>
                                            </div>
                                            <div>
                                                <span className="text-muted-foreground">Security Level:</span>
                                                <p className="font-semibold text-foreground">{tech.security}</p>
                                            </div>
                                            <div>
                                                <span className="text-muted-foreground">Best For:</span>
                                                <p className="font-semibold text-foreground">{tech.use}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ WHAT IS DRM ═══════════════════════ */}
            <section id="what-is-drm" className="py-28 px-6">
                <div className="container max-w-4xl mx-auto">
                    <FadeInSection>
                        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                            <CardContent className="p-10 md:p-16">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-bold">What is DRM?</h2>
                                </div>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        <strong className="text-foreground">DRM (Digital Rights Management)</strong> ensures the management and security of digital content rights. Video DRM typically stands for the protocols built by Google and Apple to secure content across various devices and browsers.
                                    </p>
                                    <p>
                                        This includes highly secure encryption and licensing technologies to prevent video download and also prevent screen capture in certain cases.
                                    </p>
                                    <p>
                                        <strong className="text-foreground">Why DRM is better than basic encryption:</strong> The key exchange mechanism is highly secure and black-boxed in DRM-supported video playback, unlike standard open-source encryption where keys can be extracted from the client code.
                                    </p>
                                    <p className="pt-4 border-t border-border">
                                        <strong className="text-primary">Multi-DRM for videos:</strong> A single video DRM is not enough to secure content on all browsers and devices. At least two DRMs — <strong className="text-foreground">Google Widevine DRM</strong> and <strong className="text-foreground">Apple FairPlay DRM</strong> — are required for complete compatibility.
                                    </p>
                                </div>
                                <div className="mt-8 rounded-xl overflow-hidden border border-primary/20 shadow-lg">
                                    <img src={watermarkImg} alt="DRM Watermarking Demo" className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </CardContent>
                        </Card>
                    </FadeInSection>
                </div>
            </section>

            {/* ═══════════════════════ COMPARISON TABLE ═══════════════════════ */}
            <section className="py-28 px-6 bg-card border-y border-border">
                <div className="container max-w-5xl mx-auto">
                    <FadeInSection className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">DRM vs Basic Encryption</h2>
                        <p className="text-lg text-muted-foreground">Side-by-side comparison of protection levels and use cases.</p>
                    </FadeInSection>

                    <FadeInSection delay={0.2}>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-primary/20">
                                        <th className="text-left py-4 px-4 font-bold text-foreground">Feature</th>
                                        <th className="text-left py-4 px-4 font-bold text-primary">DRM Encryption</th>
                                        <th className="text-left py-4 px-4 font-bold text-muted-foreground">Basic Encryption</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="border-b border-border hover:bg-background/50 transition-colors">
                                            <td className="py-4 px-4 font-semibold text-foreground">{row.feature}</td>
                                            <td className="py-4 px-4 text-foreground">
                                                <div className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                    <span>{row.drm}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 text-muted-foreground">
                                                <div className="flex items-start gap-2">
                                                    <X className="w-4 h-4 text-destructive/60 shrink-0 mt-0.5" />
                                                    <span>{row.basic}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </FadeInSection>
                </div>
            </section>

            {/* ═══════════════════════ DEVELOPER BENEFITS ═══════════════════════ */}
            <section className="py-28 px-6">
                <div className="container max-w-6xl mx-auto">
                    <FadeInSection className="text-center mb-16">
                        <p className="text-sm text-primary uppercase tracking-widest font-bold mb-4">Developer Experience</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Why Kohza Makes DRM Easy</h2>
                    </FadeInSection>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Zap,
                                title: 'Simplified License Management',
                                desc: 'We handle Widevine and FairPlay licensing complexities. No separate vendor contracts or compliance paperwork required.'
                            },
                            {
                                icon: Globe,
                                title: 'Zero Debugging Time',
                                desc: 'Our player auto-detects and resolves device-level issues, license misconfigurations, and browser incompatibilities.'
                            },
                            {
                                icon: Server,
                                title: 'Global CDN + Auto-Scaling',
                                desc: 'Smooth playback across mobile, desktop, smart TV, and low-bandwidth networks with automatic quality adjustment.'
                            }
                        ].map((benefit, i) => (
                            <FadeInSection key={i} delay={i * 0.1}>
                                <Card className="h-full border-border hover:border-primary/30 transition-colors">
                                    <CardContent className="p-8">
                                        <benefit.icon className="w-10 h-10 text-primary mb-5" />
                                        <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                                    </CardContent>
                                </Card>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ FINAL CTA ═══════════════════════ */}
            <section className="py-32 px-6 relative overflow-hidden border-t border-border">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
                <div className="container max-w-3xl mx-auto text-center relative z-10">
                    <FadeInSection>
                        <Shield className="w-12 h-12 text-primary/40 mx-auto mb-8" />
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Ready to Protect Your<br />
                            <span className="text-primary">Premium Content?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                            Join 500+ creators who trust Kohza's Hollywood-grade DRM to protect their courses and digital products.
                        </p>
                        <Button
                            size="lg"
                            className="h-14 px-10 text-lg shadow-lg shadow-primary/20"
                            data-cal-link="kohza/15min"
                            data-cal-namespace="15min"
                            data-cal-config='{"layout":"month_view"}'
                        >
                            Book Strategy Call
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </FadeInSection>
                </div>
            </section>

            <Footer />
        </div>
    );
}
