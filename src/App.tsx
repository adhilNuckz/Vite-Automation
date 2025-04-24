import React, { useState } from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

// Sample projects data - replace with your own
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    github: "https://github.com/yourusername/ecommerce",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Implements secure payment processing, real-time inventory management, and responsive design.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 2,
    title: "AI Image Recognition",
    github: "https://github.com/yourusername/ai-image",
    description: "Machine learning project using TensorFlow for real-time image recognition. Includes custom model training and web interface for live camera feed processing.",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask"]
  },
  {
    id: 3,
    title: "Blockchain Voting System",
    github: "https://github.com/yourusername/blockchain-voting",
    description: "Decentralized voting system built on Ethereum blockchain. Features secure voter authentication, vote verification, and real-time result tabulation.",
    tech: ["Solidity", "Web3.js", "React", "Ethereum"]
  }
  ,
  {
    id: 3,
    title: "Blockchain Voting System",
    github: "https://github.com/yourusername/blockchain-voting",
    description: "Decentralized voting system built on Ethereum blockchain. Features secure voter authentication, vote verification, and real-time result tabulation.",
    tech: ["Solidity", "Web3.js", "React", "Ethereum"]
  }
  ,
  {
    id: 3,
    title: "Blockchain Voting System",
    github: "https://github.com/yourusername/blockchain-voting",
    description: "Decentralized voting system built on Ethereum blockchain. Features secure voter authentication, vote verification, and real-time result tabulation.",
    tech: ["Solidity", "Web3.js", "React", "Ethereum"]
  }
  ,
  {
    id: 3,
    title: "Blockchain Voting System",
    github: "https://github.com/yourusername/blockchain-voting",
    description: "Decentralized voting system built on Ethereum blockchain. Features secure voter authentication, vote verification, and real-time result tabulation.",
    tech: ["Solidity", "Web3.js", "React", "Ethereum"]
  }
  ,
  {
    id: 3,
    title: "Blockchain Voting System",
    github: "https://github.com/yourusername/blockchain-voting",
    description: "Decentralized voting system built on Ethereum blockchain. Features secure voter authentication, vote verification, and real-time result tabulation.",
    tech: ["Solidity", "Web3.js", "React", "Ethereum"]
  }
  ,
  {
    id: 3,
    title: "Blockchain Voting System",
    github: "https://github.com/yourusername/blockchain-voting",
    description: "Decentralized voting system built on Ethereum blockchain. Features secure voter authentication, vote verification, and real-time result tabulation.",
    tech: ["Solidity", "Web3.js", "React", "Ethereum"]
  }
  ,
  {
    id: 3,
    title: "Blockchain Voting System",
    github: "https://github.com/yourusername/blockchain-voting",
    description: "Decentralized voting system built on Ethereum blockchain. Features secure voter authentication, vote verification, and real-time result tabulation.",
    tech: ["Solidity", "Web3.js", "React", "Ethereum"]
  }
  ,
  {
    id: 3,
    title: "Blockchain Voting System",
    github: "https://github.com/yourusername/blockchain-voting",
    description: "Decentralized voting system built on Ethereum blockchain. Features secure voter authentication, vote verification, and real-time result tabulation.",
    tech: ["Solidity", "Web3.js", "React", "Ethereum"]
  }
  ,
  {
    id: 3,
    title: "Blockchain Voting System",
    github: "https://github.com/yourusername/blockchain-voting",
    description: "Decentralized voting system built on Ethereum blockchain. Features secure voter authentication, vote verification, and real-time result tabulation.",
    tech: ["Solidity", "Web3.js", "React", "Ethereum"]
  }
  ,
  {
    id: 3,
    title: "Blockchain Voting System",
    github: "https://github.com/yourusername/blockchain-voting",
    description: "Decentralized voting system built on Ethereum blockchain. Features secure voter authentication, vote verification, and real-time result tabulation.",
    tech: ["Solidity", "Web3.js", "React", "Ethereum"]
  }
  ,
  {
    id: 3,
    title: "Blockchain Voting System",
    github: "https://github.com/yourusername/blockchain-voting",
    description: "Decentralized voting system built on Ethereum blockchain. Features secure voter authentication, vote verification, and real-time result tabulation.",
    tech: ["Solidity", "Web3.js", "React", "Ethereum"]
  }
  ,
  {
    id: 3,
    title: "Blockchain Voting System",
    github: "https://github.com/yourusername/blockchain-voting",
    description: "Decentralized voting system built on Ethereum blockchain. Features secure voter authentication, vote verification, and real-time result tabulation.",
    tech: ["Solidity", "Web3.js", "React", "Ethereum"]
  }
];



function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative w-full sm:w-96 h-64 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-4 flex gap-2 flex-wrap">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 rounded-full bg-white/10 text-white/70 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="absolute bottom-6 left-6 text-white/50">
              <Code2 className="w-6 h-6 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all shadow-xl">
            <p className="text-white/80 text-sm leading-relaxed">
              {project.description}
            </p>
            <div className="absolute bottom-6 right-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-16 px-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1671105424304-5aed79f1156a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRhcmslMjBza3l8ZW58MHx8MHx8fDA%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">My Project Portfolio</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Computer Science student passionate about building innovative solutions.
            Here's a showcase of projects I've developed during my academic journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;