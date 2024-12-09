import { Router } from "express";
import testRouter from "./testRouter"

const routes = Router();

routes.use('/test', testRouter);

export default routes;