import { Navigate, Outlet } from 'react-router-dom';
import Layout from './Layout.tsx';

export default function AuthenticatedRoute({
  children,
}: {
  children?: JSX.Element;
}): JSX.Element {
  // TODO: actually implemented auth check
  const isAuthenticated = false;

  if (isAuthenticated) {
    return (
      <Navigate
        to='/Public/Login'
        replace
      />
    );
  }

  return <Layout>{children ? children : <Outlet />}</Layout>;
}
