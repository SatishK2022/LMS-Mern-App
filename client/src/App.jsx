import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

import store from "./redux/store";

function AppLayout() {
  useEffect(() => {
    toast.success("Hello");
    toast.error("Error");
  }, []);

  console.log("first");

  return (
    <>
      <Provider store={store}>
        <Toaster />
        {/* <Header /> */}
        <Outlet />
        {/* <Footer /> */}
      </Provider>
    </>
  );
}

export default AppLayout;
