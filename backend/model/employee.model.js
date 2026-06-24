import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const EmployeeModel = sequelize.define("EmployeeTable", {
    emp_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate:
        {
            is: {
                args: /^[A-Za-z]+([ ][A-Za-z]+)*$/,
                msg: "Invalid First Name"
            },
            len: {
                args: [3, 50],
                msg: "First Name must between 3 and 50"
            }
        }
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate:
        {
            is: {
                args: /^[A-Za-z]+([ .][A-Za-z]+)*$/,
                msg: "Invalid Last Name"
            },
            len: {
                args: [1, 50],
                msg: "Last Name must between 1 and 50"
            }
        }
    },
    dob: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    email_id: {
        type: DataTypes.STRING(253),
        allowNull: false,
        unique: true,
        validate: {
            is: {
                args: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                msg: "Invalid Email"
            }
        }
    },
    mobile: {
        type: DataTypes.STRING(16),
        allowNull: false,
        unique: true,
        validate: { is: { args: /^\+\d{12,16}$/, msg: "Invalid Mobile" } }
    },
    role: {
        type: DataTypes.ENUM("employee", "admin"),
        defaultValue: "employee"
    }
}, {
    tableName: "employee_tbl",
    timestamps: false,
});