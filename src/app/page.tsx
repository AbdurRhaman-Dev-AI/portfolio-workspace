import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HighlightSlider from '@/components/HighlightSlider';
import ProjectsSection from '@/components/ProjectsSection';
import Expertise from '@/components/Expertise';
import Roadmap from '@/components/Roadmap';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-blue-500/20 selection:text-inherit">
      {/* Frosted Sticky Navigation Header */}
      <Navbar />

      {/* Main Page Flow */}
      <div className="flex-1 flex flex-col space-y-4 sm:space-y-8">
        {/* Section A & B: Animated Hero & Visual Stack */}
        <Hero />

        {/* Section C: Interactive Featured Highlights Slider ("A Closer Look") */}
        <HighlightSlider />

        {/* Section D: Dedicated Filterable Projects Section */}
        <ProjectsSection />

        {/* Section E: Core Expertise & Tools Bento */}
        <Expertise />

        {/* Section F: Academic & Career Roadmap Timeline */}
        <Roadmap />

        {/* Section G: Contact & Minimal Footer */}
        <Footer />
      </div>
    </main>
  );
}
