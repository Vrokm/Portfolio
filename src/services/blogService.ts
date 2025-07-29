import axios from 'axios';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  slug: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const blogService = {
  async getAllPosts(): Promise<BlogPost[]> {
    try {
      const response = await axios.get(`${API_URL}/api/posts`);
      return response.data;
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }
  },

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const response = await axios.get(`${API_URL}/api/posts/${slug}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }
  }
}; 