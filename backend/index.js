import express from 'express';
import { commonErrorHandler } from './middleware/errorHandler.js';
import { employeeRouter } from './routes/employee.routes.js';
import cors from 'cors';


export const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', employeeRouter)
app.use(commonErrorHandler);