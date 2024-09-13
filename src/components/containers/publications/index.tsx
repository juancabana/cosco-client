import Pagination from "@/components/ui/paginations";
import { ProductCard } from "@/components/ui/product-card";
import useGetAllCropsQuery from "@/hooks/querys/useGetAllCropsQuery";
import React, { type FC } from "react";

const Publications: FC = () => {
  const { data, previousPage, nextPage } = useGetAllCropsQuery();

  return (
    <div className="max-w-screen-xl w-full mx-auto px-4 py-8">
      {data && (
        <div className="grid items-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {data.posts.map((crop) => (
            <ProductCard key={crop._id} {...crop} />
          ))}
        </div>
      )}
      {data && data.posts.length > 0 && (
        <Pagination
          currentPage={data?.currentPage ?? 1}
          totalPages={data?.totalPages ?? 1}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      )}
    </div>
  );
};

export default Publications;
