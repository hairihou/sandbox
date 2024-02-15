import { type FC } from 'react';
import { useStore } from '../../../store/zustand';

export const Zustand: FC = () => {
  const bears = useStore((state) => state.bears);
  const increaseBear = useStore((state) => state.increaseBear);

  return (
    <div>
      <div>🐻: {bears}</div>
      <button onClick={() => increaseBear(1)}>+ 1</button>
    </div>
  );
};
