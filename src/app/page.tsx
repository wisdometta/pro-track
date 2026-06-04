import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import StepForm from '@/components/StepForm';
import Footer from '@/components/Footer';
import FloatingWidget from '@/components/FloatingWidget';

export default function Home() {
  return (
    <main className="flex-1">
      <NavBar />
      <Hero />
      <Services />
      <StepForm />
      <Footer />
      <FloatingWidget />
    </main>
  );
}
