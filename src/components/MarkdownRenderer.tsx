// src/components/MarkdownRenderer.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      
components={{
    code({ className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      return !props.inline && match ? (
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
        // You can customize other elements as needed
        img: ({ node, ...props }) => (
          <img className="rounded-lg max-w-full h-auto my-4" {...props} />
        ),
        a: ({ node, ...props }) => (
          <a className="text-blue-600 dark:text-blue-400 hover:underline" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-xl font-bold mt-6 mb-3" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="my-4" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc list-inside my-4 pl-4" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal list-inside my-4 pl-4" {...props} />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 py-1 my-4 italic text-gray-700 dark:text-gray-300" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;