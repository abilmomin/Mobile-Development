import { credentials } from '../data/credentials';

export interface User {
  username: string;
  password: string;
}

export interface AuthResult {
  success: boolean;
  message: string;
}

export const validateUsername = (username: string): boolean => {
  return username.length >= 5;
};

export const validatePassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export const authenticateUser = (username: string, password: string): AuthResult => {
  const user: User | undefined = credentials.users.find(
    (u: User) => u.username === username && u.password === password
  );

  if (user) {
    return {
      success: true,
      message: 'Authentication successful'
    };
  }

  // Check if username exists but password is wrong
  const userExists: User | undefined = credentials.users.find(
    (u: User) => u.username === username
  );
  
  if (userExists) {
    return {
      success: false,
      message: 'The password you entered is incorrect.'
    };
  }

  return {
    success: false,
    message: 'Username not found in our records.'
  };
};