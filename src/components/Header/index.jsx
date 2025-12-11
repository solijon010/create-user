import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-base-100 shadow-sm">
      <div className="container mx-auto navbar">

        <div className="navbar-start">
          <button className="btn btn-ghost">
            <Icon icon="uis:bars" width="24" height="24" />
          </button>
        </div>

        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost text-xl">
            S.I
          </Link>
        </div>

        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <Icon icon="tabler:search" width="24" height="24" />
          </button>

          <button className="btn btn-ghost btn-circle">
            <Icon icon="tdesign:notification" width="24" height="24" />
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
