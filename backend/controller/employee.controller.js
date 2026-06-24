import { addEmployee, deleteEmployee, getAllEmployees, getEmployeeById, updateEmployee } from "../services/employee.services.js";


export const readAllEmployee = async (req, res, next) => {
    try {
        const employees = await getAllEmployees();
        const employeeList = employees.map(({ emp_id, firstName, role }, index) => ({ emp_id, firstName, role }))
        return res.status(200).json(employeeList);
    } catch (error) {
        next(error);
    }
};

export const readEmployeeById = async (req, res, next) => {
    try {
        const empl_id = Number(req.params.id);
        console.log("Employee ID", empl_id);
        if (isNaN(empl_id)) {
            const error = new Error("Error in ID");
            error.statusCode = 400;
            throw error;
        }
        const employee = await getEmployeeById(empl_id);
        let nums = "";
        for (let num = 0; num < 7; num++) {
            nums += Math.floor(Math.random() * 10);
        }
        employee.dataValues.InternalID = nums;
        return res.status(200).json(employee);
    } catch (error) {
        next(error);
    }
};

export const createEmployee = async (req, res, next) => {
    try {
        const addemployee = await addEmployee(req.body);
        res.status(201).json({ message: "Employee Added SuccessFully", employee_data: addemployee });
    } catch (error) {
        next(error);
    }
};

export const editEmployee = async (req, res, next) => {
    try {
        const empl_id = Number(req.params.id);
        console.log("Employee ID", empl_id);
        if (isNaN(empl_id)) {
            const error = new Error("Error in ID");
            error.statusCode = 400;
            throw error;
        }
        const employee = await updateEmployee(empl_id, req.body)
        res.status(201).json(employee);
    } catch (error) {
        next(error);
    }
};

export const removeEmployee = async (req, res, next) => {
    try {
        const empl_id = Number(req.params.id);
        console.log("Employee ID", empl_id);
        if (isNaN(empl_id)) {
            const error = new Error("Error in ID");
            error.statusCode = 400;
            throw error;
        }
        const employee = await deleteEmployee(empl_id);
        res.status(200).json("Deleted Successfully");
    } catch (error) {
        next(error);
    }
};