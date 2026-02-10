import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Activity, Zap, ChevronDown, ChevronUp, Lock, ArrowRight, Eye, Fingerprint, Scan, Monitor, Smartphone, Globe, Star, Play, CheckCircle, Home as HomeIcon, FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Cal, { getCalApi } from "@calcom/embed-react";
import { TubelightNavBar } from '@/components/ui/tubelight-navbar';

// Animated counter hook
function useAnimatedCount(end, duration = 2000, shouldStart = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * easeOut));
      if (progress === 1) { clearInterval(timer); setCount(end); }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, shouldStart]);
  return count;
}

// Section wrapper for consistent animation
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

// Stat counter component
const StatCounter = ({ value, suffix = '', label, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useAnimatedCount(value, 2000, isInView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground uppercase tracking-widest font-medium">{label}</div>
    </motion.div>
  );
};

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(-1);
  const [isCalLoaded, setIsCalLoaded] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "15min" });
      cal("ui", { "styles": { "branding": { "brandColor": "#ea580c" } }, "hideEventTypeDetails": false, "layout": "month_view" });
      setIsCalLoaded(true);
    })();
  }, []);

  const features = [
    { icon: Lock, title: 'Widevine DRM', desc: 'Hardware-level encryption using Google Widevine — the same DRM that protects Netflix and Disney+. Impossible to bypass with downloaders or plugins.', accent: 'from-blue-500/20 to-blue-600/5' },
    { icon: Fingerprint, title: 'Dynamic Watermarking', desc: 'Viewer-specific data (IP, email, user ID) floats across the video in real-time. A psychological + legal deterrent that stops 98% of screen recording.', accent: 'from-purple-500/20 to-purple-600/5' },
    { icon: Monitor, title: 'Screen Capture Block', desc: '100% block rate on mobile (iOS/Android) and Safari. On Chrome/Windows, we layer forensic watermarking with browser fingerprinting.', accent: 'from-emerald-500/20 to-emerald-600/5' },
    { icon: Scan, title: 'Piracy Scanning', desc: '2.4M+ daily scans across Telegram, Google Drive, torrent sites, and reseller channels. Real-time alerts when your content appears.', accent: 'from-orange-500/20 to-orange-600/5' },
    { icon: Activity, title: 'DMCA Takedowns', desc: 'Automated and manual takedown execution across YouTube, social media, file hosts, and ISPs. Average removal time: 4 hours.', accent: 'from-red-500/20 to-red-600/5' },
    { icon: Smartphone, title: 'Device Management', desc: 'Limit concurrent devices, track login patterns, detect credential sharing, and revoke access instantly — all from a single dashboard.', accent: 'from-cyan-500/20 to-cyan-600/5' },
  ];

  const testimonials = [
    { quote: "Kohza brings together Search Marketers of all levels. Besides pure strategies, we needed absolute security for our exclusive 'offbeat' courses. Kohza ensures we remain a step ahead.", author: "Andrew Steven", role: "Founder, IMG Institute", metric: "100% Leak Prevention" },
    { quote: "The only course dedicated to beauty entrepreneurs creating classy cosmetic brands. Our intellectual property is our most valuable asset. Kohza protects it flawlessly.", author: "Verra Oktavianti", role: "Director, BeautyBiz Masterclass", metric: "$1.2M Revenue Protected" },
    { quote: "A digital platform for independent cinematographic works. We needed Hollywood-grade DRM without the Hollywood budget complexity. Kohza delivered instant, scalable security.", author: "Elizane Pinheiro", role: "Producer, UnivFilms Entertainment", metric: "Zero Takedown Latency" },
  ];

  const faqs = [
    { q: "How does the DRM actually work?", a: "We integrate Google Widevine and Apple FairPlay DRM at the hardware level. The decryption happens in a secure environment on the device (CDM), preventing screen recorders and downloaders from accessing the raw video stream." },
    { q: "Can screen recording be blocked on all devices?", a: "We achieve 100% block rates on mobile devices (Android/iOS) and Safari (macOS). On Windows/Chrome, we use dynamic watermarking and browser fingerprinting to deter capture, as OS-level blocking is restricted by browser architectures." },
    { q: "Is it compatible with my existing LMS?", a: "Yes. Kohza provides a plug-and-play embed code that works with WordPress, Kajabi, Teachable, Moodle, and custom React/Next.js apps. We also offer native SDKs for iOS, Android, and Flutter apps." },
    { q: "What is the pricing model?", a: "We offer tiered pricing based on bandwidth and storage usage, similar to AWS but with security built-in. Plans start at $199/month for high-ticket course creators. Contact sales for enterprise volume discounts." },
  ];

  const navItems = [
    { name: 'Home', url: '/', icon: HomeIcon },
    { name: 'Player', url: '/custom-player', icon: Play }, // Added Player link
    { name: 'DRM', url: '/drm', icon: Shield },
    { name: 'Audit', url: '/audit', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <TubelightNavBar items={navItems} />

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-[95vh] flex flex-col px-6 overflow-hidden pt-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

        <div className="container relative z-10 max-w-6xl mx-auto flex-1 flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Copy */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20 mb-8">
                <Shield className="w-4 h-4" />
                <span>Enterprise-Grade Content Protection</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
                Protect What<br />You <span className="text-primary">Teach.</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mb-10">
                No downloader, plugin, or hack can breach Kohza's DRM protection. Secure your premium courses with Hollywood-grade encryption and increase revenue by up to 81%.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg shadow-lg shadow-primary/20"
                  data-cal-link="kohza/15min"
                  data-cal-namespace="15min"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Book Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link to="/audit" className="inline-flex items-center gap-2 h-14 px-6 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md hover:border-foreground/20">
                  <Eye className="w-4 h-4" />
                  Free Piracy Audit
                </Link>
              </div>
            </motion.div>

            {/* Right — Metrics Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Encryption', value: 'Widevine DRM', icon: Lock },
                { label: 'Quality', value: '4K Streaming', icon: Play },
                { label: 'Coverage', value: '2.4M+ Scans/Day', icon: Scan },
                { label: 'Uptime', value: '99.9% SLA', icon: Activity },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 cursor-default group"
                >
                  <item.icon className="w-5 h-5 text-primary/60 mb-3 group-hover:text-primary transition-colors" />
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold block mb-2">{item.label}</span>
                  <span className="text-lg font-semibold text-foreground">{item.value}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="relative z-10 py-10 border-t border-border/40 mt-auto bg-background/50 backdrop-blur-sm">
          <div className="container max-w-5xl mx-auto text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-5 font-bold">Secured By</p>
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

      {/* ═══════════════════════ VIDEO ═══════════════════════ */}
      <section className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <FadeInSection>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/20">
              <video className="w-full h-full object-cover" autoPlay muted loop playsInline style={{ pointerEvents: 'none' }}>
                <source src="/MyComp.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="flex justify-between items-center px-2 mt-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">System Capabilities Demonstration</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">v.2.0</p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════ STATS BAR ═══════════════════════ */}
      <section className="py-20 px-6 border-y border-border/50">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value={500} suffix="+" label="Creators Protected" delay={0} />
            <StatCounter value={81} suffix="%" label="Revenue Increase" delay={0.1} />
            <StatCounter value={98} suffix="%" label="Screen Record Block" delay={0.2} />
            <StatCounter value={4} suffix="hr" label="Avg. Takedown Time" delay={0.3} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FEATURES ═══════════════════════ */}
      <section className="py-28 px-6">
        <div className="container max-w-6xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <p className="text-sm text-primary uppercase tracking-widest font-bold mb-4">How We Protect You</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Six Layers of Defense</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Every angle covered. From encryption to takedowns, we built the most comprehensive content protection system in the industry.</p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FadeInSection key={i} delay={i * 0.08}>
                <div className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 h-full">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${f.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
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

      {/* ═══════════════════════ WATERMARK DEMO ═══════════════════════ */}
      <section className="py-28 px-6 bg-card border-y border-border">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <p className="text-sm text-primary uppercase tracking-widest font-bold mb-4">Visual Deterrence Layer</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Dynamic<br />Watermarking</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
                Our player overlays viewer-specific data (IP, Email, User ID) that floats randomly across the video. This psychological deterrent stops 98% of casual screen recording attempts.
              </p>
              <div className="flex gap-8">
                {[
                  { label: 'Opacity', value: 'Variable' },
                  { label: 'Movement', value: 'Randomized' },
                  { label: 'Data', value: 'User Specific' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{item.label}</div>
                    <div className="text-base font-bold">{item.value}</div>
                  </div>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="relative h-[400px] rounded-2xl bg-gradient-to-br from-secondary to-background border border-border overflow-hidden shadow-xl">
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
                {/* Floating watermark */}
                <motion.div
                  animate={{ x: [0, 100, -50, 80, 0], y: [0, -80, 40, -20, 0], opacity: [0.3, 0.6, 0.3, 0.5, 0.3] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-[30%] left-[30%] px-4 py-2 bg-black/40 rounded border border-white/10 z-10 font-mono"
                >
                  <div className="text-sm text-white/80">User: aryan@kohza.com</div>
                  <div className="text-xs text-white/50">IP: 192.168.1.1</div>
                </motion.div>
                {/* Second watermark */}
                <motion.div
                  animate={{ x: [0, -60, 40, -30, 0], y: [0, 50, -30, 60, 0], opacity: [0.2, 0.4, 0.2, 0.35, 0.2] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute top-[60%] left-[55%] px-3 py-1.5 bg-black/30 rounded border border-white/10 font-mono"
                >
                  <div className="text-xs text-white/60">ID: KHZ-00482</div>
                </motion.div>
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <Play className="w-6 h-6 text-white/60 ml-1" />
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ INTEGRATIONS ═══════════════════════ */}
      <section className="py-28 px-6">
        <div className="container max-w-5xl mx-auto text-center">
          <FadeInSection>
            <p className="text-sm text-primary uppercase tracking-widest font-bold mb-4">Seamless Integration</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Works with your existing stack</h2>
          </FadeInSection>
          <FadeInSection delay={0.15}>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {['React', 'WordPress', 'Flutter', 'Next.js', 'iOS', 'Android', 'Kajabi', 'Teachable'].map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all cursor-default"
                >
                  <Globe className="w-4 h-4 text-primary/60" />
                  <span className="font-semibold">{tech}</span>
                </motion.div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════ TESTIMONIALS ═══════════════════════ */}
      <section className="py-28 px-6 bg-card border-y border-border">
        <div className="container max-w-6xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <p className="text-sm text-primary uppercase tracking-widest font-bold mb-4">Institutional Trust</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Securing the Knowledge Economy</h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="group h-full p-8 rounded-2xl border border-border bg-background hover:border-primary/30 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-primary text-primary" />)}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-8 italic">"{t.quote}"</p>
                  </div>
                  <div>
                    <div className="w-10 h-px bg-primary/30 mb-5" />
                    <h4 className="font-bold text-foreground mb-1">{t.author}</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">{t.role}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                      <CheckCircle className="w-3 h-3" />
                      {t.metric}
                    </span>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FAQ ═══════════════════════ */}
      <section className="py-28 px-6">
        <div className="container max-w-3xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Technical Inquiries</h2>
            <p className="text-muted-foreground">Everything you need to know about Kohza's protection system.</p>
          </FadeInSection>

          <div className="space-y-2">
            {faqs.map((item, i) => (
              <FadeInSection key={i} delay={i * 0.05}>
                <div className="border border-border rounded-xl overflow-hidden bg-card hover:border-primary/20 transition-colors">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)}
                    className="w-full p-6 flex justify-between items-center text-left cursor-pointer bg-transparent border-none"
                  >
                    <span className="text-lg font-semibold text-foreground pr-4">{item.q}</span>
                    {openFAQ === i
                      ? <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                      : <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                    }
                  </button>
                  <AnimatePresence>
                    {openFAQ === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA + BOOKING ═══════════════════════ */}
      <section className="py-28 px-6 bg-card border-y border-border">
        <div className="container max-w-xl mx-auto text-center">
          <FadeInSection>
            <p className="text-sm text-primary uppercase tracking-widest font-bold mb-4">Ready to Secure Your Content?</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Book Your Strategy Call</h2>
            <p className="text-muted-foreground mb-10">15-minute call to understand your content, your audience, and how Kohza fits into your stack.</p>
          </FadeInSection>
          <Card className="overflow-hidden border-border bg-background shadow-2xl relative z-10">
            <CardContent className="p-0">
              <Cal
                namespace="15min"
                calLink="kohza/15min"
                style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "hidden" }}
                config={{ "layout": "month_view", "useSlotsViewOnSmallScreen": "true" }}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ═══════════════════════ FINAL CTA ═══════════════════════ */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        <div className="container max-w-3xl mx-auto text-center relative z-10">
          <FadeInSection>
            <Shield className="w-12 h-12 text-primary/40 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Your content is your life's work.<br />
              <span className="text-primary">We make sure it stays yours.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Join 500+ creators who trust Kohza to protect their premium courses, coaching programs, and digital products.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="h-14 px-10 text-lg shadow-lg shadow-primary/20"
                data-cal-link="kohza/15min"
                data-cal-namespace="15min"
                data-cal-config='{"layout":"month_view"}'
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link to="/audit" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                <Eye className="w-4 h-4" />
                Or get a free piracy audit first
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
