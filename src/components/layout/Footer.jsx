import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="py-12 border-t border-border bg-card">
            <div className="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <span className="text-lg font-bold tracking-tighter block mb-2">kohza.</span>
                    <p className="text-muted-foreground text-sm">
                        &copy; {new Date().getFullYear()} Kohza Inc. All rights reserved.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm text-muted-foreground">
                    <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    <a href="mailto:aryan@kohza.in" className="hover:text-foreground transition-colors">aryan@kohza.in</a>
                </div>
            </div>
        </footer>
    );
}
