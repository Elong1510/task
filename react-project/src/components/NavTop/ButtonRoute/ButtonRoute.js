import "./ButtonRoute.css";
import { Link, useResolvedPath, useMatch, Outlet } from "react-router-dom";

const ButtonRoute = (props) => {
  const ActiveLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isVisited = useMatch({ path: resolvedPath.pathname });

    return (
      <li className={isVisited ? "visited" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <ActiveLink className="btn-nav" to="/">
          Home
        </ActiveLink>
        <ActiveLink className="btn-nav" to="/AboutUs">
          About Us
        </ActiveLink>
        <ActiveLink className="btn-nav" to="/Contact">
          Contact
        </ActiveLink>
      </div>

      <Outlet />
    </>
  );
};
export default ButtonRoute;
