import { Home, Shield, FileText, Mail } from 'lucide-react'
import { TubelightNavBar } from "@/components/ui/tubelight-navbar"

export function TubelightNavBarDemo() {
    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'DRM', url: '/drm', icon: Shield },
        { name: 'Audit', url: '/audit', icon: FileText },
        { name: 'Contact', url: '/contact', icon: Mail }
    ]

    return <TubelightNavBar items={navItems} />
}
