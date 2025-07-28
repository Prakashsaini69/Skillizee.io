import Modal from "./modal";

export default function ModalDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Large Modal</h3>
        <Modal modalSize="lg" />
      </div>
      
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Small Modal</h3>
        <Modal modalSize="sm" />
      </div>
    </div>
  );
} 