import express, { Application, NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";

import CONFIG from "./config/environment";
import logger from "./utils/logging";
import { routes } from "./routes";
import { errorMiddleware } from "./middleware/error-middleware";

// init
const app: Application = express();

// middleware
app.use(express.json());
app.use(cookieParser());

// routing
routes(app);

// error middleware
app.use(errorMiddleware);

const port: number = CONFIG.port ?? 8000;
app.listen(port, () => logger.info(`server is running in http://localhost:${port}`));
