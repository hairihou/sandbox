import { create } from 'zustand';

type State = {
  bears: number;
};

type Action = {
  increaseBear: (by: number) => void;
};

export const useStore = create<State & Action>()((set) => ({
  bears: 0,
  increaseBear: (by): void => set((state) => ({ bears: state.bears + by })),
}));
