import express from "express";
import { createEmployee, editEmployee, readAllEmployee, readEmployeeById, removeEmployee } from "../controller/employee.controller.js";
import { validateEmployee } from "../middleware/employee.Validate.js";

export const employeeRouter = express.Router();

employeeRouter.get('/employees', readAllEmployee);
employeeRouter.get('/employee/:id', readEmployeeById);
employeeRouter.post('/employee/register', validateEmployee, createEmployee);
employeeRouter.put('/employee/edit/:id', validateEmployee, editEmployee);
employeeRouter.delete('/employee/remove/:id', removeEmployee);
