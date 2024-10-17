import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { pathDefault } from "../common/path";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ContentDetailRoom from "../components/ContentDetailRoom/ContentDetailRoom";
import LoadingSpin from "../components/LoadingInPage/LoadingSpin";
const UserTemPlate = React.lazy(() =>
  import("../templates/UserTemplate/UserTemPlate.jsx")
);
const Content = React.lazy(() => import("../components/Content/Content.jsx"));
const DetailRoom = React.lazy(() =>
  import("../components/DetailRoom/DetailRoom.jsx")
);

const UseRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: pathDefault.homePage,
      element: (
        <Suspense fallback={<LoadingSpin />}>
          {" "}
          <UserTemPlate />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingSpin />}>
              {" "}
              <Content />
            </Suspense>
          ),
        },
        {
          path: pathDefault.detail,
          element: (
            <Suspense fallback={<LoadingSpin />}>
              <DetailRoom />
            </Suspense>
          ),
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
