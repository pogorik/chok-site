"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import CallbackModal from "./CallbackModal";

type CallbackModalContextValue = {
  open: (reason?: string) => void;
  close: () => void;
};

const CallbackModalContext = createContext<CallbackModalContextValue | null>(
  null
);

export function CallbackModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [reason, setReason] = useState<string | undefined>(undefined);

  const open = (r?: string) => {
    setReason(r);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);

  return (
    <CallbackModalContext.Provider value={{ open, close }}>
      {children}
      <CallbackModal isOpen={isOpen} onClose={close} reason={reason} />
    </CallbackModalContext.Provider>
  );
}

export function useCallbackModal() {
  const ctx = useContext(CallbackModalContext);
  if (!ctx) {
    throw new Error(
      "useCallbackModal must be used within a CallbackModalProvider"
    );
  }
  return ctx;
}
