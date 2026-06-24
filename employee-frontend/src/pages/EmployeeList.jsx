import { useEffect, useState } from "react";
import { deleteEmployee, getEmployees } from "../api/employeeApi";
import EmployeeTable from "../components/EmployeeTable";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";


function EmployeeList() {
    const navigate = useNavigate()
    const [employees, setEmployees] = useState([]);

    useEffect(() => { fetchEmployees(); }, []);

    const fetchEmployees = async () => {
        try {
            const response = await getEmployees();
            setEmployees(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        const confirmed = window.confirm("Are you sure to delete the Employee ?");
        console.log(confirmed);
        if (!confirmed) { return }
        try {
            await deleteEmployee(id);
            toast.success("Successfully Deleted");
            fetchEmployees();
        } catch (error) {
            toast.error("Error Deleting Employee");
        }
    };

    const handleEdit = (id) => {
        if (id === null) {
            return navigate("/create");
        }
        return (navigate(`/edit/${id}`));
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Employees</h2>
            <EmployeeTable employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default EmployeeList;