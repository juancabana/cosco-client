import useGetUserQuery from "@/hooks/querys/useGetUserQuery";
import { useAuth } from "@/providers/auth";
import React, { useEffect, type FC } from "react";

const Publications: FC = () => {
  const { userId, setUser } = useAuth();
  const { data, isSuccess } = useGetUserQuery(userId);

  useEffect(() => {
    if (isSuccess) {
      setUser(data);
    }
  }, [isSuccess]);

  return (
    <div className="h-[200vh] w-full">
      <h1>publicaciones</h1>
    </div>
  );
};

export default Publications;
