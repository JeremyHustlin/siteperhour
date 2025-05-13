
import emailjs from 'emailjs-com';

interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Initialize EmailJS with public key from saved settings
export const initEmailService = () => {
  const savedConfig = localStorage.getItem('emailServiceConfig');
  if (savedConfig) {
    const { service, config } = JSON.parse(savedConfig);
    if (service === 'emailjs' && config.publicKey) {
      emailjs.init(config.publicKey);
      return true;
    }
  }
  return false;
};

// Send email using EmailJS
export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const savedConfig = localStorage.getItem('emailServiceConfig');
    if (!savedConfig) {
      throw new Error('Email service not configured');
    }

    const { service, config } = JSON.parse(savedConfig);
    
    if (service === 'emailjs') {
      const { serviceId, templateId } = config as EmailConfig;
      
      if (!serviceId || !templateId) {
        throw new Error('EmailJS not fully configured');
      }

      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject || 'Contact Form Submission',
        message: data.message
      };

      await emailjs.send(serviceId, templateId, templateParams);
      return true;
    } 
    else if (service === 'smtp') {
      // In a real implementation, you would make an API call to your backend
      // which would handle the SMTP connection
      console.log('SMTP method would require a backend API');
      return false;
    }
    
    return false;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};

// Check if email service is configured
export const isEmailServiceConfigured = (): boolean => {
  const savedConfig = localStorage.getItem('emailServiceConfig');
  if (!savedConfig) return false;
  
  const { service, config } = JSON.parse(savedConfig);
  
  if (service === 'emailjs') {
    return !!(config.serviceId && config.templateId && config.publicKey);
  } else if (service === 'smtp') {
    return !!(config.host && config.port && config.username && config.password);
  }
  
  return false;
};
