//import React, { useState } from 'react';

// const Contact: React.FC = () => {
//     // Basic state for a controlled form (add more fields as needed)
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const [status, setStatus] = useState(''); // For submission status

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setStatus('Sending...');
//         // --- Form Submission Logic ---
//         // Replace this with your actual form submission (e.g., using Formspree, Netlify Forms, or a backend endpoint)
//         console.log('Form Data:', { name, email, message });
//         // Simulate submission
//         setTimeout(() => {
//             setStatus('Message sent successfully!');
//             // Clear form after successful submission (optional)
//             setName('');
//             setEmail('');
//             setMessage('');
//             setTimeout(() => setStatus(''), 3000); // Clear status message after 3s
//         }, 1500);
//         // --- End Form Submission Logic ---
//     };


//   return (
//     <section id="contact" className="py-16 md:py-16 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
//           Get In Touch
//         </h2>
//         <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
//           <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
//             Have a question or want to work together? Feel free to reach out!
//           </p>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
//               />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Message</label>
//               <textarea
//                 id="message"
//                 rows={4}
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
//               ></textarea>
//             </div>
//             <div className="text-center">
//               <button
//                 type="submit"
//                 disabled={status === 'Sending...'}
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {status === 'Sending...' ? 'Sending...' : 'Send Message'}
//               </button>
//             </div>
//             {status && status !== 'Sending...' && (
//                 <p className={`text-center mt-4 text-sm ${status.includes('successfully') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
//                     {status}
//                 </p>
//             )}
//           </form>
//         </div>
//          {/* Or add direct contact info */}
//          <div className="text-center mt-12 text-gray-600 dark:text-gray-400">
//             <p>Alternatively, you can email me directly at:</p>
//             <a href="mailto:your.email@example.com" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
//                 your.email@example.com
//             </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


// src/sections/Contact.tsx (modify handleSubmit)

// src/sections/Contact.tsx
import React, { useState } from 'react'; // Ensure useState is imported

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    // Use more descriptive status states
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [feedbackMessage, setFeedbackMessage] = useState<string>(''); // Separate message for feedback

    // --- Updated handleSubmit function ---
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading'); // Set loading state
        setFeedbackMessage(''); // Clear previous feedback

        // Get the backend URL from environment variable, with a fallback
        const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';
        const apiUrl = `${backendUrl}/api/contact`; // Construct the full API endpoint URL

        console.log(`Sending contact form data to: ${apiUrl}`);

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    // Tell the server we're sending JSON
                    'Content-Type': 'application/json',
                },
                // Convert the JavaScript object to a JSON string
                body: JSON.stringify({ name, email, message }),
            });

            // Parse the JSON response body from the server
            const result = await response.json();

            console.log('Backend Response:', result);

            if (response.ok && result.success) {
                // --- Success Case ---
                setStatus('success');
                setFeedbackMessage(result.message || 'Message sent successfully!');
                // Clear the form fields
                setName('');
                setEmail('');
                setMessage('');
            } else {
                // --- Error Case (Validation or Server Error) ---
                setStatus('error');
                // Use the message from the backend, or a default
                setFeedbackMessage(result.message || 'An error occurred. Please try again.');
                // Optionally log specific validation errors if present
                if(result.errors) {
                    console.error('Validation Errors:', result.errors);
                }
            }
        } catch (error) {
            // --- Network Error Case ---
            console.error('Fetch Error:', error);
            setStatus('error');
            setFeedbackMessage('Network error. Could not reach server. Please try again later.');
        } finally {
            // Optional: Clear the feedback message after a few seconds
            // You might want to only do this on success or keep errors visible longer
            setTimeout(() => {
                if (status !== 'loading') { // Avoid clearing if another submission started quickly
                   setFeedbackMessage('');
                   setStatus('idle'); // Reset status after message clears
                }
            }, 6000); // Clear after 6 seconds
        }
    };
    // --- End of updated handleSubmit ---

    return (
        <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                    Get In Touch
                </h2>
                <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                        Have a question or want to work together? Feel free to reach out!
                    </p>
                    <form onSubmit={handleSubmit}>
                        {/* Name Input */}
                        <div className="mb-4">
                           <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Name</label>
                            <input
                                type="text" id="name" value={name}
                                onChange={(e) => setName(e.target.value)}
                                required disabled={status === 'loading'}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white disabled:opacity-60"
                            />
                        </div>
                        {/* Email Input */}
                        <div className="mb-4">
                           <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Email</label>
                           <input
                                type="email" id="email" value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required disabled={status === 'loading'}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white disabled:opacity-60"
                           />
                        </div>
                        {/* Message Textarea */}
                        <div className="mb-6">
                           <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Message</label>
                           <textarea
                                id="message" rows={4} value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required disabled={status === 'loading'}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white disabled:opacity-60"
                           ></textarea>
                        </div>
                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                        {/* Feedback Message Area */}
                        {feedbackMessage && (
                            <p className={`text-center mt-4 text-sm ${
                                status === 'success' ? 'text-green-600 dark:text-green-400' : ''
                            } ${
                                status === 'error' ? 'text-red-600 dark:text-red-400' : ''
                            }`}>
                                {feedbackMessage}
                            </p>
                        )}
                    </form>
                </div>
                {/* ... (Optional: Direct contact info remains the same) ... */}
            </div>
        </section>
    );
};

export default Contact;