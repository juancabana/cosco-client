import React, {
  type FC,
  type SVGProps,
  type KeyboardEvent,
  useState,
} from "react";
import { Button } from "@/components/shadcn/ui/button";

interface ErrorModalProps {
  errorMessage: string;
  title: string;
  isOpen: boolean;
  closeModal: () => void;
}

const ErrorModalComponent: FC<ErrorModalProps> = ({
  title,
  errorMessage,
  isOpen,
  closeModal,
}) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <button
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300"
      onClick={closeModal}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="w-full bg-white max-w-md rounded-lg bg-background p-6 shadow-lg md:p-8">
        <div className="space-y-4">
          <div className="space-y-2 flex flex-col items-center">
            <h3 className="text-2xl text-cosco-primary font-bold">
              {title ?? "¡Ups!"}
            </h3>
            <p className="text-muted-foreground text-cosco-primary">
              {errorMessage ?? "Algo salió mal, por favor inténtalo de nuevo"}
            </p>
            <CircleAlertIcon className="h-8 w-8 text-red-500" />
          </div>
          <Button
            onClick={() => closeModal()}
            className="w-full bg-red-500 text-white hover:bg-cosco-550"
          >
            Cerrar
          </Button>
        </div>
      </div>
    </button>
  );
};

export default ErrorModalComponent;

const CircleAlertIcon = (props: Readonly<SVGProps<SVGSVGElement>>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  );
};

interface ModalProps {
  title: string;
  errorMessage: string;
}

export const useErrorModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const RenderedModal: FC<ModalProps> = ({ errorMessage, title }) => (
    <ErrorModalComponent
      title={title}
      errorMessage={errorMessage}
      isOpen={isOpen}
      closeModal={closeModal}
    />
  );

  return { openModal, closeModal, RenderedModal };
};
