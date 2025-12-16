import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Trophy, BookOpen, Users } from 'lucide-react';
import './ScrollingEffect.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Code2,
    title: 'Learn',
    description: 'All members are mentors who have been hand-picked for their technical skills and passion for teaching. Our courses are easy to learn, fun and effective.',
    gradient: 'from-blue-600 to-cyan-500',
    badge: '50+ Courses',
  },
  {
    icon: Trophy,
    title: 'Enhance Your Skills',
    description: 'Master the coding world with over 1100 interactive challenges. Our challenges teach real-world skills where your portfolio shows excellence.',
    gradient: 'from-green-600 to-emerald-500',
    badge: '1100+ Challenges',
  },
  {
    icon: BookOpen,
    title: 'Build Your Portfolio',
    description: 'Store the projects you develop along with code for quick reference. From simple examples to complex projects with deployed websites.',
    gradient: 'from-purple-600 to-pink-500',
    badge: 'Portfolio Ready',
  },
];

export const ScrollingEffect = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardOneRef = useRef<HTMLDivElement>(null);
  const cardTwoRef = useRef<HTMLDivElement>(null);
  const cardThreeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if mobile view
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (isMobile) {
      // On mobile, disable scaling animations
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }

    // Create timeline with scroll trigger (desktop only)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: '38% 50%',
        end: '100% 50%',
        scrub: 2,
        pin: true,
      },
    });

    // Add animations to timeline
    tl.to(textRef.current, { top: '-7%' }, 'a')
      .to(cardOneRef.current, { top: '35%' }, 'a')
      .to(cardTwoRef.current, { top: '130%' }, 'a')
      .to(cardTwoRef.current, { top: '42%' }, 'b')
      .to(cardOneRef.current, { width: '65%', height: '65vh' }, 'b')
      .to(cardThreeRef.current, { top: '130%' }, 'b')
      .to(cardThreeRef.current, { top: '50%' }, 'c')
      .to(cardTwoRef.current, { width: '70%', height: '70vh' }, 'c');

    // Cleanup on unmount
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="scrolling-effect-main" ref={mainRef}>
      <div className="scrolling-effect-text" ref={textRef}>
        <h1>Why Choose Enqti Technologies?</h1>
        <p>Comprehensive learning features designed for your success</p>
      </div>
      <div className="scrolling-effect-cards" id="scrolling-effect-card-one" ref={cardOneRef}>
        <div className="card-content">
          <div className={`card-icon bg-gradient-to-br ${features[0].gradient}`}>
            <Code2 className="w-8 h-8 text-white" />
          </div>
          <h3>{features[0].title}</h3>
          <p>{features[0].description}</p>
          <div className="mt-6 pt-4 border-t border-slate-700">
            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
              {features[0].badge}
            </span>
          </div>
        </div>
      </div>
      <div className="scrolling-effect-cards" id="scrolling-effect-card-two" ref={cardTwoRef}>
        <div className="card-content">
          <div className={`card-icon bg-gradient-to-br ${features[1].gradient}`}>
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h3>{features[1].title}</h3>
          <p>{features[1].description}</p>
          <div className="mt-6 pt-4 border-t border-slate-700">
            <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
              {features[1].badge}
            </span>
          </div>
        </div>
      </div>
      <div className="scrolling-effect-cards" id="scrolling-effect-card-three" ref={cardThreeRef}>
        <div className="card-content">
          <div className={`card-icon bg-gradient-to-br ${features[2].gradient}`}>
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h3>{features[2].title}</h3>
          <p>{features[2].description}</p>
          <div className="mt-6 pt-4 border-t border-slate-700">
            <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
              {features[2].badge}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingEffect;
