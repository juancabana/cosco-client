import React, { type FC } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../shadcn/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  previousPage: () => void;
  nextPage: () => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, nextPage, previousPage }) => {
  return (
    <div className="flex items-center justify-center space-x-6 mt-8">
      <Button
        variant="outline"
        size="icon"
        onClick={() => previousPage()}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Página anterior</span>
      </Button>
      <span className="text-sm font-medium">
        Página {currentPage} de {totalPages}
      </span>
      <Button
        variant="outline"
        size="icon"
        onClick={() => nextPage()}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Página siguiente</span>
      </Button>
    </div>
  );
};

export default Pagination;
