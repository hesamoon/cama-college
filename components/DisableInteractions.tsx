// app/components/DisableInteractions.tsx
'use client';

import { useEffect } from 'react';

export default function DisableInteractions() {
  useEffect(() => {
    const disableRightClick = (e: MouseEvent) => e.preventDefault();
    const disableCopy = (e: ClipboardEvent) => e.preventDefault();
    const disableSelect = (e: Event) => e.preventDefault();

    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('copy', disableCopy);
    document.addEventListener('selectstart', disableSelect);

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('copy', disableCopy);
      document.removeEventListener('selectstart', disableSelect);
    };
  }, []);

  return null; // No UI needed
}
