import { BiSearch } from "react-icons/bi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Outlet, Link, useResolvedPath, useMatch } from "react-router-dom";
import "./SearchView.css";

const SearchView = (props) => {
  const ActivePath = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname });

    return (
      <a className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </a>
    );
  };
  return (
    <>
      <div className="row">
        <div className="col-8">
          <form action="">
            <div class="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search gì cũng được"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <BiSearch className="text-20 d-flex align-items-center   " />
              </button>
            </div>
          </form>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-around">
            <ActivePath className="btn btn-outline-secondary p-2" to="Grid">
              <BsFillGrid3X3GapFill className="d-flex align-items-center" />
            </ActivePath>
            <ActivePath className="btn btn-outline-secondary p-2" to="List">
              <AiOutlineUnorderedList className="d-flex align-items-center" />
            </ActivePath>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default SearchView;
