import { getAllPosts } from '../../lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `FAQ — The Deep Mirror`,
  description: `Frequently asked questions about The Deep Mirror.`,
};

export default async function FaqPage() {
  const posts = await getAllPosts('faq');

  return (
    <>
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
      <main className="flex-1 mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold text-text mb-2">Frequently Asked Questions</h1>
        <p className="text-text-secondary mb-8">Find answers to common questions about The Deep Mirror.</p>

        {posts.length === 0 ? (
          <div className="bg-background-elevated border border-border rounded-xl p-8 text-center">
            <p className="text-text-muted">No FAQ articles yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/faq/${post.slug}`}
                className="block bg-background-elevated border border-border rounded-xl p-6 hover:border-primary transition-colors"
              >
                <h2 className="text-xl font-semibold text-text mb-1">{post.title}</h2>
                <p className="text-text-secondary text-sm">{post.description}</p>
              </a>
            ))}
          </div>
        )}
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
