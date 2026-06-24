import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../api/employeeApi";
import { toast } from "react-toastify";
import EmployeeForm from "../components/EmployeeForm";


function EditEmployee() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState(null);

    useEffect(() => { fetchEmployee(); }, [])

    const fetchEmployee = async () => {
        try {
            const response = await getEmployeeById(id);
            setEmployee(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error in Edit Employee");
        }
    };

    const handleSubmit = async (formData) => {
        try {
            await updateEmployee(id, formData);
            toast.success("Successfully Updated");
            navigate('/')
        } catch (error) {
            toast.error("Error in Update Employee");
        }
    };

    return (
        <div className="container mt-4">
            <h3 className="text-center">Edit Employee</h3>
            <EmployeeForm initialData={employee} onSubmit={handleSubmit} onCancel={() => { navigate('/') }} />
        </div>
    )
};

export default EditEmployee;