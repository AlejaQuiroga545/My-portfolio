-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form)
CREATE POLICY "Anyone can submit contact form" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent reading submissions (admin only)
CREATE POLICY "Only admins can view submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (false);

-- Add index for better query performance
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);