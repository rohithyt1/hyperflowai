
-- Create appointments table for in-chat bookings
CREATE TABLE public.appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'new'
);

-- Enable RLS
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Anyone can submit an appointment (public form)
CREATE POLICY "Anyone can submit appointment"
ON public.appointments
FOR INSERT
WITH CHECK (true);

-- Only authenticated users can view appointments
CREATE POLICY "Authenticated users can view appointments"
ON public.appointments
FOR SELECT
USING (auth.role() = 'authenticated');
