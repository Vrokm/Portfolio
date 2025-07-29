import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-400 space-y-6">
          <p>
            Hello! I'm [Your Name], a dedicated [Your Role] based in [Your Location]. I have a strong passion for creating intuitive and dynamic user experiences.
          </p>
          <p>
            With a background in [Your Field/Degree], I've honed my skills in both front-end and back-end development. I enjoy tackling complex problems and learning new technologies to build efficient and scalable solutions.
          </p>
          <p>
            When I'm not coding, you can find me [Your Hobbies - e.g., exploring new tech trends, hiking, reading books]. I'm always eager to collaborate on interesting projects.
          </p>
          {/* Optional: Add a profile picture here */}
           {/* <img src="/path-to-your-photo.jpg" alt="Your Name" className="w-40 h-40 rounded-full mx-auto mt-8 mb-4 shadow-lg"/> */}
        </div>
      </div>
    </section>
  );
};

export default About;