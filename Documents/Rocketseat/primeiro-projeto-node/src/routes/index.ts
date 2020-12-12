import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
// utilizar o use com esses parâmetros para que toda vez que eu for usar os get, post, update
// só precise colocar um '/' para indicar o caminho da url

export default routes;
