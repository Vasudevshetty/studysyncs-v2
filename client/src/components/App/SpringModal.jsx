import { AnimatePresence, motion } from "framer-motion";

const SpringModal = ({ isOpen, setIsOpen, children, variant }) => {
  const getModalStyles = (variant) => {
    switch (variant) {
      case "danger":
        return "bg-red-500 from-red-600 to-red-800";
      case "form":
        return "bg-white text-black";
      case "message":
        return "bg-blue-500 from-blue-600 to-blue-800";
      default:
        return "bg-gradient-to-br from-gray-300 to-gray-600";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className={`p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden ${getModalStyles(
              variant
            )}`}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModal;
