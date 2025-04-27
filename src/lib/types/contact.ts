
export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export interface ContactState {
  messages: ContactMessage[];
  isLoading: boolean;
  error: string | null;
}
