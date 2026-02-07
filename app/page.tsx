'use client';

import { useState, FormEvent } from 'react';
import JsonLd from '../components/content/JsonLd';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error — please try again');
    }
  }

  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Organization","name":"The Deep Mirror","url":"https://the-deep-mirror.vercel.app"}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"WebSite","name":"The Deep Mirror","url":"https://the-deep-mirror.vercel.app"}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Has the Enneagram been debunked?","acceptedAnswer":{"@type":"Answer","text":"The Enneagram framework itself has empirical support, but traditional testing methods are problematic. Static surveys suffer from social desirability bias and can't capture the nuanced motivations that define each type. Our AI approach addresses these methodological limitations."}},{"@type":"Question","name":"What makes this different from other Enneagram tests?","acceptedAnswer":{"@type":"Answer","text":"Every other tool uses static questionnaires that can't adapt to your responses. We use conversational AI that probes inconsistencies and explores motivations dynamically, like a skilled therapist would. This eliminates the mistyping issues common with survey-based approaches."}},{"@type":"Question","name":"Why do so many people get mistyped on Enneagram tests?","acceptedAnswer":{"@type":"Answer","text":"Traditional tests can't distinguish between behavior and motivation, leading to surface-level typing. They also can't detect when someone is answering based on their ideal self rather than their actual patterns. Our AI interviews dig deeper to uncover true motivational drivers."}},{"@type":"Question","name":"How much does clinical-grade Enneagram testing cost?","acceptedAnswer":{"@type":"Answer","text":"Professional tools like iEQ9 charge $30-60 per assessment plus expensive certification requirements. We're building a more accessible solution that delivers clinical accuracy without the traditional cost barriers or manual administration overhead."}},{"@type":"Question","name":"Is this suitable for HR and executive coaching applications?","acceptedAnswer":{"@type":"Answer","text":"Yes, we're specifically designed for professional use cases where accuracy matters more than validation. The conversational approach provides the depth executive coaches need while eliminating the reliability issues that limit current tools in HR settings."}}]}} />

      <header className="border-b border-border bg-background-elevated">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold text-primary" style={{ fontFamily: "'Inter', sans-serif" }}>
            The Deep Mirror
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
            <a href="/compare" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
            <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section aria-label="Hero" className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4 leading-tight">
            Why Enneagram Tests Are Inaccurate—And How AI Fixes It
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Replace static surveys with dynamic conversational interviews. Get clinical-grade Enneagram typing through AI that probes deeper than any questionnaire can.
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            {status === 'success' ? (
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="text-primary font-medium">Thanks for signing up! We&apos;ll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background-elevated border border-border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : `Get Early Access`}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm mt-2">{errorMsg}</p>
            )}
          </div>
        </section>

        {/* Value Props */}
        <section aria-label="Features" className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Why The Deep Mirror?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <section aria-label="Beyond Survey Limitations" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Beyond Survey Limitations</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Static questionnaires can't adapt to your responses or probe inconsistencies. Our AI conducts real psychological interviews that evolve based on what you reveal.</p>
          </section>
          <section aria-label="Clinical-Grade Assessment" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Clinical-Grade Assessment</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Built for executive coaches and HR leaders who need accurate personality insights, not feel-good results that reinforce social desirability bias.</p>
          </section>
          <section aria-label="Dynamic Subtype Detection" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Dynamic Subtype Detection</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Unlike traditional tools that provide snapshot results, our conversational AI refines your type and subtype through ongoing interaction patterns.</p>
          </section>
          </div>
        </section>

        {/* FAQ */}
        <section aria-label="Frequently Asked Questions" className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">Has the Enneagram been debunked?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">The Enneagram framework itself has empirical support, but traditional testing methods are problematic. Static surveys suffer from social desirability bias and can't capture the nuanced motivations that define each type. Our AI approach addresses these methodological limitations.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">What makes this different from other Enneagram tests?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Every other tool uses static questionnaires that can't adapt to your responses. We use conversational AI that probes inconsistencies and explores motivations dynamically, like a skilled therapist would. This eliminates the mistyping issues common with survey-based approaches.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">Why do so many people get mistyped on Enneagram tests?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Traditional tests can't distinguish between behavior and motivation, leading to surface-level typing. They also can't detect when someone is answering based on their ideal self rather than their actual patterns. Our AI interviews dig deeper to uncover true motivational drivers.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">How much does clinical-grade Enneagram testing cost?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Professional tools like iEQ9 charge \$30-60 per assessment plus expensive certification requirements. We're building a more accessible solution that delivers clinical accuracy without the traditional cost barriers or manual administration overhead.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">Is this suitable for HR and executive coaching applications?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Yes, we're specifically designed for professional use cases where accuracy matters more than validation. The conversational approach provides the depth executive coaches need while eliminating the reliability issues that limit current tools in HR settings.</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-border bg-background-elevated mt-auto">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm">&copy; 2026 The Deep Mirror. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-text-muted hover:text-text transition-colors">Home</a>
              <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
              <a href="/compare" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
              <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
