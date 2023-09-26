import { useState } from 'react';

export const useModal = (): [boolean, () => void, () => void] => {
  const [isModal, setIsModal] = useState(false);
  const close = () => setIsModal(false);
  const open = () => setIsModal(true);

  return [isModal, close, open];
};
