import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getIsLoggedIn } from "redux/selectors/selectors";

interface PublicRouteProps {
  restricted?: boolean;
}

export function PublicRoute(props: PublicRouteProps) {
  const { restricted = false } = props;
  const isLoggedIn = useSelector(getIsLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;
  console.log(shouldRedirect);

  return !shouldRedirect ? <Outlet /> : <Navigate to="/profile" replace />;
}
