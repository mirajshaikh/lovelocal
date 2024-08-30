import { create } from "zustand";

export const dataStore = create((set) => ({
  userDetails: {},
  setUserDetail: (data) => set(() => ({ userDetails: data })),
}));
