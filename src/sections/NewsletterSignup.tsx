// src/sections/NewsletterSignup.tsx
import React, { useState } from 'react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage(''); // Clear previous messages

    // --- Replace with your actual newsletter subscription logic ---
    // This usually involves sending the email to a backend API
    // or a third-party service like Mailchimp, ConvertKit, etc.
    console.log('Subscribing email:', email);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Example success/error handling (replace with real response handling)
    const success = Math.random() > 0.2; // Simulate success 80% of the time

    if (success) {
      setStatus('success');
      setMessage('Thanks for subscribing! Check your inbox.');
      setEmail(''); // Clear input on success
      setTimeout(() => { // Optionally clear message after a while
         if (status === 'success') { // Check if state hasn't changed again
            setStatus('idle');
            setMessage('');
         }
      }, 5000);
    } else {
      setStatus('error');
      setMessage('Oops! Something went wrong. Please try again later.');
       setTimeout(() => { // Optionally clear message after a while
         if (status === 'error') { // Check if state hasn't changed again
            setStatus('idle');
            setMessage('');
         }
      }, 5000);
    }
    // --- End of placeholder logic ---
  };

  return (
    <section id="newsletter" className="py-16 md:py-20 bg-gray-100 dark:bg-gray-700">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            Stay Up-to-Date
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Subscribe to my newsletter for occasional updates on new projects, blog posts, and tech insights. No spam, ever.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <label htmlFor="newsletter-email" className="sr-only"> {/* Screen reader label */}
                Email Address
              </label>
              <input
                type="email"
                id="newsletter-email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                aria-label="Email Address for Newsletter"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white flex-grow" // flex-grow allows input to take available space
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex-shrink-0" // flex-shrink-0 prevents button shrinking
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {message && (
              <p className={`mt-4 text-sm text-center ${
                status === 'success' ? 'text-green-600 dark:text-green-400' : ''
              } ${
                status === 'error' ? 'text-red-600 dark:text-red-400' : ''
              }`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;