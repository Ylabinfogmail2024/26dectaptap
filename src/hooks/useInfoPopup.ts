import { useState } from 'react';

export function useInfoPopup() {
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);

  const openInfoPopup = () => setIsInfoPopupOpen(true);
  const closeInfoPopup = () => setIsInfoPopupOpen(false);

  return {
    isInfoPopupOpen,
    openInfoPopup,
    closeInfoPopup
  };
}