import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { OfferTimer } from '@/components/OfferTimer';
import { ProblemSolution } from '@/components/ProblemSolution';
import { Services } from '@/components/Services';
import { ValueCapture } from '@/components/ValueCapture';
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel';
import { FAQDashboard } from '@/components/FAQDashboard';
import { Chatbot } from '@/components/Chatbot';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <OfferTimer />
      <ProblemSolution />
      <Services />
      <ValueCapture />
      <TestimonialsCarousel />
      <FAQDashboard />
      <Chatbot />
    </Layout>
  );
};

export default Index;
