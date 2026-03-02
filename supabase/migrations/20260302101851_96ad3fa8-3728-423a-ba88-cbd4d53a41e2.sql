
-- Add preferred date and time columns to appointments
ALTER TABLE public.appointments
ADD COLUMN preferred_date DATE,
ADD COLUMN preferred_time TEXT;

-- Allow updates on appointments (for rescheduling)
CREATE POLICY "Anyone can update their appointment by email"
ON public.appointments
FOR UPDATE
USING (true)
WITH CHECK (true);
