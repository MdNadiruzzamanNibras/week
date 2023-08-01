import {
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import WeekOne from "./page/WeekOne";
import WeekTwo from "./page/WeekTwo";
import WeekThree from "./page/WeekThree";
import WeekFour from "./page/WeekFour";
import WeekFive from "./page/WeekFive";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element:<WeekOne/>
      },
      {
        path: '/weektwo',
        element:<WeekTwo/>
      },
      {
        path: '/weektwo',
        element:<WeekTwo/>
      },
      {
        path: '/weekthree',
        element:<WeekThree/>
      },
      {
        path: '/weekfour',
        element:<WeekFour/>
      },
      {
        path: '/weekfive',
        element:<WeekFive/>
      },
    ],
  },
]);
