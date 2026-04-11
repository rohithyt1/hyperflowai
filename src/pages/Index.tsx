import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { ProblemSolution } from '@/components/ProblemSolution';
import { ServicesShowcase } from '@/components/ServicesShowcase';
import { SimpleWorkflow } from '@/components/SimpleWorkflow';
import { VoiceSamples } from '@/components/VoiceSamples';
import { AIvsHuman } from '@/components/AIvsHuman';
import { ROICalculator } from '@/components/ROICalculator';
import { SimpleDemo } from '@/components/SimpleDemo';
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel';
import { Integrations } from '@/components/Integrations';
import { PaymentGateway } from '@/components/PaymentGateway';
import { SimpleFAQ } from '@/components/SimpleFAQ';
import { FinalCTA } from '@/components/FinalCTA';

const Index = () => {
  return (
    <Layout>
      {/* 1. Hook — What do we do? */}
      <Hero />
      
      {/* 2. Problem — Why do you need this? */}
      <ProblemSolution />
      
      {/* 3. Solution — Our 4 services with workflows */}
      <ServicesShowcase />
      
      {/* 4. Deep dive — AI Receptionist workflow */}
      <SimpleWorkflow />
      
      {/* 5. Hear it — Voice demo */}
      <VoiceSamples />
      
      {/* 6. Compare — AI vs Human */}
      <AIvsHuman />
      
      {/* 7. Prove it — ROI Calculator */}
      <ROICalculator />
      
      {/* 8. See it — Live demo */}
      <SimpleDemo />
      
      {/* 9. Social proof */}
      <TestimonialsCarousel />
      
      {/* 10. Tech — Integrations */}
      <Integrations />
      
      {/* 11. Buy — Pricing */}
      <PaymentGateway />
      
      {/* 12. Questions — FAQ */}
      <SimpleFAQ />
      
      {/* 13. Close — Final CTA */}
      <FinalCTA />
    </Layout>
  );
};

export default Index;
