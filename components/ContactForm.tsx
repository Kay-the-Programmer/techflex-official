
import React, { useState } from 'react';
import Button from './ui/Button.tsx'; // Updated path
import { CheckCircleIcon } from '../constants.tsx'; 

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    
    // Basic inline validation (to be replaced by react-hook-form & yup)
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setError("Please fill in all required fields marked with *.");
        return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        setError("Please enter a valid email address.");
        return;
    }

    setIsLoading(true);
    // Placeholder for Formspree submission
    // Replace with actual fetch to process.env.REACT_APP_FORMSPREE_ENDPOINT
    await new Promise(resolve => setTimeout(resolve, 1500)); 
    setIsLoading(false);

    console.log('Form data submitted (placeholder):', formData); 
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-techflex-orange/10 dark:bg-techflex-orange/20 p-4 sm:p-6 md:p-8 rounded-xl text-center">
        <CheckCircleIcon className="w-12 h-12 sm:w-16 sm:h-16 text-techflex-orange mx-auto mb-3 sm:mb-4" />
        <h3 className="text-xl lg:text-2xl font-semibold text-techflex-blue dark:text-white mb-2 font-display">Message Sent!</h3>
        <p className="text-base text-brand-gray-700 dark:text-brand-gray-300 mb-4 sm:mb-6 leading-relaxed">
          Thank you, {formData.name}. We've received your message and will get back to you shortly.
        </p>
        <Button onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
          }} 
          variant="outline"
          size="md" 
          fullWidthOnMobile
        >
            Send Another Message
        </Button>
      </div>
    );
  }

  const inputBaseClasses = "block w-full px-3 sm:px-4 py-2.5 border text-sm sm:text-base rounded-lg shadow-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 dark:focus:ring-offset-brand-gray-800";
  const inputNormalClasses = "bg-brand-gray-50 dark:bg-brand-gray-700 border-brand-gray-300 dark:border-brand-gray-600 text-brand-gray-800 dark:text-brand-gray-200 placeholder-brand-gray-400 dark:placeholder-brand-gray-500 focus:ring-techflex-orange focus:border-techflex-orange";
  const inputErrorClasses = "bg-red-50 dark:bg-red-900/20 border-red-500 dark:border-red-600 text-red-700 dark:text-red-400 placeholder-red-400 dark:placeholder-red-500 focus:ring-red-500 focus:border-red-500";


  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      {error && (
        <p className="text-red-600 dark:text-red-400 text-sm bg-red-100 dark:bg-red-900/30 p-2.5 sm:p-3 rounded-lg border border-red-300 dark:border-red-600">
          {error}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-gray-700 dark:text-brand-gray-300 mb-1 sm:mb-1.5">Full Name *</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className={`${inputBaseClasses} ${error && !formData.name ? inputErrorClasses : inputNormalClasses}`} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-gray-700 dark:text-brand-gray-300 mb-1 sm:mb-1.5">Email Address *</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className={`${inputBaseClasses} ${error && (!formData.email || (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email))) ? inputErrorClasses : inputNormalClasses}`} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-gray-700 dark:text-brand-gray-300 mb-1 sm:mb-1.5">Phone Number (Optional)</label>
          <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={`${inputBaseClasses} ${inputNormalClasses}`} />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-brand-gray-700 dark:text-brand-gray-300 mb-1 sm:mb-1.5">Subject *</label>
          <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className={`${inputBaseClasses} ${error && !formData.subject ? inputErrorClasses : inputNormalClasses}`} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-gray-700 dark:text-brand-gray-300 mb-1 sm:mb-1.5">Message *</label>
        <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows={4} required className={`${inputBaseClasses} ${error && !formData.message ? inputErrorClasses : inputNormalClasses}`} />
      </div>
      <div>
        <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto" disabled={isLoading} fullWidthOnMobile>
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </div>
          ) : (
            'Send Message'
          )}
        </Button>
      </div>
      <p className="text-xs text-brand-gray-500 dark:text-brand-gray-400">Fields marked with * are required.</p>
    </form>
  );
};

export default ContactForm;
