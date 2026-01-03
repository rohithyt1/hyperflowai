import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface CurrencyContextType {
  currency: 'USD' | 'INR';
  symbol: string;
  rate: number;
  formatPrice: (usdAmount: number, showDecimals?: boolean) => string;
  isLoading: boolean;
  toggleCurrency: () => void;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'USD',
  symbol: '$',
  rate: 1,
  formatPrice: (amount) => `$${amount}`,
  isLoading: true,
  toggleCurrency: () => {},
});

// Approximate conversion rate
const USD_TO_INR_RATE = 83;

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectCurrency = async () => {
      try {
        // Call backend edge function for reliable IP-based detection
        const { data, error } = await supabase.functions.invoke('detect-currency');
        
        if (error) {
          console.error('Edge function error:', error);
          setCurrency('USD');
        } else if (data?.currency) {
          console.log('Currency detected:', data.currency, 'Country:', data.countryCode);
          setCurrency(data.currency as 'USD' | 'INR');
        } else {
          setCurrency('USD');
        }
      } catch (err) {
        console.error('Failed to detect currency:', err);
        setCurrency('USD');
      } finally {
        setIsLoading(false);
      }
    };

    detectCurrency();
  }, []);

  const symbol = currency === 'INR' ? '₹' : '$';
  const rate = currency === 'INR' ? USD_TO_INR_RATE : 1;

  const formatPrice = (usdAmount: number, showDecimals = false): string => {
    const converted = Math.round(usdAmount * rate);
    
    if (currency === 'INR') {
      // Format in Indian numbering system (lakhs, crores)
      return `₹${converted.toLocaleString('en-IN')}`;
    }
    
    return showDecimals 
      ? `$${usdAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`
      : `$${usdAmount.toLocaleString('en-US')}`;
  };

  const toggleCurrency = () => {
    setCurrency(prev => prev === 'USD' ? 'INR' : 'USD');
  };

  return (
    <CurrencyContext.Provider value={{ currency, symbol, rate, formatPrice, isLoading, toggleCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
