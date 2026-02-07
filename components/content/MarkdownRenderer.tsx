'use client';

export default function MarkdownRenderer({ html }: { html: string }) {
  return (
    <div
      className="prose prose-invert max-w-none
        [&_h1]:text-text [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-4
        [&_h2]:text-text [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3
        [&_h3]:text-text [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2
        [&_p]:text-text-secondary [&_p]:leading-relaxed [&_p]:mb-4
        [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2
        [&_ul]:text-text-secondary [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4
        [&_ol]:text-text-secondary [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4
        [&_li]:mb-1
        [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-text-muted
        [&_code]:bg-background-elevated [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm
        [&_pre]:bg-background-elevated [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto
        [&_img]:rounded-lg [&_img]:my-4
        [&_hr]:border-border [&_hr]:my-8
        [&_table]:w-full [&_table]:border-collapse
        [&_th]:border [&_th]:border-border [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:bg-background-elevated
        [&_td]:border [&_td]:border-border [&_td]:px-3 [&_td]:py-2"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
