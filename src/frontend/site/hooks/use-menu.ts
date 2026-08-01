"use client";

import { useState } from "react";

export function useMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    toggle: () => setIsOpen((current) => !current),
    close: () => setIsOpen(false),
  };
}
