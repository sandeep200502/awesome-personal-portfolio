
import { ContactMessage } from "./types/contact";

// Simulated database for contact messages
const CONTACT_STORAGE_KEY = 'portfolio_contact_messages';

export const saveContactMessage = (message: Omit<ContactMessage, 'id' | 'createdAt'>): ContactMessage => {
  const savedMessages = getContactMessages();

  const newMessage = {
    id: Date.now().toString(),
    name: message.name,
    email: message.email,
    message: message.message,
    createdAt: new Date().toISOString()
  };

  const updatedMessages = [...savedMessages, newMessage];
  localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(updatedMessages));
  
  return newMessage;
};

export const getContactMessages = (): ContactMessage[] => {
  const savedMessages = localStorage.getItem(CONTACT_STORAGE_KEY);
  return savedMessages ? JSON.parse(savedMessages) : [];
};

export const deleteContactMessage = (id: string): boolean => {
  const savedMessages = getContactMessages();
  const updatedMessages = savedMessages.filter(msg => msg.id !== id);
  
  if (updatedMessages.length !== savedMessages.length) {
    localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(updatedMessages));
    return true;
  }
  
  return false;
};
