import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { ImpactMetrics } from '../components/sections/ImpactMetrics';
import { Philosophy } from '../components/sections/Philosophy';
import { Experience } from '../components/sections/Experience';
import { Systems } from '../components/sections/Systems';
import { Scale } from '../components/sections/Scale';
import { Projects } from '../components/sections/Projects';
import { TechStack } from '../components/sections/TechStack';
import { Decisions } from '../components/sections/Decisions';
import { Contact } from '../components/sections/Contact';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        setTimeout(() => {
          const y = elem.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-slate-950 min-h-screen">
      <Hero />
      <ImpactMetrics />
      <Philosophy />
      <Experience />
      <Systems />
      <Scale />
      <Projects />
      <TechStack />
      <Decisions />
      <Contact />
    </div>
  );
}
