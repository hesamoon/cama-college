// import { Dialog } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  padding?: string;
  children: ReactNode;
}

export default function Modal({
  open,
  onClose,
  children,
  padding = "py-4 px-6",
}: ModalProps) {
  const handleClose = () => {
    onClose();
  };

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

  // if (!open) return null;
  return (
    <AnimatePresence>
      {open ? (
        <div
          className="fixed inset-0 bg-black/30 z-999 flex items-center justify-center"
          id="wrapper"
          onClick={handleClose}
        >
          <motion.div
            className={`overflow-auto scroll-smooth bg-white rounded-lg ${padding} min-w-[541px]`}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
