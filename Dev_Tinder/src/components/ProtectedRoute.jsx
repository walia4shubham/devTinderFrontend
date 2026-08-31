import React from "react";
import { Navigate, useLocation } from "react-router";
import { useSelector } from "react-redux";

const isAuthenticatedUser = (user) => Boolean(user?.emailId || user?.token || user?.id);

export const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.user);
  const location = useLocation();

  if (!isAuthenticatedUser(user)) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
};

export const PublicRoute = ({ children }) => {
  const user = useSelector((store) => store.user);
  const location = useLocation();

  if (isAuthenticatedUser(user)) {
    return <Navigate to={location.state?.from || "/feed"} replace />;
  }

  return children;
};

export default ProtectedRoute;