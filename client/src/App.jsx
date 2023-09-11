import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import store from "./redux/store";

function AppLayout() {
  return (
    <>
      <Provider store={store}>
        <Toaster />
        {/* <Header /> */}
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}

export default AppLayout;
