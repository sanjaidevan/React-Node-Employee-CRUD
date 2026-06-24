import { Button, Table } from "react-bootstrap";

function EmployeeTable({ employees, onEdit, onDelete }) {
    return (
        <div className="border rounded p-3">
            <Button variant="primary" className="my-2" onClick={() => onEdit(null)}>Add New Employee</Button>
            <Table striped bordered hover>
                <thead className="text-lg-center">
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Role</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {employees.map((employee, index) =>
                    (
                        <tr key={employee.emp_id}>
                            <td>{index + 1}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.role}</td>
                            <td>
                                <Button variant="warning" className="mx-2" size="sm" onClick={() => onEdit(employee.emp_id)}>Edit</Button>
                                <Button variant="danger" size="sm" onClick={() => onDelete(employee.emp_id)}>Delete</Button>
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </Table>
            <p>Total Employees: {employees.length}</p>
        </div>
    );
};

export default EmployeeTable;