import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  excerpt: String,
  date: String,
  slug: String
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

const samplePosts = [
  {
    title: "Building a Modern Portfolio with React and TypeScript",
    content: "In this post, we'll explore how to create a modern portfolio website using React and TypeScript. We'll cover best practices, component architecture, and how to make your portfolio stand out.",
    excerpt: "Learn how to build a stunning portfolio website using React and TypeScript, with modern design patterns and best practices.",
    date: "2024-03-15",
    slug: "building-modern-portfolio"
  },
  {
    title: "The Power of Tailwind CSS in Modern Web Development",
    content: "Tailwind CSS has revolutionized the way we build user interfaces. This post dives deep into its utility-first approach and how it can speed up your development workflow.",
    excerpt: "Discover how Tailwind CSS can transform your web development workflow with its utility-first approach.",
    date: "2024-03-10",
    slug: "power-of-tailwind-css"
  },
  {
    title: "Creating Interactive Animations with React and Framer Motion",
    content: "Learn how to create smooth, interactive animations in your React applications using Framer Motion. We'll cover basic animations, gestures, and complex transitions.",
    excerpt: "Master the art of creating beautiful animations in React using Framer Motion's powerful animation library.",
    date: "2024-03-05",
    slug: "interactive-animations-framer-motion"
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log('Connected to MongoDB');

    // Clear existing posts
    await BlogPost.deleteMany({});
    console.log('Cleared existing posts');

    // Insert sample posts
    await BlogPost.insertMany(samplePosts);
    console.log('Added sample posts');

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase(); 