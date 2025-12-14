import Hero from '../components/Hero';
import ScrollingEffect from '../components/ScrollingEffect';
import Courses from '../components/Courses';
import Stats from '../components/Stats';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <ScrollingEffect />
      <Courses />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;
