import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  type FC,
  type ReactNode,
  type SVGProps,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/shadcn/ui/dialog";
import { Button } from "@/components/shadcn/ui/button";

interface ErrorModalContextType {
  showError: (title: string, message: string) => void;
  hideError: () => void;
}

const ErrorModalContext = createContext<ErrorModalContextType | undefined>(
  undefined
);

export const ErrorModalProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const showError = (title: string, message: string) => {
    setErrorTitle(title);
    setErrorMessage(message);
    setIsOpen(true);
  };

  const hideError = () => {
    setIsOpen(false);
  };

  const contextValue = useMemo(
    () => ({ showError, hideError }),
    [showError, hideError]
  );

  return (
    <ErrorModalContext.Provider value={contextValue}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] flex flex-col items-center">
          <DialogHeader>
            <DialogTitle className="flex items-center text-destructive text-2xl text-cosco-700 font-bold">
              {errorTitle}
            </DialogTitle>
          </DialogHeader>
          <CircleAlertIcon className="h-16 w-16 text-red-500" />

          <DialogDescription className="text-muted-foreground text-cosco-700 text-lg text-center">
            {errorMessage}
          </DialogDescription>
          <DialogFooter>
            <Button
              onClick={hideError}
              className="w-full bg-red-500 text-white hover:bg-red-600"
            >
              Cerrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ErrorModalContext.Provider>
  );
};

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

export const useErrorModal = () => {
  const context = useContext(ErrorModalContext);
  if (context === undefined) {
    throw new Error("useErrorModal must be used within an ErrorModalProvider");
  }
  return context;
};
