import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((store) => store?.auth?.isLoggedIn);
  const role = useSelector((store) => store?.auth?.role);

  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  }

  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "0";
  }

  function onLogout(e) {
    e.preventDefault();

    // todo
    navigate("/");
  }

  return (
    <div className="min-h-[90vh] absolute">
      <div className="drawer absolute left-0 z-50 w-full h-full">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer">
            <FiMenu
              onClick={changeWidth}
              size={40}
              className="font-bold text-white m-5 cursor-pointer p-1 rounded hover:bg-gray-600/30"
            />
          </label>
        </div>
        <div className="drawer-side w-0">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 h-full sm:w-80 bg-base-200 text-base-content relative font-semibold text-xs sm:text-base">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={25} />
              </button>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            {
                isLoggedIn && role === "ADMIN" && (
                    <li>
                        <Link to="/admin/dashboard">Admin Dashboard</Link>
                    </li>
                )
            }
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            {
                !isLoggedIn ? (
                    <li className="absolute bottom-4 w-[90%]">
                        <div className="w-full flex items-center justify-center">
                            <button className="btn-primary px-5 py-1 font-semibold rounded-md w-full">
                                <Link to='/login'>Login</Link>
                            </button>
                            <button className="btn-secondary px-5 py-1 font-semibold rounded-md w-full">
                                <Link to='/signup'>Sign Up</Link>
                            </button>
                        </div>
                    </li>
                ) : (
                    <li className="absolute bottom-4 w-[90%]">
                        <div className="w-full flex items-center justify-center">
                            <button className="btn-primary px-5 py-1 font-semibold rounded-md w-full">
                                <Link to='/user/profile'>Profile</Link>
                            </button>
                            <button className="btn-secondary px-5 py-1 font-semibold rounded-md w-full">
                                <Link onClick={onLogout}>Logout</Link>
                            </button>
                        </div>
                    </li>
                )
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
