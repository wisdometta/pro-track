import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import QuoteCalculator from '@/components/QuoteCalculator';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import StepForm from '@/components/StepForm';
import Footer from '@/components/Footer';
import FloatingWidget from '@/components/FloatingWidget';

export default function Home() {
  return (
    <main className="flex-1">
      <NavBar />
      <Hero />
      <QuoteCalculator />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <StepForm />
      <Footer />
      <FloatingWidget />
    </main>
  );
}
