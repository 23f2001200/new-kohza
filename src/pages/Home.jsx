import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Activity, Zap, ChevronDown, ChevronUp, Lock } from 'lucide-react';

// Animated counter hook
function useAnimatedCount(end, duration = 2000, shouldStart = true) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (!shouldStart) return;

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      countRef.current = Math.floor(end * easeOut);
      setCount(countRef.current);

      if (progress === 1) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, shouldStart]);

  return count;
}

// Animated Grid Component
function AnimatedGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const animatedUptime = useAnimatedCount(99.998, 2000, isInView);


  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{
        background: 'rgba(226, 226, 222, 0.3)',
        border: '1px solid rgba(33, 31, 26, 0.05)',
        padding: '48px',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'end',
        marginBottom: '48px',
        gap: '32px',
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: 1 }}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'rgba(33, 31, 26, 0.4)',
              fontWeight: 'bold',
              display: 'block',
              marginBottom: '8px'
            }}
          >
            System Load
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: '300',
              letterSpacing: '-0.02em',
              display: 'block',
              marginBottom: '24px'
            }}
          >
            Global Grid State
          </motion.span>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{
              maxWidth: '448px',
              padding: '16px',
              background: 'rgba(33, 31, 26, 0.05)',
              border: '1px solid rgba(33, 31, 26, 0.05)',
              borderRadius: '4px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
              <span style={{ color: 'rgba(33, 31, 26, 0.4)', fontSize: '18px', marginTop: '2px' }}>⚠</span>
              <p style={{
                fontSize: '14px',
                color: 'rgba(33, 31, 26, 0.7)',
                lineHeight: '1.6',
                fontWeight: '500',
                margin: 0
              }}>
                <span style={{
                  display: 'block',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '10px',
                  color: 'rgba(33, 31, 26, 0.4)',
                  fontWeight: 'bold',
                  marginBottom: '4px'
                }}>
                  Impact Analysis
                </span>
                $1.2 Billion is lost annually to piracy of coaches and content creators.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5, type: "spring", bounce: 0.4 }}
          style={{ textAlign: 'right' }}
        >
          <span style={{
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'rgba(33, 31, 26, 0.4)',
            fontWeight: 'bold',
            display: 'block',
            marginBottom: '8px'
          }}>
            Uptime
          </span>
          <span style={{
            fontSize: '20px',
            fontFamily: 'monospace',
            color: '#211f1a'
          }}>
            {animatedUptime.toFixed(3)}%
          </span>
        </motion.div>
      </div>

      {/* Abstract Bar Chart */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '12px',
        opacity: 0.2,
        marginBottom: '32px',
        height: '64px',
        alignItems: 'end'
      }}>
        {[32, 48, 40, 24, 56, 32, 64, 40, 48, 32, 56, 40].map((targetHeight, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={isInView ? { height: `${targetHeight}px` } : {}}
            transition={{ delay: 0.6 + i * 0.05, duration: 0.5, type: "spring", stiffness: 100 }}
            style={{
              border: i % 3 === 0 ? 'none' : '1px solid #211f1a',
              background: i % 3 === 0 ? '#211f1a' : 'transparent',
              width: '100%'
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        style={{ borderTop: '1px solid rgba(33, 31, 26, 0.1)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between' }}
      >
        <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(33, 31, 26, 0.4)', margin: 0 }}>
          Efficiency Dashboard v4.2
        </p>
        <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(33, 31, 26, 0.4)', margin: 0 }}>
          All systems operational
        </p>
      </motion.div>
    </motion.div>
  );
}

// MAR Section Component with Animated Progress Bars
function MARSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const progressBars = [
    { label: 'Scanning Velocity', value: 'Real-time', width: 90, meta: 'Latency: <50ms' },
    { label: 'Takedown Success', value: '99.8%', width: 98, meta: 'Industry Avg: 65%' },
    { label: 'Asset Recovery', value: '$12.4M', width: 75, meta: 'YTD Estimate' }
  ];

  return (
    <section ref={ref} className="responsive-section-padding" style={{ background: '#211f1a', color: '#FFFFFF', padding: '128px 0' }}>
      <div className="responsive-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 48px' }}>
        <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '128px', alignItems: 'start' }}>

          {/* Left Column */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'rgba(255, 253, 249, 0.4)',
                fontWeight: 'bold',
                display: 'block',
                marginBottom: '24px'
              }}
            >
              Key Differentiator
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                textTransform: 'none',
                letterSpacing: '-0.02em',
                fontWeight: 'bold',
                color: '#FFFFFF',
                marginBottom: '32px',
                margin: '0 0 32px 0'
              }}
            >
              MAR™ — Multi-Algo Reporting
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: '18px',
                lineHeight: '1.7',
                color: 'rgba(255, 253, 249, 0.7)',
                margin: 0
              }}
            >
              MAR scans 2.4M+ links daily across Telegram, Discord, Google, and file-sharing networks. When pirated content surfaces, our multi-algorithm system identifies the source within 72 hours and forces takedowns from multiple angles—10× faster than traditional DMCA services. Automated enforcement at enterprise scale.
            </motion.p>
          </div>

          {/* Right Column - Progress Bars */}
          <div style={{ paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {progressBars.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                style={{ position: 'relative' }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  letterSpacing: '0.15em',
                  marginBottom: '16px'
                }}>
                  <span style={{ color: 'rgba(255, 253, 249, 0.6)' }}>{item.label}</span>
                  <span style={{ color: '#FFFFFF' }}>{item.value}</span>
                </div>
                <div style={{
                  height: '4px',
                  background: 'rgba(255, 253, 249, 0.1)',
                  width: '100%',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={isInView ? { width: `${item.width}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.6 + i * 0.15, ease: [0.43, 0.13, 0.23, 0.96] }}
                    style={{
                      height: '100%',
                      background: '#FFFFFF',
                      position: 'absolute',
                      left: 0,
                      top: 0
                    }}
                  />
                </div>
                <p style={{
                  fontSize: '10px',
                  color: 'rgba(255, 253, 249, 0.3)',
                  marginTop: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  margin: '8px 0 0 0'
                }}>
                  {item.meta}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Section Component - Completely Redesigned
function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      num: '01',
      label: 'Defense Infrastructure',
      title: 'Enterprise DRM Security',
      desc: 'Hollywood-grade encryption with Google Widevine & Apple FairPlay DRM. Total screen capture block on mobile. No downloader with 100M+ installs can breach our security. Dynamic watermarking with user ID, email, and IP tracking.',
      icon: Shield,
      color: 'rgba(111, 2, 2, 0.1)', // Blue
      accentColor: '#6f0202'
    },
    {
      num: '02',
      label: 'Automated Enforcement',
      title: 'Advanced Piracy Detection',
      desc: 'DRM alone isn\'t enough—hackers have evolved. Our system detects DRM breaches, password sharing, and advanced piracy attempts in real-time. Track per-user watch time, device data, and security events. Blocked 57,000+ sessions across 2000+ platforms in 6 months.',
      icon: Activity,
      color: 'rgba(111, 2, 2, 0.1)', // Red
      accentColor: '#6f0202'
    },
    {
      num: '03',
      label: 'Revenue Protection',
      title: 'Revenue Growth Platform',
      desc: 'Prevent illegal downloads and see revenue jump up to 81% annually. Built for e-learning platforms, media companies, and high-ticket course creators where a single leak costs $50K+. Protect your intellectual property as mission-critical infrastructure.',
      icon: Zap,
      color: 'rgba(245, 158, 11, 0.1)', // Amber
      accentColor: '#6f0202'
    }
  ];

  return (
    <section ref={ref} className="responsive-container responsive-section-padding" style={{ maxWidth: '1440px', margin: '0 auto 128px', padding: '0 48px' }}>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="responsive-flex gap-override"
        style={{ marginBottom: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}
      >
        <div>
          <span style={{
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'rgba(33, 31, 26, 0.4)',
            fontWeight: 'bold',
            display: 'block',
            marginBottom: '8px'
          }}>
            Protection Architecture
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: '500',
            letterSpacing: '-0.02em',
            color: '#211f1a',
            margin: 0
          }}>
            Three-Layer Defense
          </h2>
        </div>
        <div style={{
          width: '4px',
          height: '48px',
          background: 'linear-gradient(to bottom, #211f1a, transparent)',
          opacity: 0.2
        }}></div>
      </motion.div>

      {/* Features Grid - Asymmetric Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
        {features.map((feature, i) => {
          const Icon = feature.icon;
          const isEven = i % 2 === 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
              style={{
                position: 'relative',
                background: 'rgba(255, 253, 249, 0.6)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(33, 31, 26, 0.04)',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 30px 80px -20px rgba(33, 31, 26, 0.08), 0 0 0 1px rgba(33, 31, 26, 0.02)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.background = 'rgba(255, 253, 249, 0.9)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 253, 249, 0.6)';
              }}
            >
              {/* Background Pattern - More Subtle */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: isEven ? 0 : 'auto',
                left: isEven ? 'auto' : 0,
                width: '50%',
                height: '100%',
                background: `radial-gradient(circle at ${isEven ? 'right' : 'left'} center, ${feature.color}, transparent 70%)`,
                opacity: 0.3,
                pointerEvents: 'none'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'radial-gradient(rgba(33, 31, 26, 0.08) 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}></div>
              </div>

              <div className="responsive-feature-card" style={{
                position: 'relative',
                zIndex: 1,
                display: 'grid',
                gridTemplateColumns: isEven ? '1fr 140px' : '140px 1fr',
                gap: '56px',
                padding: '56px',
                alignItems: 'center'
              }}>

                {/* Icon Column */}
                <div style={{
                  order: isEven ? 2 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.15, type: "spring", stiffness: 100 }}
                    style={{
                      width: '140px',
                      height: '140px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${feature.color}80, rgba(255, 253, 249, 0.4))`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${feature.accentColor}15`,
                      position: 'relative',
                      boxShadow: `0 10px 40px -10px ${feature.accentColor}30`
                    }}
                  >
                    {/* Outer Ring - Softer */}
                    <div style={{
                      position: 'absolute',
                      inset: '-16px',
                      border: `1px solid ${feature.accentColor}08`,
                      borderRadius: '50%'
                    }}></div>
                    <Icon size={52} style={{ color: feature.accentColor, strokeWidth: 1.5 }} />
                  </motion.div>
                </div>

                {/* Content Column */}
                <div style={{ order: isEven ? 1 : 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  {/* Number Badge - Softer */}
                  <div className="badge-container" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '20px'
                  }}>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      fontFamily: 'monospace',
                      color: feature.accentColor,
                      background: `${feature.color}80`,
                      padding: '6px 14px',
                      borderRadius: '6px',
                      letterSpacing: '0.1em',
                      border: `1px solid ${feature.accentColor}20`
                    }}>
                      {feature.num}
                    </span>
                    <span style={{
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: 'rgba(33, 31, 26, 0.4)',
                      fontWeight: 'bold'
                    }}>
                      {feature.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '26px',
                    fontWeight: '600',
                    letterSpacing: '-0.01em',
                    color: '#211f1a',
                    marginBottom: '14px',
                    margin: '0 0 14px 0',
                    lineHeight: '1.3'
                  }}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.75',
                    color: 'rgba(33, 31, 26, 0.65)',
                    margin: 0
                  }}>
                    {feature.desc}
                  </p>

                  {/* Accent Line - Softer */}
                  <div style={{
                    marginTop: '28px',
                    height: '3px',
                    width: '64px',
                    background: `linear-gradient(to right, ${feature.accentColor}60, transparent)`,
                    borderRadius: '3px'
                  }}></div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{
          marginTop: '48px',
          padding: '40px',
          background: 'rgba(255, 253, 249, 0.4)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '48px',
          border: '1px solid rgba(33, 31, 26, 0.04)'
        }}
      >
        {[
          { value: '99.9%', label: 'Block Rate' },
          { value: '2.4M+', label: 'Links Scanned Daily' },
          { value: '<50ms', label: 'Detection Latency' }
        ].map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '32px',
              fontWeight: '600',
              color: '#211f1a',
              marginBottom: '8px',
              fontFamily: 'monospace',
              letterSpacing: '-0.02em'
            }}>
              {stat.value}
            </div>
            <div style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(33, 31, 26, 0.4)',
              fontWeight: 'bold'
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section >
  );
}

// Quote Section Component - Sophisticated Design
function QuoteSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{
        padding: '160px 48px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, #fffdf9 0%, #ffffff 100%)'
      }}
    >
      {/* Decorative Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.03,
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(33, 31, 26, 0.3) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        pointerEvents: 'none'
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative'
      }}>

        {/* Top Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: '120px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(33, 31, 26, 0.3), transparent)',
            margin: '0 auto 64px',
            transformOrigin: 'center'
          }}
        />

        {/* Decorative Frame Corners */}
        <div style={{
          position: 'absolute',
          inset: '-24px',
          pointerEvents: 'none'
        }}>
          {/* Top-left corner */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '24px',
            height: '24px',
            borderTop: '2px solid rgba(33, 31, 26, 0.1)',
            borderLeft: '2px solid rgba(33, 31, 26, 0.1)',
            borderTopLeftRadius: '4px'
          }}></div>

          {/* Top-right corner */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: '50%',
            transform: 'translateX(50%)',
            width: '24px',
            height: '24px',
            borderTop: '2px solid rgba(33, 31, 26, 0.1)',
            borderRight: '2px solid rgba(33, 31, 26, 0.1)',
            borderTopRightRadius: '4px'
          }}></div>

          {/* Bottom-left corner */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '24px',
            height: '24px',
            borderBottom: '2px solid rgba(33, 31, 26, 0.1)',
            borderLeft: '2px solid rgba(33, 31, 26, 0.1)',
            borderBottomLeftRadius: '4px'
          }}></div>

          {/* Bottom-right corner */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            right: '50%',
            transform: 'translateX(50%)',
            width: '24px',
            height: '24px',
            borderBottom: '2px solid rgba(33, 31, 26, 0.1)',
            borderRight: '2px solid rgba(33, 31, 26, 0.1)',
            borderBottomRightRadius: '4px'
          }}></div>
        </div>

        {/* Quote Content */}
        <div style={{
          textAlign: 'center',
          padding: '0 48px'
        }}>

          {/* Opening Quote Mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '120px',
              lineHeight: '0.5',
              color: 'rgba(33, 31, 26, 0.08)',
              fontFamily: 'serif',
              marginBottom: '32px',
              fontWeight: '300'
            }}
          >
            "
          </motion.div>

          {/* Main Quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              lineHeight: '1.15',
              fontWeight: '300',
              color: '#211f1a',
              marginBottom: '24px',
              margin: '0 0 24px 0',
              letterSpacing: '-0.03em',
              fontStyle: 'italic',
              maxWidth: '900px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Knowledge compounds.
            </h2>

            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              lineHeight: '1.15',
              fontWeight: '300',
              color: '#211f1a',
              margin: 0,
              letterSpacing: '-0.03em',
              fontStyle: 'italic',
              maxWidth: '900px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              It should not be stolen.
            </h2>
          </motion.div>

          {/* Decorative Seperator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              margin: '64px auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px'
            }}
          >
            <div style={{
              width: '32px',
              height: '1px',
              background: 'rgba(33, 31, 26, 0.2)'
            }}></div>
            <div style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: 'rgba(33, 31, 26, 0.3)'
            }}></div>
            <div style={{
              width: '32px',
              height: '1px',
              background: 'rgba(33, 31, 26, 0.2)'
            }}></div>
          </motion.div>

          {/* Attribution */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <span style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: 'rgba(33, 31, 26, 0.35)',
              fontWeight: 'bold',
              display: 'inline-block',
              padding: '8px 24px',
              border: '1px solid rgba(33, 31, 26, 0.08)',
              borderRadius: '24px',
              background: 'rgba(255, 253, 249, 0.5)'
            }}>
              Kohza Philosophy
            </span>
          </motion.div>
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          style={{
            width: '120px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(33, 31, 26, 0.3), transparent)',
            margin: '64px auto 0',
            transformOrigin: 'center'
          }}
        />
      </div >
    </section >
  );
}

function Home() {
  const [openFAQ, setOpenFAQ] = useState(-1);

  useEffect(() => {
    (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", "15min", { origin: "https://app.cal.com" });

    // UI for Modal
    Cal.ns["15min"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });

    // Inline Booking
    Cal.ns["15min"]("inline", {
      elementOrSelector: "#my-cal-inline-15min",
      config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" },
      calLink: "kohza/15min",
    });
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#fffdf9', color: '#211f1a', fontFamily: "'Playfair Display', serif" }}>

      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255, 253, 249, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(33, 31, 26, 0.1)'
      }}>
        <div className="responsive-container responsive-padding" style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '24px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '900',
            letterSpacing: '-0.02em',
            margin: 0,
            textTransform: 'lowercase'
          }}>kohza.</h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(33, 31, 26, 0.5)',
              fontWeight: 'bold'
            }}>
              Ref: 2024.01 // Desktop Protocol
            </span>
            <Link to="/player" style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(33, 31, 26, 0.6)',
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>
              Player Engine
            </Link>
            <button
              data-cal-link="kohza/15min"
              data-cal-namespace="15min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              style={{
                fontSize: '11px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                background: '#211f1a',
                color: '#ffffff',
                padding: '10px 24px',
                borderRadius: '2px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(33, 31, 26, 0.8)'}
              onMouseLeave={(e) => e.target.style.background = '#211f1a'}
            >
              Book Strategy Call
            </button>
          </div>
        </div>
      </nav >

      <main style={{ flexGrow: 1, paddingTop: '80px' }}>

        {/* Hero Header */}
        <header className="responsive-container responsive-section-padding" style={{
          maxWidth: '1440px',
          margin: '0 auto 128px',
          padding: '0 48px'
        }}>
          <div className="responsive-grid gap-override" style={{
            display: 'grid',
            gridTemplateColumns: '7fr 5fr',
            gap: '96px',
            alignItems: 'end'
          }}>

            {/* Left Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}
              >
                <span style={{ width: '8px', height: '8px', background: '#211f1a' }}></span>
                <span style={{
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: 'rgba(33, 31, 26, 0.6)',
                  fontWeight: 'bold'
                }}>
                  Confidential Executive Briefing
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  lineHeight: '1.05',
                  marginBottom: '40px',
                  letterSpacing: '-0.02em',
                  fontWeight: 'bold',
                  color: '#211f1a',
                  textTransform: 'none'
                }}
              >
                Protect What<br />You Teach.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  fontSize: '20px',
                  lineHeight: '1.6',
                  color: 'rgba(33, 31, 26, 0.6)',
                  maxWidth: '640px'
                }}
              >
                No downloader, plugin, or hack can breach Kohza's DRM protection. Secure your premium courses and content with Hollywood-grade encryption. Prevent screen recording, block unauthorized downloads, and increase revenue by up to 81%.
              </motion.p>
            </div>

            {/* Right Column - Metrics Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ width: '100%' }}
            >
              <div className="responsive-grid" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px'
              }}>
                {[
                  { label: 'Encryption', value: 'Widevine DRM', accent: '#6f0202' },
                  { label: 'Quality', value: '4K Streaming', accent: '#6f0202' },
                  { label: 'Coverage', value: '2.4M+ Daily Scans', accent: '#6f0202' },
                  { label: 'Uptime', value: '99.9% SLA', accent: '#6f0202' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{
                      y: -4,
                      transition: { duration: 0.2 }
                    }}
                    style={{
                      padding: '32px 28px',
                      background: 'rgba(255, 253, 249, 0.7)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      border: '1px solid rgba(33, 31, 26, 0.06)',
                      cursor: 'default',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'box-shadow 0.3s',
                      boxShadow: '0 2px 12px rgba(33, 31, 26, 0.04)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 12px 32px rgba(33, 31, 26, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 2px 12px rgba(33, 31, 26, 0.04)';
                    }}
                  >
                    {/* Colored accent bar */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '3px',
                      height: '100%',
                      background: `linear-gradient(to bottom, ${item.accent}, transparent)`,
                      opacity: 0.6
                    }}></div>

                    {/* Label */}
                    <span style={{
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: 'rgba(33, 31, 26, 0.4)',
                      fontWeight: 'bold',
                      display: 'block',
                      marginBottom: '12px'
                    }}>
                      {item.label}
                    </span>

                    {/* Value */}
                    <span style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      letterSpacing: '-0.01em',
                      color: '#211f1a',
                      display: 'block',
                      lineHeight: '1.3'
                    }}>
                      {item.value}
                    </span>

                    {/* Subtle indicator dot */}
                    <div style={{
                      position: 'absolute',
                      bottom: '16px',
                      right: '16px',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: item.accent,
                      opacity: 0.3
                    }}></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </header>

        {/* Video Section */}
        <section className="responsive-container" style={{ maxWidth: '1440px', margin: '0 auto 128px', padding: '0 48px' }}>
          <div style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            background: 'rgba(33, 31, 26, 0.05)',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(33, 31, 26, 0.1)',
            boxShadow: '0 25px 50px -12px rgba(33, 31, 26, 0.05)',
            marginBottom: '24px'
          }}>
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
            >
              <source src="/MyComp.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 8px' }}>
            <p style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'rgba(33, 31, 26, 0.4)',
              fontWeight: 'bold'
            }}>
              System Capabilities Demonstration
            </p>
            <p style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'rgba(33, 31, 26, 0.4)',
              fontWeight: 'bold'
            }}>
              v.2.0
            </p>
          </div>
        </section>

        {/* Global Grid State Section */}
        <section className="responsive-container" style={{ maxWidth: '1440px', margin: '0 auto 128px', padding: '0 48px' }}>
          <AnimatedGrid />
        </section>

        {/* How We Protect You Section - Redesigned */}
        <FeaturesSection />

        {/* MAR Section - Dark */}
        <MARSection />

        {/* Dynamic Watermarking Section */}
        <section className="responsive-section-padding" style={{ padding: '128px 0', background: '#211f1a', color: '#fffdf9', position: 'relative', overflow: 'hidden' }}>
          <div className="responsive-container responsive-grid gap-override" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <span style={{
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'rgba(255, 255, 255, 0.4)',
                fontWeight: 'bold',
                display: 'block',
                marginBottom: '24px'
              }}>
                Visual DeterrenceLayer
              </span>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontFamily: "'Playfair Display', serif",
                color: '#ffffff',
                marginBottom: '32px',
                lineHeight: '1.1'
              }}>
                Dynamic<br />Watermarking
              </h2>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.7',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '48px',
                maxWidth: '540px'
              }}>
                Our player overlays viewer-specific data (IP, Email, User ID) that floats randomly across the video. This psychological deterrent stops 98% of casual screen recording attempts before they even start.
              </p>

              <div style={{ display: 'flex', gap: '32px' }}>
                {[
                  { label: 'Opacity', value: 'Variable' },
                  { label: 'Movement', value: 'Randomized' },
                  { label: 'Data', value: 'User Specific' }
                ].map((item, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>{item.label}</div>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#fff' }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Demo */}
            <div style={{
              height: '400px',
              background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                opacity: 0.1,
                backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
                backgroundSize: '20px 20px'
              }}></div>

              {/* Floating Watermark Simulation */}
              <motion.div
                animate={{
                  x: [0, 100, -50, 80, 0],
                  y: [0, -80, 40, -20, 0],
                  opacity: [0.3, 0.6, 0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  position: 'absolute',
                  top: '30%',
                  left: '30%',
                  padding: '8px 16px',
                  background: 'rgba(0,0,0,0.4)',
                  borderRadius: '4px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  zIndex: 10
                }}
              >
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', fontFamily: 'monospace' }}>User: aryan@kohza.com</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace' }}>IP: 192.168.1.1</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Security Standards Strip */}
        <section style={{ padding: '64px 0', background: '#ffffff', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="responsive-container responsive-flex" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 48px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '80px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(33, 31, 26, 0.4)', fontWeight: 'bold' }}>Secured By</span>

            {['Google Widevine', 'Apple FairPlay', 'Microsoft PlayReady'].map((std, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', opacity: 0.7 }}>
                <Lock size={16} color="#6f0202" />
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#211f1a', fontFamily: "'Playfair Display', serif" }}>
                  {std}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Integration Ecosystem */}
        <section className="responsive-section-padding" style={{ padding: '128px 0', background: '#fffdf9' }}>
          <div className="responsive-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 48px', textAlign: 'center' }}>
            <span style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#6f0202',
              fontWeight: 'bold',
              display: 'block',
              marginBottom: '24px'
            }}>
              Seamless Integration
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: "'Playfair Display', serif",
              color: '#211f1a',
              marginBottom: '64px',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Works with your existing stack
            </h2>

            <div className="responsive-flex gap-override" style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '80px',
              flexWrap: 'wrap',
              opacity: 0.6
            }}>
              {['React', 'WordPress', 'Flutter', 'Next.js', 'iOS', 'Android'].map((tech, i) => (
                <div key={i} style={{
                  fontSize: '24px',
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 'bold',
                  color: '#211f1a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ width: '8px', height: '8px', background: '#6f0202', borderRadius: '50%' }}></span>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted Clientele - Testimonials */}
        <section style={{ borderBottom: '1px solid rgba(111, 2, 2, 0.08)', padding: '128px 0', background: '#fffdf9' }}>
          <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 48px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '80px', textAlign: 'center' }}
            >
              <span style={{
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#6f0202',
                fontWeight: 'bold',
                display: 'block',
                marginBottom: '16px'
              }}>
                Institutional Trust
              </span>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontFamily: "'Playfair Display', serif",
                color: '#211f1a',
                margin: 0
              }}>
                Securing the Knowledge Economy
              </h2>
            </motion.div>

            <div className="gap-override" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px'
            }}>
              {[
                {
                  quote: "Kohza brings together Search Marketers of all levels. Besides pure strategies, we needed absolute security for our exclusive 'offbeat' courses. Kohza ensures we remain a step ahead.",
                  author: "Andrew Steven",
                  role: "Founder, IMG Institute",
                  metric: "100% Leak Prevention"
                },
                {
                  quote: "The only course dedicated to beauty entrepreneurs creating classy cosmetic brands. Designed for startups, our intellectual property is our most valuable asset. Kohza protects it flawlessly.",
                  author: "Verra Oktavianti",
                  role: "Director, BeautyBiz Masterclass",
                  metric: "$1.2M Revenue Protected"
                },
                {
                  quote: "A digital platform for independent cinematographic works. We needed Hollywood-grade DRM without the Hollywood budget complexity. Kohza delivered instant, scalable security.",
                  author: "Elizane Pinheiro",
                  role: "Producer, UnivFilms Entertainment",
                  metric: "Zero Takedown Latency"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  style={{
                    padding: '48px',
                    background: '#ffffff',
                    border: '1px solid rgba(33, 31, 26, 0.04)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <p style={{
                    fontSize: '18px',
                    lineHeight: '1.7',
                    color: 'rgba(33, 31, 26, 0.8)',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: 'italic',
                    marginBottom: '32px'
                  }}>
                    "{item.quote}"
                  </p>
                  <div>
                    <div style={{
                      width: '40px',
                      height: '1px',
                      background: '#6f0202',
                      marginBottom: '24px',
                      opacity: 0.3
                    }} />
                    <h4 style={{
                      fontSize: '16px',
                      fontFamily: "'Playfair Display', serif",
                      color: '#211f1a',
                      marginBottom: '4px'
                    }}>
                      {item.author}
                    </h4>
                    <p style={{
                      fontSize: '12px',
                      color: 'rgba(33, 31, 26, 0.5)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '16px'
                    }}>
                      {item.role}
                    </p>
                    <span style={{
                      fontSize: '11px',
                      background: 'rgba(111, 2, 2, 0.05)',
                      color: '#6f0202',
                      padding: '6px 12px',
                      borderRadius: '100px',
                      fontWeight: 'bold',
                      letterSpacing: '0.05em'
                    }}>
                      {item.metric}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="responsive-section-padding" style={{ padding: '128px 0', background: '#fffdf9' }}>
          <div className="responsive-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 48px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: '64px' }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontFamily: "'Playfair Display', serif",
                color: '#211f1a',
                marginBottom: '16px'
              }}>
                Technical Inquiries
              </h2>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                {
                  q: "How does the DRM actually work?",
                  a: "We integrate Google Widevine and Apple FairPlay DRM at the hardware level. This means the decryption happens in a secure environment on the device (CDM), preventing screen recorders and downloaders from accessing the raw video stream."
                },
                {
                  q: "Can screen recording be blocked on all devices?",
                  a: "We achieve 100% block rates on mobile devices (Android/iOS) and Safari (macOS). On Windows/Chrome, we use dynamic watermarking and browser fingerprinting to deter capture, as OS-level blocking is restricted by browser architectures."
                },
                {
                  q: "Is it compatible with my existing LMS?",
                  a: "Yes. Kohza provides a plug-and-play embed code that works with WordPress, Kajabi, Teachable, Moodle, and custom React/Next.js apps. We also offer native SDKs for iOS, Android, and Flutter apps."
                },
                {
                  q: "What is the pricing model?",
                  a: "We offer tiered pricing based on bandwidth and storage usage, similar to AWS but with security built-in. Plans start at $199/month for high-ticket course creators. Contact sales for enterprise volume discounts."
                }
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    borderBottom: '1px solid rgba(33, 31, 26, 0.1)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)}
                    style={{
                      width: '100%',
                      padding: '24px 0',
                      background: 'transparent',
                      border: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span style={{
                      fontSize: '18px',
                      fontFamily: "'Playfair Display', serif",
                      color: '#211f1a',
                      fontWeight: '500'
                    }}>
                      {item.q}
                    </span>
                    {openFAQ === i ? <ChevronUp size={20} color="#6f0202" /> : <ChevronDown size={20} color="#211f1a" />}
                  </button>
                  <AnimatePresence>
                    {openFAQ === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p style={{
                          paddingBottom: '24px',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: 'rgba(33, 31, 26, 0.7)',
                          margin: 0
                        }}>
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* Inline Booking Section */}
        <section className="responsive-section-padding" style={{ padding: '0 0 128px', background: '#fffdf9' }}>
          <div className="responsive-container responsive-padding mobile-w-full" style={{
            maxWidth: '560px',
            margin: '0 auto',
            padding: '40px',
            textAlign: 'center',
            background: '#ffffff',
            border: '1px solid rgba(33, 31, 26, 0.05)',
            borderRadius: '16px',
            boxShadow: '0 4px 24px rgba(33, 31, 26, 0.04)'
          }}>
            <span style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#6f0202',
              fontWeight: 'bold',
              display: 'block',
              marginBottom: '48px'
            }}>
              Ready to Secure Your Content?
            </span>
            <div style={{ width: "100%", height: "100%", overflow: "scroll" }} id="my-cal-inline-15min"></div>
          </div>
        </section>

        {/* Quote Section - Redesigned */}
        <QuoteSection />

      </main>

      {/* Footer */}
      <footer className="responsive-section-padding" style={{ background: '#FFFFFF', padding: '80px 0', borderTop: '1px solid rgba(33, 31, 26, 0.1)' }}>
        <div className="responsive-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 48px' }}>
          <div className="responsive-flex gap-override" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '48px', flexWrap: 'wrap' }}>
            <div>
              <h2 style={{
                fontSize: '20px',
                textTransform: 'lowercase',
                fontWeight: '900',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
                margin: '0 0 16px 0'
              }}>
                kohza.
              </h2>
              <p style={{
                fontSize: '10px',
                color: 'rgba(33, 31, 26, 0.4)',
                fontWeight: 'bold',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                maxWidth: '320px',
                lineHeight: '1.6',
                margin: 0
              }}>
                Established MMXXIV. Infrastructure Security Division.<br />
                All rights reserved. System monitoring active.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '64px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <span style={{
                  fontSize: '10px',
                  color: 'rgba(33, 31, 26, 0.3)',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em'
                }}>
                  Menu
                </span>
                {['Security', 'Pricing'].map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      fontWeight: 'bold',
                      color: '#211f1a',
                      textDecoration: 'none',
                      transition: 'color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'rgba(33, 31, 26, 0.6)'}
                    onMouseLeave={(e) => e.target.style.color = '#211f1a'}
                  >
                    {item}
                  </a>
                ))}
                <Link to="/player" style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  fontWeight: 'bold',
                  color: '#211f1a',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}>
                  Player Engine
                </Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <span style={{
                  fontSize: '10px',
                  color: 'rgba(33, 31, 26, 0.3)',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em'
                }}>
                  Legal
                </span>
                {['Terms', 'Privacy'].map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      fontWeight: 'bold',
                      color: '#211f1a',
                      textDecoration: 'none',
                      transition: 'color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'rgba(33, 31, 26, 0.6)'}
                    onMouseLeave={(e) => e.target.style.color = '#211f1a'}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <span style={{
                  fontSize: '10px',
                  color: 'rgba(33, 31, 26, 0.3)',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em'
                }}>
                  Connect
                </span>
                <a
                  href="#"
                  data-cal-link="kohza/15min"
                  data-cal-namespace="15min"
                  data-cal-config='{"layout":"week_view","useSlotsViewOnSmallScreen":"true"}'
                  style={{
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    fontWeight: 'bold',
                    color: '#211f1a',
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'rgba(33, 31, 26, 0.6)'}
                  onMouseLeave={(e) => e.target.style.color = '#211f1a'}
                >
                  Book Call
                </a>
                <a
                  href="#"
                  style={{
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    fontWeight: 'bold',
                    color: '#211f1a',
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'rgba(33, 31, 26, 0.6)'}
                  onMouseLeave={(e) => e.target.style.color = '#211f1a'}
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div >
  );
}


export default Home;
