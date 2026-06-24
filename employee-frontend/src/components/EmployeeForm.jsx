import { useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { toast } from "react-toastify";


function EmployeeForm({ onSubmit, initialData, onCancel }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        email_id: "",
        mobile: "",
        role: ""
    })

    useEffect(() => {
        if (initialData) {
            setFormData({
                firstName: initialData.firstName || "",
                lastName: initialData.lastName || "",
                dob: initialData.dob || "",
                email_id: initialData.email_id || "",
                mobile: initialData.mobile || "",
                role: initialData.role || ""
            })
        }
    }, [initialData]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    };

    const validateForm = () => {
        const nameRegex = /[0-9\W_]+$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const mobileRegex = /^\+\d{12,16}$/;
        const roleRegex = /^[A-Za-z0-9]{3,20}$/;
        const dobRegex = /^\d{4}-\d{2}-\d{2}$/;

        if (nameRegex.test(formData.firstName) || !formData.firstName.trim()) {
            toast.error("First Name must contain only letters and be 3-30 characters long");
            return false;
        }

        if (nameRegex.test(formData.lastName) || !formData.lastName.trim()) {
            toast.error("Last Name must contain only letters and be 3-30 characters long");
            return false;
        }

        if (!dobRegex.test(formData.dob) || (new Date(formData.dob) >= new Date())) {
            toast.error("Please enter a valid Date of Birth");
            return false;
        }

        if (!emailRegex.test(formData.email_id)) {
            toast.error("Please enter a valid Email Address");
            return false;
        }

        if (!mobileRegex.test(formData.mobile)) {
            toast.error("Mobile Number must contain exactly 10 digits");
            return false;
        }

        if (!roleRegex.test(formData.role)) {
            toast.error("Role must be 3-20 characters and contain only letters and numbers");
            return false;
        }

        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        if (validateForm() !== false) {
            onSubmit(formData);
        }
    };

    return (
        <div className="container border rounded p-3">
            <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                    <FormLabel>First Name</FormLabel>
                    <FormControl type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter Your First Name" />
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter Your Last Name" />
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Date Of Birth</FormLabel>
                    <FormControl type="date" name="dob" value={formData.dob} onChange={handleChange} />
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Email</FormLabel>
                    <FormControl type="email" name="email_id" value={formData.email_id} onChange={handleChange} placeholder="Enter Your Email" />
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Role</FormLabel>
                    <FormControl type="text" name="role" value={formData.role} onChange={handleChange} />
                </FormGroup>
                <Button type="submit" variant="primary">Save</Button>
                <Button type="button" variant="secondary" className="mx-2" onClick={onCancel}>Cancel</Button>
            </Form>
        </div>
    );
};

export default EmployeeForm;