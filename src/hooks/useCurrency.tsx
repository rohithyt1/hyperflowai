import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

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

// Approximate conversion rate (will be updated dynamically)
const USD_TO_INR_RATE = 83;

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectCountry = async () => {
      try {
        // Use multiple geolocation APIs for reliability
        const response = await fetch('https://ipapi.co/json/', { 
          signal: AbortSignal.timeout(3000) 
        });
        const data = await response.json();
        
        if (data.country_code === 'IN') {
          setCurrency('INR');
        } else {
          setCurrency('USD');
        }
      } catch (error) {
        // Fallback: try another API
        try {
          const response = await fetch('https://ip-api.com/json/', {
            signal: AbortSignal.timeout(3000)
          });
          const data = await response.json();
          
          if (data.countryCode === 'IN') {
            setCurrency('INR');
          } else {
            setCurrency('USD');
          }
        } catch {
          // Default to USD if all APIs fail
          setCurrency('USD');
        }
      } finally {
        setIsLoading(false);
      }
    };

    detectCountry();
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
