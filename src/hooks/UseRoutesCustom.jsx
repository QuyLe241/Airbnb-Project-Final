import React from "react";
import { useRoutes } from "react-router-dom";
import { pathDefault } from "../common/path";
import UserTemPlate from "../templates/UserTemplate/UserTemPlate";
import Content from "../components/Content/Content";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";

const UseRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: pathDefault.homePage,
      element: <UserTemPlate />,
      children: [
        {
          index: true,
          element: <Content />,
        },
      ],
    },
    {
      path: pathDefault.registerPage,
      element: <RegisterPage />,
    },
    {
      path: pathDefault.loginPage,
      element: <LoginPage />,
    },
  ]);
  return routes;
};

export default UseRoutesCustom;
