import aiDashboardImg from '../assets/projects/ai_dashboard.jpg';
import ecommerceImg from '../assets/projects/ecommerce.jpg';

export const projectsData = [
  {
    id: 1,
    title: 'AI-Powered Analytics Dashboard',
    category: 'Full Stack',
    image: aiDashboardImg,
    description:
      'Enterprise intelligence platform providing real-time telemetry, automated anomaly detection, and predictive traffic forecasting with customizable metric widgets.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express', 'Recharts'],
    liveUrl: 'https://example.com/ai-dashboard',
    githubUrl: 'https://github.com/chandnichauhan/ai-analytics-dashboard',
    featured: true,
  },
  {
    id: 2,
    title: 'Luxury E-Commerce Platform',
    category: 'Frontend',
    image: ecommerceImg,
    description:
      'High-conversion luxury lifestyle storefront featuring dark minimalist aesthetic, instantaneous product filters, bag animations, and seamless Stripe checkout flow.',
    tags: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Stripe API', 'Vite'],
    liveUrl: 'https://example.com/aura-luxe',
    githubUrl: 'https://github.com/chandnichauhan/aura-luxury-ecommerce',
    featured: true,
  },
  {
    id: 3,
    title: 'Developer Portfolio System',
    category: 'UI/UX',
    image: aiDashboardImg,
    description:
      'Next-generation portfolio website crafted for software engineers featuring glowing neon aesthetics, responsive glassmorphism, and integrated MongoDB contact pipeline.',
    tags: ['React', 'Express', 'MongoDB', 'Mongoose', 'Tailwind CSS'],
    liveUrl: 'https://example.com/chandni-portfolio',
    githubUrl: 'https://github.com/chandnichauhan/modern-portfolio',
    featured: true,
  },
  {
    id: 4,
    title: 'Cloud Task Management Suite',
    category: 'Full Stack',
    image: ecommerceImg,
    description:
      'Kanban and sprint management platform for agile teams with real-time websocket updates, task assignment, role-based access, and drag-and-drop boards.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Framer Motion'],
    liveUrl: 'https://example.com/task-suite',
    githubUrl: 'https://github.com/chandnichauhan/cloud-task-manager',
    featured: false,
  },
  {
    id: 5,
    title: 'Real-Time Financial Dashboard',
    category: 'Frontend',
    image: aiDashboardImg,
    description:
      'Streaming multi-currency financial analytics dashboard with live candlestick charts, portfolio balancing metrics, and automated risk scoring.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'WebSocket', 'Chart.js'],
    liveUrl: 'https://example.com/fin-analytics',
    githubUrl: 'https://github.com/chandnichauhan/crypto-analytics-dashboard',
    featured: false,
  },
  {
    id: 6,
    title: 'Pulse Design System & UI Kit',
    category: 'UI/UX',
    image: ecommerceImg,
    description:
      'Comprehensive open-source React UI design system containing 40+ accessible, customizable dark-mode components with built-in accessibility compliance.',
    tags: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS', 'Figma'],
    liveUrl: 'https://example.com/pulse-ui',
    githubUrl: 'https://github.com/chandnichauhan/pulse-design-system',
    featured: false,
  },
];
