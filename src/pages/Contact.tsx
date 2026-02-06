import { Layout } from '@/components/Layout';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contacts')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim() || null,
          service: formData.service || null,
          message: formData.message.trim(),
        });
      
      if (error) throw error;
      
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Failed to send",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Website",
      details: ["hyperflow.space"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Contact",
      details: ["Schedule a Call", "Live Support Available"],
      color: "text-accent"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@hyperflow.space", "support@hyperflow.space"],
      color: "text-primary-glow"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Sunday: 7:00 AM - 10:00 PM IST", "Quick Response Guaranteed"],
      color: "text-primary"
    }
  ];

  const services = [
    "AI Chat Bots",
    "Appointment Settlement Bots",
    "Website Chat Agents",
    "Custom AI Solutions",
    "Consultation",
    "Other"
  ];

  return (
    <Layout>
      <div className="pt-12">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-card/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <MessageSquare className="w-4 h-4" />
                <span>Get In Touch</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Let's Build Something <span className="text-glow">Amazing Together</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to transform your business with AI? We're here to help you every step of the way. 
                Get in touch with our team of experts today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Form */}
              <div>
                <div className="card-glow p-8">
                  <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Your Company"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                          Service of Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full min-h-32"
                        placeholder="Tell us about your project and how we can help..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="btn-hero w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Sent Successfully!
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    We're here to help and answer any questions you might have. 
                    We look forward to hearing from you!
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="card-glow p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${info.color} bg-current/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <info.icon className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Contact Options */}
                <div className="card-glow p-6">
                  <h3 className="text-xl font-bold mb-4">Quick Contact Options</h3>
                  <div className="space-y-3">
                    <Button 
                      className="w-full justify-start" 
                      variant="outline"
                      onClick={() => window.open('https://cal.com/star-ment-yrerge/30min?overlayCalendar=true', '_blank')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Schedule a Call
                    </Button>
                    <Button 
                      className="w-full justify-start" 
                      variant="outline"
                      onClick={() => window.location.href = 'mailto:support@hyperflow.space'}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email Support
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Live Chat
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Before You <span className="text-glow">Contact Us</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Here are some quick answers to common questions we receive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="card-glow p-6">
                <h3 className="font-bold mb-3">How quickly can you respond?</h3>
                <p className="text-muted-foreground text-sm">
                  We typically respond to all inquiries within 2-4 hours during business hours, 
                  and within 24 hours on weekends.
                </p>
              </div>
              
              <div className="card-glow p-6">
                <h3 className="font-bold mb-3">Do you offer free consultations?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! We offer free 30-minute consultations to discuss your needs and 
                  how our AI solutions can help your business.
                </p>
              </div>
              
              <div className="card-glow p-6">
                <h3 className="font-bold mb-3">What information should I include?</h3>
                <p className="text-muted-foreground text-sm">
                  Please include your business size, current challenges, and specific 
                  AI solutions you're interested in for the most helpful response.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}