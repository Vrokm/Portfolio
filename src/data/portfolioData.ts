import { Project, Skill } from '../types';
// Example using placeholder images (replace with your actual images/URLs)
// You can host images on services like Cloudinary, Imgur, or within your public folder.

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online store built with MERN stack and Redux.',
    imageUrl: 'https://via.placeholder.com/400x250/cbd5e0/475569?text=Project+1',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Tailwind'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task manager with drag-and-drop functionality.',
    imageUrl: 'https://via.placeholder.com/400x250/94a3b8/475569?text=Project+2',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website V1',
    description: 'My previous portfolio website built with vanilla HTML, CSS, JS.',
    imageUrl: 'https://via.placeholder.com/400x250/64748b/e2e8f0?text=Project+3',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

export const skills: Skill[] = [
    { id: 1, name: 'React'},
    { id: 2, name: 'TypeScript'},
    { id: 3, name: 'JavaScript'},
    { id: 4, name: 'Node.js'},
    { id: 5, name: 'Express'},
    { id: 6, name: 'MongoDB'},
    { id: 7, name: 'HTML5'},
    { id: 8, name: 'CSS3'},
    { id: 9, name: 'Tailwind CSS'},
    { id: 10, name: 'Git'},
    { id: 11, name: 'Firebase'},
    { id: 12, name: 'SQL'},
]