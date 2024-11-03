import create from 'zustand';

interface User {
  id: string;
  username: string;
  password: string;
  role: 'admin' | 'user';
}

const USERS: User[] = [
  { id: 'admin', username: 'admin', password: 'admin123', role: 'admin' },
  { id: 'user1', username: 'user1', password: 'user1pass', role: 'user' },
  { id: 'user2', username: 'user2', password: 'user2pass', role: 'user' },
  { id: 'user3', username: 'user3', password: 'user3pass', role: 'user' },
  { id: 'user4', username: 'user4', password: 'user4pass', role: 'user' },
  { id: 'user5', username: 'user5', password: 'user5pass', role: 'user' },
  { id: 'user6', username: 'user6', password: 'user6pass', role: 'user' },
  { id: 'user7', username: 'user7', password: 'user7pass', role: 'user' },
  { id: 'user8', username: 'user8', password: 'user8pass', role: 'user' },
  { id: 'user9', username: 'user9', password: 'user9pass', role: 'user' },
  { id: 'user10', username: 'user10', password: 'user10pass', role: 'user' }
];

interface AuthState {
  isAuthenticated: boolean;
  userRole: 'admin' | 'user' | null;
  userData: {
    id: string;
    username: string;
  } | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  userRole: null,
  userData: null,
  login: async (username, password) => {
    const user = USERS.find(
      (u) => u.username === username && u.password === password
    );
    
    if (user) {
      set({
        isAuthenticated: true,
        userRole: user.role,
        userData: { id: user.id, username: user.username }
      });
    } else {
      throw new Error('Invalid credentials');
    }
  },
  logout: () => {
    set({
      isAuthenticated: false,
      userRole: null,
      userData: null
    });
  }
}));