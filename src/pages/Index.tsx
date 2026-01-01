import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { OfferTimer } from '@/components/OfferTimer';
import { HowItWorks } from '@/components/HowItWorks';
import { ProblemSolution } from '@/components/ProblemSolution';
import { ROICalculator } from '@/components/ROICalculator';
import { VoiceSamples } from '@/components/VoiceSamples';
import { SimpleDemo } from '@/components/SimpleDemo';
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel';
import { PaymentGateway } from '@/components/PaymentGateway';
import { SimpleFAQ } from '@/components/SimpleFAQ';
import { FinalCTA } from '@/components/FinalCTA';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <ProblemSolution />
      <ROICalculator />
      <VoiceSamples />
      <SimpleDemo />
      <TestimonialsCarousel />
      <PaymentGateway />
      <SimpleFAQ />
      <FinalCTA />
      <OfferTimer />
    </Layout>
  );
};

export default Index;
