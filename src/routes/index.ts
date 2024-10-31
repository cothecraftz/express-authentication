import { Application, Router } from "express";
import { userRouter } from "./user-route";
import { publicRouter } from "./public-route";

const _routes: Array<[string, Router]> = [
  ["/", publicRouter],
  ["/users", userRouter],
];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};
