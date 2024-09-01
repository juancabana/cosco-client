import useGetUserQuery from "@/hooks/querys/useGetUserQuery";
import { useAuth } from "@/providers/auth";
import React, { useEffect, type FC } from "react";

const Publications: FC = () => {
  const { isLogged, userId, setUser } = useAuth();
  const { data } = useGetUserQuery(userId ?? "");

  useEffect(() => {
    if (isLogged && userId && data) setUser(data);
  }, [isLogged, userId, data]);

  return (
    <div className="h-[200vh] w-full">
      <h1>publicaciones</h1>
    </div>
  );
};

export default Publications;
