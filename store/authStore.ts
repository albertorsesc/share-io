import axios from 'axios';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { BASE_URL } from '../utils';

const authStore = (set: any) => ({
  userProfile: null,
  users: [],

  addUser: (user: any) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null }),

  getUsers: async () => {
    const response = await axios.get(`${BASE_URL}/api/users`);

    set({ users: response.data })
  }
});

const useAuthStore = create(
  persist(authStore, {
    name: 'auth'
  })
);

export default useAuthStore;