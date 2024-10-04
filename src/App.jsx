import React, { useState, createContext } from "react";
import UseRoutesCustom from "./hooks/UseRoutesCustom";
import { toast, ToastContainer } from "react-toastify";

export const NotificationContext = React.createContext();

function App() {
  //  tostify
  const handleNotification = (content, type) => {
    toast[type](content, {
      position: "top-right",
      autoClose: 2000,
      pauseOnHover: true,
      hideProgressBar: false,
    });
  };

  const routes = UseRoutesCustom();
  return (
    <NotificationContext.Provider value={{ handleNotification }}>
      {routes}
      <ToastContainer />
    </NotificationContext.Provider>
  );
}

export default App;
