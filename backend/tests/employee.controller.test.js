

import { readAllEmployee, readEmployeeById, createEmployee, editEmployee, removeEmployee } from "../controller/employee.controller.js";

import * as employeeService from "../../services/employee.services.js";


vi.mock("../services/employee.services.js", () => ({
    getAllEmployees: vi.fn(),
    getEmployeeById: vi.fn(),
    addEmployee: vi.fn(),
    updateEmployee: vi.fn(),
    deleteEmployee: vi.fn()
}));

const mockResponse = () => {
    return {
        status: vi.fn().mockReturnThis(),
        json: vi.fn()
    };
};

describe("Employee Controller Unit Test", () => {
    beforeEach(() => { vi.clearAllMocks(); });

    it("should get all employees", async () => {
        employeeService.getAllEmployees.mockResolvedValue([
            {
                emp_id: 1,
                firstName: "John",
                role: "employee"
            },
            {
                emp_id: 2,
                firstName: "Admin",
                role: "admin"
            }
        ]);
        const req = {};
        const res = mockResponse();
        const next = vi.fn();
        await readAllEmployee(req, res, next);
        expect(employeeService.getAllEmployees).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([
            {
                emp_id: 1,
                firstName: "John",
                role: "employee"
            },
            {
                emp_id: 2,
                firstName: "Admin",
                role: "admin"
            }
        ]);
    });

    it("should get employee by id", async () => {
        const employee = {
            dataValues: {
                emp_id: 1,
                firstName: "John"
            }
        };
        employeeService.getEmployeeById.mockResolvedValue(employee);
        const req = { params: { id: "1" } };
        const res = mockResponse();
        const next = vi.fn();
        await readEmployeeById(req, res, next);
        expect(employeeService.getEmployeeById).toHaveBeenCalledWith(1);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalled(employee);
    });

    it("should reject invalid employee id", async () => {
        const req = { params: { id: "abc" } };
        const res = mockResponse();
        const next = vi.fn();
        await readEmployeeById(req, res, next);
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0][0].statusCode).toBe(400);
    });

    it("should create employee", async () => {
        employeeService.addEmployee
            .mockResolvedValue({
                emp_id: 1,
                firstName: "John"
            });
        const req = {
            body: {
                firstName: "John",
                lastName: "Doe",
                email_id: "john@test.com",
                mobile: "+911234567890"
            }
        };
        const res = mockResponse();
        const next = vi.fn();
        await createEmployee(req, res, next);
        expect(employeeService.addEmployee).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(201);
    });

    it("should update employee", async () => {
        employeeService.updateEmployee
            .mockResolvedValue({
                emp_id: 1,
                firstName: "Updated"
            });
        const req = {
            params: {
                id: "1"
            },
            body: {
                firstName: "Updated"
            }
        };
        const res = mockResponse();
        const next = vi.fn();
        await editEmployee(req, res, next);
        expect(employeeService.updateEmployee).toHaveBeenCalledWith(1, req.body);
        expect(res.status).toHaveBeenCalledWith(201);
    });
    it("should delete employee", async () => {
        employeeService.deleteEmployee.mockResolvedValue();
        const req = { params: { id: "1" } };
        const res = mockResponse();
        const next = vi.fn();
        await removeEmployee(req, res, next);
        expect(employeeService.deleteEmployee).toHaveBeenCalledWith(1);
        expect(res.status).toHaveBeenCalledWith(200);
    });
});