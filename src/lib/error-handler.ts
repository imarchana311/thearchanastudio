import { toast } from 'sonner';

export interface AppError extends Error {
  code?: string;
  details?: any;
}

export const handleError = (error: unknown, context?: string) => {
  const detailedError = error as AppError;
  
  // Log detailed error for debugging
  console.group(`Error in ${context || 'App'}`);
  console.error('Message:', detailedError.message);
  if (detailedError.code) console.error('Code:', detailedError.code);
  if (detailedError.details) console.error('Details:', detailedError.details);
  if (detailedError.stack) console.error('Stack:', detailedError.stack);
  console.groupEnd();

  // Display user-friendly message
  let userMessage = 'An unexpected error occurred. Please try again.';
  
  if (detailedError.message.includes('network') || detailedError.message.includes('fetch')) {
    userMessage = 'Network error. Please check your internet connection.';
  } else if (detailedError.code === 'PERMISSION_DENIED') {
    userMessage = 'You do not have permission to perform this action.';
  } else if (detailedError.code === 'VALIDATION_ERROR') {
    userMessage = 'Please check your input and try again.';
  }

  toast.error(userMessage, {
    description: detailedError.message.length < 100 ? detailedError.message : undefined,
  });

  return detailedError;
};

export const wrapAsync = <T, A extends any[]>(
  fn: (...args: A) => Promise<T>,
  context?: string
) => {
  return async (...args: A): Promise<T | null> => {
    try {
      return await fn(...args);
    } catch (error) {
      handleError(error, context);
      return null;
    }
  };
};
