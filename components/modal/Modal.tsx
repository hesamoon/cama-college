import { Dialog } from "@mui/material";
import { ReactNode, useEffect } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Clean up when modal unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{ paper: { className: "no-scrollbar" } }}
    >
      <div
        className="bg-white rounded-lg py-4 px-6 min-w-[541px]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </Dialog>
  );
}
