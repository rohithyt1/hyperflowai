import { Layout } from '@/components/Layout';
import { Bot, Users, Target, Award, Lightbulb, Shield } from 'lucide-react';

export default function AboutPage() {
  const team = [
    {
      name: "Rohan",
      position: "CEO",
      bio: "Visionary leader driving AI innovation and business growth strategies.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sohail",
      position: "Partner",
      bio: "Strategic business development and partnership expert focused on scaling operations.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Shrwyansh",
      position: "Manager",
      bio: "Operations and project management specialist ensuring seamless service delivery.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Customer-Centric",
      description: "Every solution we build starts with understanding your unique business needs and challenges."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay at the forefront of AI technology to deliver cutting-edge solutions that drive results."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security and privacy protection are built into every AI agent we create."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We believe in long-term partnerships, providing ongoing support and optimization for your success."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to democratize AI for businesses of all sizes."
    },
    {
      year: "2021",
      title: "First 100 Clients",
      description: "Reached our first major milestone serving diverse industries."
    },
    {
      year: "2022",
      title: "AI Platform Launch",
      description: "Launched our proprietary AI platform for rapid agent deployment."
    },
    {
      year: "2023",
      title: "1M+ Conversations",
      description: "Our AI agents successfully handled over 1 million customer interactions."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded services worldwide with 24/7 multilingual support."
    }
  ];

  return (
    <Layout>
      <div className="pt-12">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-card/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Bot className="w-4 h-4" />
                <span>About HyperFlow</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Pioneering the Future of <span className="text-glow">AI-Powered Business</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're on a mission to make intelligent AI agents accessible to every business, 
                transforming how companies interact with customers and automate processes.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2020 by a team of AI researchers and business automation experts, 
                    HyperFlow emerged from a simple observation: while AI technology was advancing 
                    rapidly, most businesses still struggled to implement effective AI solutions.
                  </p>
                  <p>
                    We set out to bridge this gap by creating intuitive, powerful AI agents that 
                    could be deployed quickly and scaled effortlessly. Our founders brought together 
                    decades of experience from leading tech companies and academic institutions.
                  </p>
                  <p>
                    Today, we're proud to serve hundreds of businesses worldwide, from startups to 
                    Fortune 500 companies, helping them transform their operations with AI that 
                    actually works.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="card-glow p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">Happy Clients</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                      <div className="text-sm text-muted-foreground">Conversations</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="text-glow">Values</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These core principles guide everything we do and shape how we build 
                relationships with our clients and partners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="card-glow p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Meet Our <span className="text-glow">Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our diverse team of AI experts, engineers, and business professionals 
                brings together decades of experience in technology and customer success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="card-glow p-6 text-center hover:scale-105 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="card-glow p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to transform your business with AI? Let's work together to create 
                intelligent solutions that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-hero">Start Your Journey</button>
                <button className="btn-secondary">Contact Our Team</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}