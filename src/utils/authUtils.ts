// Simulated function to check if email exists
// In a real application, this would make an API call to your backend
export const checkEmailExists = async (email: string): Promise<boolean> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For demonstration, we'll consider these emails as "already registered"
  const registeredEmails = [
    'test@example.com',
    'user@example.com',
    'admin@example.com'
  ];
  
  return registeredEmails.includes(email.toLowerCase());
}; 