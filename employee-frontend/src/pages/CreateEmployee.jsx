import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../api/employeeApi";
import { toast } from "react-toastify";
import EmployeeForm from "../components/EmployeeForm";

function CreateEmployee() {
    const navigate = useNavigate();
    const handleSubmit = async (formData) => {
        try {
            await createEmployee(formData);
            toast.success("Successfully Created");
            navigate('/')
        } catch (error) {
            toast.error("Error in Creating Employee");
        }
    };
    return (
        <div className="container mt-4">
            <h3 className="text-center">Add Employee</h3>
            <EmployeeForm onSubmit={handleSubmit} onCancel={() => { navigate('/') }} />
        </div>
    )
};

export default CreateEmployee;