import React from 'react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, Play, Shield, FileText, ArrowLeft, Ghost } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TubelightNavBar } from '@/components/ui/tubelight-navbar';

export default function NotFound() {
    const navItems = [
        { name: 'Home', url: '/', icon: HomeIcon },
        { name: 'Player', url: '/custom-player', icon: Play },
        { name: 'DRM', url: '/drm', icon: Shield },
        { name: 'Audit', url: '/audit', icon: FileText },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans flex flex-col items-center justify-center relative overflow-hidden">
            <TubelightNavBar items={navItems} />

            {/* Background ambiance */}
            <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
            <div className="absolute w-full h-full bg-background -z-20" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center px-6 max-w-2xl mx-auto"
            >
                {/* 404 Glitch Text */}
                <h1 className="text-[12rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary/20 to-transparent select-none relative">
                    404
                    <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-10 blur-3xl bg-primary rounded-full" />
                </h1>

                <div className="space-y-6 -mt-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                            Page Not Found
                        </h2>
                        <p className="text-muted-foreground mt-4 text-lg">
                            The page you're looking for doesn't exist or has been moved.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                    >
                        <Link to="/">
                            <Button size="lg" className="gap-2 h-12 px-8">
                                <ArrowLeft className="w-4 h-4" />
                                Return Home
                            </Button>
                        </Link>

                        <Link to="/custom-player">
                            <Button variant="outline" size="lg" className="gap-2 h-12 px-8">
                                <Play className="w-4 h-4" />
                                Visit Player
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
