import { ProductCard } from "@/components/ui/product-card";
import useGetAllCropsQuery from "@/hooks/querys/useGetAllCropsQuery";
import React, { type FC } from "react";

const Publications: FC = () => {
  const { data } = useGetAllCropsQuery();

  return (
    <div className="max-w-screen-xl w-full mx-auto px-4 py-8">
      {data && (
        <div className="grid items-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {data.map((crop) => (
            <ProductCard key={crop._id} {...crop} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Publications;
