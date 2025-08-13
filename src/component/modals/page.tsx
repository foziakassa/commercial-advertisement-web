import { Modal } from "antd";
import Link from "next/link";
import { FaQuestion } from "react-icons/fa";
import FAQ from "../faq/page";

// Define the props interface
interface ModalsProps {
  visibless: boolean;
  showModals: () => void;
  handleOks: () => void; // Define the type of handleOks if used
  handleCancels: () => void;
}

export default function Modals({ visibless, showModals, handleOks, handleCancels }: ModalsProps) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      <button onClick={showModals}>
        <Link href="" rel="noopener noreferrer">
          <FaQuestion className="animate-pulse text-xl text-blue-800 font-bold bg-white border-red-50 h-15 w-15 p-1 drop-shadow-md rounded-full" />
        </Link>
      </button>
      <Modal 
        open={visibless}
        onCancel={handleCancels}
        closable={true}
        footer={null}
      >
        <FAQ />
      </Modal>
    </div>
  );
}