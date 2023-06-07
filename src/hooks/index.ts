import { useState } from 'react';

export const useIsOpen = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(true);

  return { isOpen, onOpen, onClose };
};