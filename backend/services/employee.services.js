import { EmployeeModel } from "../model/employee.model.js";


export const getAllEmployees = async () => {
    return await EmployeeModel.findAll();
};

export const getEmployeeById = async (empl_id) => {
    const employee = await EmployeeModel.findByPk(empl_id);
    if (!employee) {
        const error = new Error("No Employee Found");
        error.statusCode = 404;
        throw error;
    }
    return employee;
};

export const addEmployee = async (employeeData) => {
    return await EmployeeModel.create(employeeData);
};

export const updateEmployee = async (empl_id, employeeData) => {
    const employee = await getEmployeeById(empl_id);
    await employee.update(employeeData);
    return employee;
};

export const deleteEmployee = async (empl_id) => {
    const employee = await getEmployeeById(empl_id);
    await employee.destroy();
};