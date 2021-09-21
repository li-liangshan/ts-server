/**
 * Created by liliangshan on 2021/9/21
 */
import express, {Request, Response, Express, NextFunction} from 'express';
import {env} from 'process';
import Debug, {Debugger} from 'debug';
import {json} from "body-parser";
import cors from "cors"
import TodoRoute from './route/todo';

const debug: Debugger = Debug("node-server:");
const app: Express = express();

app.use(cors())
app.use(json());
app.use('/todo', TodoRoute);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({message: err.message});
});

const port: number = env.port ? Number(env.port) : 3000;
app.listen(port, () => {
  debug(`web server running at port:${port}`);
});
