"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Zap, Users, Globe } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden py-24 text-center bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6"
      >
        <span className="text-sm text-primary font-medium bg-primary/10 px-4 py-2 rounded-full">
          Introducing REPULSO
        </span>
        <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
          E-Pass made{" "}
          <span className="bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 bg-clip-text text-transparent">
            super easy!
          </span>
        </h1>
        <p className="max-w-xl mx-auto mt-4 text-muted-foreground text-lg">
          Simplify your travel and work permissions with instant, secure, and
          government-verified E-Pass approvals — anytime, anywhere.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/login">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/learn-more">
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </Link>
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-100 to-transparent" />
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: Shield,
      title: "Secure Verification",
      desc: "End-to-end encryption ensures your personal and travel data stays protected.",
    },
    {
      icon: Zap,
      title: "Lightning-Fast Approvals",
      desc: "AI-driven workflow ensures your requests get validated in minutes, not hours.",
    },
    {
      icon: Users,
      title: "Connected Ecosystem",
      desc: "Stay linked with authorized bodies and organizations through REPULSO Network.",
    },
  ];

  return (
    <section className="py-24 bg-muted/40">
      <h2 className="text-center text-4xl font-semibold mb-12">Core Features</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="p-8 bg-background border rounded-2xl shadow hover:shadow-lg transition"
          >
            <f.icon className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: "01", title: "Register & Verify", desc: "Sign up with valid ID for instant verification." },
    { num: "02", title: "Request E-Pass", desc: "Fill in your purpose, route, and timing details." },
    { num: "03", title: "Track & Download", desc: "Get notified when approved — ready to travel." },
  ];

  return (
    <section className="py-24 text-center">
      <h2 className="text-4xl font-semibold mb-8">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto px-6">
        {steps.map((s, i) => (
          <div
            key={i}
            className="flex-1 bg-background border rounded-xl p-8 shadow-sm hover:shadow-lg transition"
          >
            <div className="text-4xl font-bold text-primary mb-4">{s.num}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  const data = [
    { label: "Passes Approved", value: "1.2M+" },
    { label: "Users Joined", value: "500K+" },
    { label: "Govt Verified", value: "100%" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 text-center gap-10">
        {data.map((d, i) => (
          <div key={i}>
            <p className="text-5xl font-bold text-primary">{d.value}</p>
            <p className="text-muted-foreground mt-2">{d.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  const testimonials = [
    { name: "Anita", feedback: "REPULSO made E-Pass approval a breeze!" },
    { name: "Rahul", feedback: "Saved hours every week managing permissions." },
    { name: "Leela", feedback: "The fastest and safest way to get a pass!" },
  ];

  return (
    <section className="py-24 text-center">
      <h2 className="text-4xl font-semibold mb-10">User Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {testimonials.map((r, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-background border rounded-xl shadow-sm hover:shadow-lg transition"
          >
            <p className="italic text-muted-foreground">“{r.feedback}”</p>
            <h4 className="mt-4 font-semibold">{r.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 text-center bg-black text-white rounded-t-3xl">
      <h2 className="text-4xl font-bold mb-4">Ready to Simplify Your E-Pass?</h2>
      <p className="max-w-2xl mx-auto mb-8 text-lg">
        Join thousands who trust REPULSO for secure and fast E-Pass approvals.
      </p>
      <Link href="/signup">
        <Button variant="secondary" size="lg">
          Get Started Now
        </Button>
      </Link>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Reviews />
      <CTA />
    </>
  );
}
