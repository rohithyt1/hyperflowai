import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { WorkflowDiagram } from '@/components/WorkflowDiagram';
import { Benefits } from '@/components/Benefits';
import { StatsCounter } from '@/components/StatsCounter';
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel';
import { CompanyBanner } from '@/components/CompanyBanner';
import { FAQ } from '@/components/FAQ';
import { Chatbot } from '@/components/Chatbot';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <WorkflowDiagram />
      <Benefits />
      <StatsCounter />
      <TestimonialsCarousel />
      <CompanyBanner />
      <FAQ />
      <Chatbot />
    </Layout>
  );
};

export default Index;
