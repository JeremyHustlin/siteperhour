
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

// EmailJS credentials - pre-configured
const EMAIL_CONFIG = {
  service: 'emailjs',
  config: {
    serviceId: 'service_3yy9xa9',
    templateId: 'template_0gugh5f',
    publicKey: 'pqnAFS_ayDh7oxufo'
  }
};

// Initialize EmailJS with public key
export const initEmailService = () => {
  emailjs.init(EMAIL_CONFIG.config.publicKey);
  return true;
};

// Send email using EmailJS
export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const { serviceId, templateId } = EMAIL_CONFIG.config as EmailConfig;
    
    const templateParams = {
      name: data.name,
      email: data.email,
      subject: data.subject || 'Contact Form Submission',
      message: data.message
    };

    await emailjs.send(serviceId, templateId, templateParams);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};

// Email service is now always configured
export const isEmailServiceConfigured = (): boolean => {
  return true;
};
