import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { SimpleWorkflow } from '@/components/SimpleWorkflow';
import { HowItWorks } from '@/components/HowItWorks';
import { ProblemSolution } from '@/components/ProblemSolution';
import { ROICalculator } from '@/components/ROICalculator';
import { VoiceSamples } from '@/components/VoiceSamples';
import { SimpleDemo } from '@/components/SimpleDemo';
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel';
import { Integrations } from '@/components/Integrations';
import { PaymentGateway } from '@/components/PaymentGateway';
import { SimpleFAQ } from '@/components/SimpleFAQ';
import { FinalCTA } from '@/components/FinalCTA';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <SimpleWorkflow />
      <HowItWorks />
      <ProblemSolution />
      <ROICalculator />
      <VoiceSamples />
      <SimpleDemo />
      <TestimonialsCarousel />
      <Integrations />
      <PaymentGateway />
      <SimpleFAQ />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
