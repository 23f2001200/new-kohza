import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Play, Monitor, Smartphone, Settings, Code, Zap, Globe, Eye, Download, Clock, Grid, Maximize2, Keyboard, Hand, Gauge, ArrowRight, CheckCircle, Star, Layers, Subtitles, Film, Cast } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TubelightNavBar } from '@/components/ui/tubelight-navbar';
import Footer from '@/components/layout/Footer';
import { Home as HomeIcon, FileText } from 'lucide-react';

// Imported Assets
import playerHeroImg from '@/assets/Generated_images/player-png.png';
import crossPlatformImg from '@/assets/Generated_images/cross-platform.jpeg';
import customGuiImg from '@/assets/Generated_images/custom-gui.jpeg';
import analyticsImg from '@/assets/Generated_images/analytics dashboard.jpeg';
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

export default function CustomPlayer() {
    const navItems = [
        { name: 'Home', url: '/', icon: HomeIcon },
        { name: 'Player', url: '/custom-player', icon: Play },
        { name: 'DRM', url: '/drm', icon: Shield },
        { name: 'Audit', url: '/audit', icon: FileText },
    ];

    const coreFeatures = [
        {
            icon: Layers,
            title: 'White-Label Branding',
            desc: 'Customize colors, controls, and add branded HTML forms and CTAs. Make the player truly yours with our GUI editor and API.'
        },
        {
            icon: Shield,
            title: 'Ad-Free Experience',
            desc: 'No recommended videos stealing your audience. No ads interrupting playback. You control the entire viewing experience.'
        },
        {
            icon: Code,
            title: 'Cross-Platform SDKs',
            desc: 'React Native, Android, iOS, Flutter, and JavaScript SDKs. One platform, seamless playback everywhere.'
        },
        {
            icon: Settings,
            title: 'Full Customization',
            desc: 'Change player appearance and control every button without writing code. GUI editor makes it simple.'
        },
        {
            icon: Subtitles,
            title: 'Smart Thumbnails & Subtitles',
            desc: 'Custom preview images, multilingual subtitles, and AI-powered subtitle generation for English content.'
        },
        {
            icon: Zap,
            title: 'API & Dashboard',
            desc: 'Comprehensive dashboard for video management plus powerful API for programmatic control and automation.'
        },
    ];

    const playerFeatures = [
        { icon: Film, name: 'Chapters', desc: 'Split videos into sections for easy navigation' },
        { icon: Clock, name: 'Auto-Resume', desc: 'Continue where users left off' },
        { icon: Download, name: 'Offline Download', desc: 'Secure offline playback on mobile' },
        { icon: Zap, name: 'Lightweight', desc: 'Super fast loading times' },
        { icon: Eye, name: 'Video Analytics', desc: 'Detailed engagement tracking' },
        { icon: Maximize2, name: 'Picture-in-Picture', desc: 'Floating window playback' },
        { icon: Keyboard, name: 'Keyboard Shortcuts', desc: 'Quick controls via keyboard' },
        { icon: Hand, name: 'Touch Gestures', desc: 'Tap, swipe, double-tap controls' },
        { icon: Gauge, name: 'Adaptive Streaming', desc: 'Auto-adjust quality to bandwidth' },
        { icon: Settings, name: 'Speed Control', desc: 'Adjust playback speed (0.5x - 2x)' },
        { icon: Shield, name: 'DRM Protection', desc: 'Hollywood-grade encryption' },
        { icon: Layers, name: 'Dynamic Watermarking', desc: 'User-specific overlays' },
        { icon: Subtitles, name: 'Advanced Captions', desc: 'Searchable, styled subtitles' },
        { icon: Cast, name: 'Chromecast & AirPlay', desc: 'Stream to big screens' },
        { icon: Grid, name: 'Quality Selector', desc: 'Manual resolution control' },
        { icon: Monitor, name: 'Responsive Design', desc: 'Optimized for all screen sizes' },
    ];

    const testimonials = [
        {
            company: 'Premium Education Platform',
            name: 'Sarah Chen',
            role: 'CTO',
            quote: 'Kohza\'s custom player gave us the branding control we needed while maintaining enterprise-grade security. The API integration was seamless.',
            rating: 5
        },
        {
            company: 'Fitness Streaming Service',
            name: 'Marcus Rodriguez',
            role: 'Product Lead',
            quote: 'The player\'s lightweight performance and offline download feature transformed our mobile app experience. Our retention jumped 40%.',
            rating: 5
        },
        {
            company: 'Corporate Training Provider',
            name: 'Emily Watson',
            role: 'VP of Technology',
            quote: 'Advanced analytics and chapter support made our compliance training measurable and navigable. Exactly what we needed at scale.',
            rating: 5
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <TubelightNavBar items={navItems} />

            {/* ═══════════════════════ HERO ═══════════════════════ */}
            <section className="relative min-h-[90vh] flex flex-col px-6 overflow-hidden pt-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

                <div className="container relative z-10 max-w-5xl mx-auto flex-1 flex flex-col justify-center text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20 mb-8">
                            <Play className="w-4 h-4" />
                            <span>Custom HTML5 Player</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
                            Your Brand.<br />
                            <span className="text-primary">Your Player.</span>
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
                            White-label video player with full customization, cross-platform SDKs, and Hollywood-grade DRM. No ads, no branding conflicts — just your content, your way.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Button
                                size="lg"
                                className="h-14 px-8 text-lg shadow-lg shadow-primary/20"
                                data-cal-link="kohza/15min"
                                data-cal-namespace="15min"
                                data-cal-config='{"layout":"month_view"}'
                            >
                                See Live Demo
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <a href="#features" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                <Grid className="w-4 h-4" />
                                Explore Features
                            </a>
                        </div>

                        {/* Hero Image */}
                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative mx-auto mt-12 max-w-4xl aspect-[16/9] bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <iframe
                                src="https://player.vdocipher.com/v2/?otp=20160313versASE3232BsYIM7587MFYhQ6T4SoDt0xVkfy7nO53bXvUY5k4qV589&playbackInfo=eyJ2aWRlb0lkIjoiOTZjYjk5YmE3MDJhNDdiMDk4ODkxZTk3YzlkNjgwYmEifQ=="
                                style={{ border: 0, width: '100%', height: '100%' }}
                                allowFullScreen={true}
                                allow="encrypted-media"
                                title="VdoCipher Player"
                            ></iframe>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Stats Strip */}
                <div className="relative z-10 py-12 border-t border-border/40 mt-auto bg-background/50 backdrop-blur-sm">
                    <div className="container max-w-5xl mx-auto">
                        <div className="grid grid-cols-3 gap-8 text-center">
                            {[
                                { value: '500+', label: 'Creators Trust Us' },
                                { value: '50+', label: 'Countries Served' },
                                { value: '10M+', label: 'Views Every Month' }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ CORE FEATURES ═══════════════════════ */}
            <section className="py-28 px-6">
                <div className="container max-w-6xl mx-auto">
                    <FadeInSection className="text-center mb-16">
                        <p className="text-sm text-primary uppercase tracking-widest font-bold mb-4">Platform Highlights</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Everything You Need in a Player</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From branding to analytics, security to cross-platform delivery — all built in.</p>
                    </FadeInSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreFeatures.map((f, i) => (
                            <FadeInSection key={i} delay={i * 0.08}>
                                <div className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 h-full">
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                                            <f.icon className="w-6 h-6 text-primary" />
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

            {/* ═══════════════════════ PLAYER FEATURES GRID ═══════════════════════ */}
            <section id="features" className="py-28 px-6 bg-card border-y border-border">
                <div className="container max-w-6xl mx-auto">
                    <FadeInSection className="text-center mb-16">
                        <p className="text-sm text-primary uppercase tracking-widest font-bold mb-4">Player Features</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">16 Features.<br />One Player.</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Every feature you'd expect from a premium video player — and then some.</p>
                    </FadeInSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {playerFeatures.map((feature, i) => (
                            <FadeInSection key={i} delay={i * 0.05}>
                                <div className="p-6 rounded-xl border border-border bg-background hover:border-primary/30 transition-all duration-300">
                                    <feature.icon className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="font-bold mb-2">{feature.name}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ SECURITY HIGHLIGHT ═══════════════════════ */}
            <section className="py-28 px-6">
                <div className="container max-w-4xl mx-auto">
                    <FadeInSection>
                        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                            <CardContent className="p-10 md:p-16">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-bold">Player-Level DRM Protection</h2>
                                </div>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        Our custom HTML5 player comes with <strong className="text-foreground">built-in DRM encryption</strong>. No plugin, hack, or downloader can extract your videos.
                                    </p>
                                    <p>
                                        <strong className="text-foreground">Dynamic watermarking</strong> displays user-specific data (IP, email, user ID) as an overlay, deterring screen capture and identifying piracy sources.
                                    </p>
                                    <p className="pt-4 border-t border-border">
                                        <strong className="text-primary">Combined with Widevine and FairPlay DRM</strong>, you get the same level of protection used by Netflix, Disney+, and Amazon Prime — now available for your courses, webinars, and premium content.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <Button variant="outline" className="border-primary/30 hover:bg-primary/10" asChild>
                                        <a href="/drm">
                                            Learn About Our DRM
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </FadeInSection>
                </div>
            </section>

            {/* ═══════════════════════ SDK PLATFORMS ═══════════════════════ */}
            <section className="py-28 px-6">
                <div className="container max-w-6xl mx-auto">
                    <FadeInSection className="text-center mb-16">
                        <p className="text-sm text-primary uppercase tracking-widest font-bold mb-4">Cross-Platform SDKs</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">One Player.<br />Five Platforms.</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Native SDKs for React Native, Android, iOS, Flutter, and JavaScript. Consistent experience everywhere.</p>
                    </FadeInSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'React Native', icon: Code, color: 'from-blue-500/20 to-blue-600/5', desc: 'iOS + Android apps from single codebase' },
                            { name: 'Android SDK', icon: Smartphone, color: 'from-green-500/20 to-green-600/5', desc: 'Native Android with ExoPlayer integration' },
                            { name: 'iOS SDK', icon: Monitor, color: 'from-purple-500/20 to-purple-600/5', desc: 'Native iOS with AVPlayer + FairPlay DRM' },
                            { name: 'Flutter SDK', icon: Zap, color: 'from-cyan-500/20 to-cyan-600/5', desc: 'Cross-platform with native performance' },
                            { name: 'JavaScript', icon: Globe, color: 'from-orange-500/20 to-orange-600/5', desc: 'Web embed with full API control' },
                        ].map((sdk, i) => (
                            <FadeInSection key={i} delay={i * 0.1}>
                                <div className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 h-full">
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${sdk.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    <div className="relative z-10">
                                        <sdk.icon className="w-10 h-10 text-primary mb-5" />
                                        <h3 className="text-xl font-bold mb-3">{sdk.name}</h3>
                                        <p className="text-muted-foreground text-sm">{sdk.desc}</p>
                                    </div>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>

                    <FadeInSection delay={0.3} className="mt-16">
                        <div className="relative rounded-2xl border border-border/50 shadow-2xl overflow-hidden">
                            <img src={crossPlatformImg} alt="Cross Platform SDK Support" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-sm font-medium text-white/80">Seamless playback across Web, Mobile, and TV</p>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </section>

            {/* ═══════════════════════ CUSTOMIZATION OPTIONS ═══════════════════════ */}
            <section className="py-28 px-6 bg-card border-y border-border">
                <div className="container max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <FadeInSection>
                            <p className="text-sm text-primary uppercase tracking-widest font-bold mb-4">No-Code Customization</p>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Make It Yours</h2>
                            <p className="text-lg text-muted-foreground max-w-xl">GUI editor lets you customize every aspect without writing code. Colors, controls, behaviors - all updated in real-time.</p>
                        </FadeInSection>
                        <FadeInSection delay={0.2}>
                            <div className="relative rounded-xl border border-border bg-background shadow-2xl overflow-hidden group">
                                <img src={customGuiImg} alt="Player Customization GUI" className="w-full h-auto" />
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </FadeInSection>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { category: 'Branding', icon: Layers, features: ['Custom colors & logos', 'Player skin themes', 'Branded loading screen', 'Custom fonts'] },
                            { category: 'Controls', icon: Settings, features: ['Show/hide any button', 'Custom button actions', 'Control bar position', 'Mobile touch gestures'] },
                            { category: 'Overlays', icon: Monitor, features: ['Custom HTML forms', 'CTA buttons', 'Brand watermarks', 'Interactive elements'] },
                            { category: 'Behavior', icon: Zap, features: ['Autoplay settings', 'Loop playback', 'Keyboard shortcuts', 'Gesture controls'] },
                        ].map((cat, i) => (
                            <FadeInSection key={i} delay={i * 0.1}>
                                <Card className="border-border hover:border-primary/30 transition-colors">
                                    <CardContent className="p-8">
                                        <div className="flex items-center gap-3 mb-6">
                                            <cat.icon className="w-8 h-8 text-primary" />
                                            <h3 className="text-2xl font-bold">{cat.category}</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {cat.features.map((feature, j) => (
                                                <li key={j} className="flex items-start gap-3">
                                                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                    <span className="text-muted-foreground">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ USE CASES ═══════════════════════ */}
            <section className="py-28 px-6">
                <div className="container max-w-6xl mx-auto">
                    <FadeInSection className="text-center mb-16">
                        <p className="text-sm text-primary uppercase tracking-widest font-bold mb-4">Industry Applications</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Built for Your Industry</h2>
                    </FadeInSection>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Online Courses',
                                icon: Layers,
                                features: ['Chapter navigation', 'Auto-resume', 'Speed control', 'Note timestamping'],
                                benefit: 'Students learn at their own pace with seamless progress tracking'
                            },
                            {
                                title: 'Fitness Streaming',
                                icon: Play,
                                features: ['Offline downloads', 'Chromecast support', 'Quality selector', 'PiP mode'],
                                benefit: 'Members work out anywhere with uninterrupted playback'
                            },
                            {
                                title: 'Corporate Training',
                                icon: Monitor,
                                features: ['Analytics dashboard', 'Completion tracking', 'Multi-language subs', 'Compliance reports'],
                                benefit: 'HR teams measure engagement and ensure certification'
                            },
                        ].map((useCase, i) => (
                            <FadeInSection key={i} delay={i * 0.1}>
                                <Card className="h-full border-border hover:border-primary/30 transition-colors">
                                    <CardContent className="p-8">
                                        <useCase.icon className="w-10 h-10 text-primary mb-5" />
                                        <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                                        <div className="space-y-3 mb-6">
                                            {useCase.features.map((feature, j) => (
                                                <div key={j} className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                    <span className="text-sm text-muted-foreground">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="pt-4 border-t border-border">
                                            <p className="text-sm text-foreground italic">{useCase.benefit}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ ANALYTICS & SECURITY VISUALS ═══════════════════════ */}
            <section className="py-28 px-6">
                <div className="container max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Analytics Card */}
                        <FadeInSection>
                            <Card className="h-full overflow-hidden border-border group bg-background">
                                <CardContent className="p-0 relative">
                                    <div className="p-8 pb-0">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Eye className="w-6 h-6 text-primary" />
                                            <h3 className="text-2xl font-bold">Deep Analytics</h3>
                                        </div>
                                        <p className="text-muted-foreground mb-6">Granular insights on viewer behavior, drop-off rates, and engagement heatmaps.</p>
                                    </div>
                                    <div className="relative mt-4">
                                        <img src={analyticsImg} alt="Analytics Dashboard" className="w-full h-auto object-cover transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                                    </div>
                                </CardContent>
                            </Card>
                        </FadeInSection>

                        {/* Watermarking Card */}
                        <FadeInSection delay={0.2}>
                            <Card className="h-full overflow-hidden border-border group bg-background">
                                <CardContent className="p-0 relative">
                                    <div className="p-8 pb-0">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Shield className="w-6 h-6 text-primary" />
                                            <h3 className="text-2xl font-bold">Dynamic Watermarking</h3>
                                        </div>
                                        <p className="text-muted-foreground mb-6">Visible and invisible user-identifiable overlays to prevent unauthorized screen capture.</p>
                                    </div>
                                    <div className="relative mt-4">
                                        <img src={watermarkImg} alt="Dynamic Watermarking Demo" className="w-full h-auto object-cover transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                                    </div>
                                </CardContent>
                            </Card>
                        </FadeInSection>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ TESTIMONIALS ═══════════════════════ */}
            <section className="py-28 px-6 bg-card border-y border-border">
                <div className="container max-w-6xl mx-auto">
                    <FadeInSection className="text-center mb-16">
                        <p className="text-sm text-primary uppercase tracking-widest font-bold mb-4">Customer Stories</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Trusted by Creators</h2>
                    </FadeInSection>

                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <FadeInSection key={i} delay={i * 0.1}>
                                <Card className="h-full border-border hover:border-primary/30 transition-colors">
                                    <CardContent className="p-8">
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(t.rating)].map((_, j) => (
                                                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                                            ))}
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                                        <div className="border-t border-border pt-4">
                                            <div className="font-bold">{t.name}</div>
                                            <div className="text-sm text-muted-foreground">{t.role}</div>
                                            <div className="text-sm text-primary font-medium mt-1">{t.company}</div>
                                        </div>
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
                        <Play className="w-12 h-12 text-primary/40 mx-auto mb-8" />
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Ready to Build Your<br />
                            <span className="text-primary">Custom Player?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                            See our player in action. Book a 15-minute demo and we'll show you exactly how it works for your content.
                        </p>
                        <Button
                            size="lg"
                            className="h-14 px-10 text-lg shadow-lg shadow-primary/20"
                            data-cal-link="kohza/15min"
                            data-cal-namespace="15min"
                            data-cal-config='{"layout":"month_view"}'
                        >
                            Book Live Demo
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </FadeInSection>
                </div>
            </section>

            <Footer />
        </div>
    );
}
