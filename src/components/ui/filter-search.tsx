import React, { useState, useEffect, type FC } from "react";
import { Button } from "@/components/shadcn/ui/button";
import { Input } from "@/components/shadcn/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn/ui/sheet";
import { Badge } from "@/components/shadcn/ui/badge";
import { Filter, X } from "lucide-react";
import locationsData from "@/assets/locations.json";
import type { Filters } from "../containers/publications";
import categories from "@/assets/categories.json";

export interface Location {
  id: number;
  departamento: string;
  ciudades: string[];
}

const locations: Location[] = locationsData as Location[];

interface FilterAndSearchProps {
  filters: Filters;
  setFilters: (filters: Filters | ((prevFilters: Filters) => Filters)) => void;
  title: string;
  setTitle: (title: string) => void;
}

const FilterAndSearch: FC<FilterAndSearchProps> = ({
  filters,
  setFilters,
  setTitle,
  title,
}) => {
  const [cities, setCities] = useState<string[]>([]);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    if (filters.department) {
      setCities(
        locations.find((loc) => loc.departamento === filters.department)
          ?.ciudades || []
      );
    } else {
      setCities([]);
    }
    setFilters((prev) => ({ ...prev, city: "" }));
  }, [filters.department]);

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
  };

  const handleRemoveFilter = (key: string) => {
    const newFilters = { ...filters, [key]: "" };
    setFilters(newFilters);
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtrar
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filtros</SheetTitle>
              <SheetDescription>
                Refina tu búsqueda de cosechas usando los siguientes filtros.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Select
                value={filters.department}
                onValueChange={(value) =>
                  handleFilterChange("department", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un departamento" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((dept) => (
                    <SelectItem key={dept.id} value={dept.departamento}>
                      {dept.departamento}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={filters.city}
                onValueChange={(value) => handleFilterChange("city", value)}
                disabled={!filters.department}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una ciudad" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={filters.category}
                onValueChange={(value) => handleFilterChange("category", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un tipo de producto" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((type) => (
                    <SelectItem key={type.category} value={type.category}>
                      {type.category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex-1 flex space-x-2">
          <Input
            type="text"
            placeholder="Busca las publicaciones por nombre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-grow"
          />
        </div>
      </div>
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {Object.entries(filters).map(
            ([key, value]) =>
              value &&
              key !== "title" && (
                <Badge key={key} variant="secondary" className="px-3 py-1">
                  {value}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-2 h-auto p-0"
                    onClick={() => handleRemoveFilter(key)}
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remover filtro</span>
                  </Button>
                </Badge>
              )
          )}
        </div>
      )}
    </div>
  );
};

export { FilterAndSearch };
