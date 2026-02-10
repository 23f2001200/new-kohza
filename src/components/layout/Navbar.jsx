import React from 'react';
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur border-b border-border/40">
            <div className="container flex items-center justify-between h-16 px-6 max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tighter">kohza.</span>
                </div>

                {/* CTA */}
                <Button
                    size="sm"
                    className="font-bold tracking-wide"
                    onClick={() => document.getElementById('audit-booking').scrollIntoView({ behavior: 'smooth' })}
                >
                    GET AUDIT
                </Button>
            </div>
        </nav>
    );
}
