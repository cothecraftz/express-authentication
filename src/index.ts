import express, { Application, NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";

import CONFIG from "./config/environment";
import logger from "./utils/logging";
import { routes } from "./routes";

// init
const app: Application = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.cookie("username", "JohnDoe", { maxAge: 900000, httpOnly: true });
  next();
});
// routing
routes(app);

const port: number = CONFIG.port ?? 8000;
app.listen(port, () => logger.info(`server is running in http://localhost:${port}`));
