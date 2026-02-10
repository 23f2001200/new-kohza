import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, AlertTriangle, CheckCircle, ArrowRight, Download, Users, FileWarning, Calculator, Clock, CheckSquare, XCircle, Search, Eye, Play, Zap, Home as HomeIcon, FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Cal, { getCalApi } from "@calcom/embed-react";
import { TubelightNavBar } from '@/components/ui/tubelight-navbar';
import telegramMock from '@/assets/evidence/1.jpg';
import resellerMock from '@/assets/evidence/2.jpg';
import driveMock from '@/assets/evidence/3.png';

export default function Audit() {
    const [isCalLoaded, setIsCalLoaded] = React.useState(false);

    React.useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min" });
            cal("ui", { "styles": { "branding": { "brandColor": "#ea580c" } }, "hideEventTypeDetails": false, "layout": "month_view" });
            setIsCalLoaded(true);
        })();
    }, []);

    // Calculator State
    const [coursePrice, setCoursePrice] = React.useState(997);
    const [monthlySales, setMonthlySales] = React.useState(100);
    const [piracyRate, setPiracyRate] = React.useState(20);

    const annualLoss = Math.round(coursePrice * monthlySales * 12 * (piracyRate / 100));
    const monthlyLoss = Math.round(coursePrice * monthlySales * (piracyRate / 100));

    const navItems = [
        { name: 'Home', url: '/', icon: HomeIcon },
        { name: 'Player', url: '/custom-player', icon: Play },
        { name: 'DRM', url: '/drm', icon: Shield },
        { name: 'Audit', url: '/audit', icon: FileText },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <TubelightNavBar items={navItems} />

            {/* 🧠 SECTION 1: ATTENTION (Hero & Pre-Frame) */}
            {/* MIN-H-SCREEN to ensure it covers the full viewport */}
            <section className="relative min-h-[95vh] flex flex-col px-6 overflow-hidden pt-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

                {/* Hero Content - Centered */}
                <div className="container relative z-10 max-w-4xl mx-auto text-center flex-1 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-10 md:gap-14" // Increased gap between elements
                    >
                        {/* 1. Pre-Frame */}
                        <div className="flex justify-center">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-bold border border-destructive/20 animate-pulse">
                                <Clock className="w-4 h-4" />
                                <span>In Most Audits, We Find Piracy Within 10 Minutes</span>
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                            Your Course Is <span className="text-destructive">Already</span> Being Pirated. <br className="hidden md:block" />
                            We Can Show You Where.
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            If your course has more than 100 buyers, piracy is almost guaranteed. We find where it's leaking and shut it down.
                        </p>

                        {/* 2. Risk Reversal */}
                        <div className="flex flex-col items-center justify-center gap-6">
                            <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-lg shadow-primary/20" onClick={() => document.getElementById('audit-booking').scrollIntoView({ behavior: 'smooth' })}>
                                Book a Free Piracy Audit Call
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <p className="text-sm text-muted-foreground text-center max-w-xs py-6">
                                <span className="text-white font-medium">No-Loss Guarantee:</span> If we don’t find piracy, we’ll tell you. No sales pitch.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* 3. TRUST BAR (Authority - Pushed to bottom) */}
                <div className="relative z-10 py-16 border-t border-border/40 mt-auto bg-background/50 backdrop-blur-sm">
                    <div className="container max-w-5xl mx-auto text-center">
                        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-6 font-bold">Trusted by 500+ Creators & Platforms</p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="text-xl font-bold font-serif">Teachable</span>
                            <span className="text-xl font-bold font-serif">Kajabi</span>
                            <span className="text-xl font-bold font-serif">ClickFunnels</span>
                            <span className="text-xl font-bold font-serif">Skool</span>
                            <span className="text-xl font-bold font-serif">Circle</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. EXCLUSION ("Who This Is NOT For") */}
            <section className="py-24 bg-secondary/20">
                <div className="container max-w-4xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Who This Is <span className="text-destructive">NOT</span> For</h2>
                            <p className="text-muted-foreground mb-6">
                                We operate at an enterprise level. Our systems are designed for high-value intellectual property.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 opacity-60">
                                    <XCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                                    <span>Creators making under $5k/year</span>
                                </li>
                                <li className="flex items-start gap-3 opacity-60">
                                    <XCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                                    <span>Free YouTube content creators</span>
                                </li>
                                <li className="flex items-start gap-3 opacity-60">
                                    <XCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                                    <span>Hobbyists who don't care about revenue loss</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-card border border-border p-8 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-primary" /> Who It IS For
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-foreground font-medium">Course Creators ($50k+ Revenue)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-foreground font-medium">Coaches & Consultants</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-foreground font-medium">Info-Product Sellers</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. EVIDENCE (Screenshots with Context) */}
            <section className="py-24 relative">
                <div className="container max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">It’s Happening While You Sleep</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            The longer it’s live, the harder it is to remove. Pirated links get indexed by Google every day.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Telegram */}
                        <Card className="bg-card/50 border-destructive/10 overflow-hidden group hover:border-destructive/30 transition-all">
                            <div className="h-48 bg-zinc-900 border-b relative overflow-hidden">
                                <img src={telegramMock} alt="Telegram Piracy" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                                <div className="absolute top-2 right-2 bg-destructive text-white text-[10px] font-bold px-2 py-1 rounded">
                                    HIGH RISK
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Users className="w-5 h-5 text-blue-500" /> Telegram Groups
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong>Context:</strong> Private communities with 10k+ members.
                                </p>
                                <p className="text-xs text-red-400 flex items-center gap-1">
                                    <Search className="w-3 h-3" /> Hard to find manually
                                </p>
                            </CardContent>
                        </Card>

                        {/* Reseller */}
                        <Card className="bg-card/50 border-destructive/10 overflow-hidden group hover:border-destructive/30 transition-all">
                            <div className="h-48 bg-zinc-900 border-b relative overflow-hidden">
                                <img src={resellerMock} alt="Reseller Site" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <span className="bg-destructive text-white px-3 py-1 rounded font-bold -rotate-12 text-sm shadow-lg border border-red-400/50">SOLD FOR $15</span>
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <AlertTriangle className="w-5 h-5 text-yellow-500" /> "Group Buy" Sites
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong>Context:</strong> Organized resale of your $997 course for pennies.
                                </p>
                                <p className="text-xs text-red-400 flex items-center gap-1">
                                    <Search className="w-3 h-3" /> Indexes on Google
                                </p>
                            </CardContent>
                        </Card>

                        {/* Drive */}
                        <Card className="bg-card/50 border-destructive/10 overflow-hidden group hover:border-destructive/30 transition-all">
                            <div className="h-48 bg-zinc-900 border-b relative overflow-hidden">
                                <img src={driveMock} alt="Google Drive Leak" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            </div>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Shield className="w-5 h-5 text-green-500" /> Open Clouds
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong>Context:</strong> Unprotected Google Drive folders shared publicly.
                                </p>
                                <p className="text-xs text-red-400 flex items-center gap-1">
                                    <Search className="w-3 h-3" /> Direct download links
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 6. REVENUE MATH (Logic - Interactive) */}
            <section className="py-24 bg-card border-y border-border">
                <div className="container max-w-5xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-4">
                                <Calculator className="w-4 h-4" /> REVENUE LEAKAGE CALCULATOR
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Do The Math. <br />It’s Not Just "Pennies".
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Drag the sliders to see how much piracy is actually costing you per year.
                            </p>

                            {/* Inputs */}
                            <div className="space-y-8 pr-8">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-medium">Course Price</label>
                                        <span className="font-mono font-bold">${coursePrice}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="10" max="5000" step="10"
                                        value={coursePrice}
                                        onChange={(e) => setCoursePrice(Number(e.target.value))}
                                        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-medium">Monthly Sales (Units)</label>
                                        <span className="font-mono font-bold">{monthlySales}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1" max="1000" step="1"
                                        value={monthlySales}
                                        onChange={(e) => setMonthlySales(Number(e.target.value))}
                                        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-medium">Piracy Rate (Est.)</label>
                                        <span className="font-mono font-bold text-destructive">{piracyRate}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="5" max="90" step="5"
                                        value={piracyRate}
                                        onChange={(e) => setPiracyRate(Number(e.target.value))}
                                        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-destructive"
                                    />
                                    <p className="text-xs text-muted-foreground mt-2">
                                        *Industry average is 30-40% for unprotected courses.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full bg-secondary/30 p-8 rounded-2xl border border-border self-center md:self-stretch flex flex-col justify-center">
                            <div className="space-y-6 text-center md:text-left">
                                <div>
                                    <h4 className="text-muted-foreground text-sm uppercase tracking-wide font-bold mb-1">Monthly Loss</h4>
                                    <p className="text-2xl font-mono font-bold opacity-80">${monthlyLoss.toLocaleString()}</p>
                                </div>
                                <div className="pt-6 border-t border-border/50">
                                    <h4 className="text-destructive font-bold text-lg uppercase tracking-wide mb-2">Annual Revenue Bleed</h4>
                                    <p className="text-5xl md:text-6xl font-mono font-bold text-destructive tracking-tighter">
                                        ${annualLoss.toLocaleString()}
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-4">
                                        That's <span className="text-foreground font-bold">{Math.round(annualLoss / coursePrice)}</span> sales stolen every year.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. TIMELINE (Process Proof) */}
            <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-background to-secondary/5">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Implementation Timeline</h2>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border/50 -translate-x-1/2" />

                        <div className="space-y-12">
                            {[
                                {
                                    day: "Day 1",
                                    title: "Discovery & Audit",
                                    desc: "We scan 2.4M+ sites and map every leak of your content using our AI crawler.",
                                    icon: Search,
                                    color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
                                },
                                {
                                    day: "Day 3",
                                    title: "Takedowns Initiated",
                                    desc: "Automated legal notices sent to hosts, registries, and payment processors.",
                                    icon: FileWarning,
                                    color: "bg-orange-500/10 text-orange-500 border-orange-500/20"
                                },
                                {
                                    day: "Day 14",
                                    title: "Major Mirrors Down",
                                    desc: "Google Drive, Telegram channels, and reselling sites neutralized.",
                                    icon: XCircle,
                                    color: "bg-red-500/10 text-red-500 border-red-500/20"
                                },
                                {
                                    day: "Ongoing",
                                    title: "24/7 AI Shield",
                                    desc: "Our system watches the web. New leaks are killed instantly.",
                                    icon: Zap,
                                    color: "bg-green-500/10 text-green-500 border-green-500/20"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className={`relative flex flex-col md:flex-row gap-8 items-center md:items-start ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Content Card */}
                                    <div className="flex-1 w-full md:w-auto pl-12 md:pl-0">
                                        <div className={`p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:bg-card transition-colors duration-300 relative group overflow-hidden ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            <div className={`absolute top-0 left-0 w-1 h-full ${item.color.split(' ')[0].replace('bg-', 'bg-')}`} />
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${item.color}`}>{item.day}</span>
                                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                                        </div>
                                    </div>

                                    {/* Initial/Center Icon */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-border flex items-center justify-center shrink-0 z-10 shadow-lg">
                                        <item.icon className="w-5 h-5 text-muted-foreground" />
                                    </div>

                                    {/* Spacer for alternating layout */}
                                    <div className="flex-1 w-full md:w-auto hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. CALL OUTCOME (Clarity) */}
            <section className="py-24 bg-card border-y border-border text-center">
                <div className="container max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8">What You’ll Walk Away With</h2>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="p-6 bg-background rounded-xl border border-border">
                            <Eye className="w-8 h-8 text-primary mb-4" />
                            <h3 className="font-bold mb-2">Piracy Map</h3>
                            <p className="text-sm text-muted-foreground">Exact locations where your content is hosted right now.</p>
                        </div>
                        <div className="p-6 bg-background rounded-xl border border-border">
                            <Calculator className="w-8 h-8 text-primary mb-4" />
                            <h3 className="font-bold mb-2">Loss Estimate</h3>
                            <p className="text-sm text-muted-foreground">Calculated revenue leakage based on your specific traffic.</p>
                        </div>
                        <div className="p-6 bg-background rounded-xl border border-border">
                            <CheckCircle className="w-8 h-8 text-primary mb-4" />
                            <h3 className="font-bold mb-2">Action Plan</h3>
                            <p className="text-sm text-muted-foreground">Step-by-step strategy to stop it (even if you don't hire us).</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. ACTION (Booking + Reassurance) */}
            <section id="audit-booking" className="py-24 relative bg-secondary/20">
                <div className="container max-w-4xl mx-auto px-6 text-center">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-4">Secure Your Revenue</h2>
                        <p className="text-xl text-muted-foreground">
                            We’ll show you the data. You decide the rest. <br />
                            <span className="text-primary font-medium">Limited spots available for manual audits.</span>
                        </p>
                    </div>

                    <Card className="overflow-hidden border-border bg-background shadow-2xl mb-8">
                        <CardContent className="p-0">
                            <Cal
                                namespace="15min"
                                calLink="kohza/15min"
                                style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "hidden" }}
                                config={{ "layout": "month_view", "useSlotsViewOnSmallScreen": "true" }}
                            />
                        </CardContent>
                    </Card>

                    {/* Post-Booking Reassurance */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center justify-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary" /> No pressure, data-driven call.
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Lock className="w-4 h-4 text-primary" /> 100% Confidential Audit.
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Shield className="w-4 h-4 text-primary" /> No access to your customer data.
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. FAQs */}
            <section className="py-24 px-6 border-t border-border/50">
                <div className="container max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-8 text-center">Common Questions</h3>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What if I already send DMCA notices?</AccordionTrigger>
                            <AccordionContent>
                                Manual DMCA notices are like whack-a-mole. Automated bots re-upload your content instantly. Our system works at the server level (Google, Cloudflare, Telegram) to kill the source.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Does this affect my real students?</AccordionTrigger>
                            <AccordionContent>
                                Not at all. Our DRM is invisible to legitimate users. It only triggers when someone tries to screen-record, download, or share credentials.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is this legal?</AccordionTrigger>
                            <AccordionContent>
                                100%. We operate strictly within international copyright laws (DMCA, GDPR) and use standard enforcement mechanisms that platforms are legally required to respect.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            <Footer />
        </div>
    );
}
