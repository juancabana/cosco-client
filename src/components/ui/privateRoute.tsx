import React, { type FC } from "react";
import { navigate } from "gatsby";
import { useAuth } from "@/providers/auth";

interface PrivateRouteProps {
  component: FC;
  location: string;
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  location,
  ...rest
}) => {
  const { user, isLogged } = useAuth();

  if (!user && !isLogged) {
    navigate("/publications");
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
