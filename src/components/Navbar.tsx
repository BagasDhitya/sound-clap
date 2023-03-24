import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-orange-clap h-10 w-screen sticky">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl text-white"
          href="/home"
        >
          Sound Clap
        </a>
      </div>
      {/* <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <a href="/favorites">Favorites</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li tabIndex={0}>
            <a className="justify-between">Profile</a>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
