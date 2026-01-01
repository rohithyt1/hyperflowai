import { useState, useEffect } from 'react';
import { Calculator, DollarSign, Phone, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ROICalculator() {
  const [avgTicket, setAvgTicket] = useState(250);
  const [missedCalls, setMissedCalls] = useState(15);
  const [callbackRate, setCallbackRate] = useState(30);
  const [recoveredRevenue, setRecoveredRevenue] = useState(0);

  useEffect(() => {
    // Lost leads = missed calls * (1 - callback rate)
    const lostLeadsPerWeek = missedCalls * (1 - callbackRate / 100);
    // Assume 50% conversion rate on answered calls
    const conversionsPerWeek = lostLeadsPerWeek * 0.5;
    const weeklyRevenue = conversionsPerWeek * avgTicket;
    const annualRevenue = weeklyRevenue * 52;
    setRecoveredRevenue(Math.round(annualRevenue));
  }, [avgTicket, missedCalls, callbackRate]);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Calculator className="w-4 h-4 text-primary" />
              <span>ROI Calculator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              See Your <span className="text-glow">Lost Revenue</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              How much money are missed calls costing your business?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Inputs */}
            <div className="card-glow p-6 space-y-6">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Your Numbers
              </h3>

              {/* Avg Ticket */}
              <div>
                <label className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Average Sale Value</span>
                  <span className="text-primary font-bold">${avgTicket}</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="50"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>$50</span>
                  <span>$2,000</span>
                </div>
              </div>

              {/* Missed Calls */}
              <div>
                <label className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Missed Calls Per Week</span>
                  <span className="text-primary font-bold">{missedCalls}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={missedCalls}
                  onChange={(e) => setMissedCalls(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1</span>
                  <span>50</span>
                </div>
              </div>

              {/* Callback Rate */}
              <div>
                <label className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Callback Success Rate</span>
                  <span className="text-primary font-bold">{callbackRate}%</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={callbackRate}
                  onChange={(e) => setCallbackRate(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="card-glow p-6 border-primary/30 bg-gradient-to-br from-primary/10 to-transparent">
              <h3 className="font-bold text-lg flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-primary" />
                Your Potential Recovery
              </h3>

              <div className="text-center py-6">
                <div className="text-sm text-muted-foreground mb-2">Annual Revenue You're Leaving on the Table</div>
                <div className="flex items-center justify-center gap-1">
                  <DollarSign className="w-8 h-8 text-destructive" />
                  <span className="text-5xl sm:text-6xl font-bold text-destructive">
                    {recoveredRevenue.toLocaleString()}
                  </span>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  That's <span className="text-foreground font-medium">${Math.round(recoveredRevenue / 12).toLocaleString()}/month</span> in lost revenue
                </p>
              </div>

              <div className="border-t border-border/50 pt-6 mt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm">AI Receptionist Cost</span>
                  <span className="font-bold text-primary">$297/mo</span>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm">ROI</span>
                  <span className="font-bold text-green-500">
                    {Math.round(((recoveredRevenue / 12) / 297) * 100)}% return
                  </span>
                </div>

                <Button 
                  className="w-full btn-hero group"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Stop Losing Money
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
