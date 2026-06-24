import { DbConnection } from "./config/db.js";
import { app } from "./index.js";
import 'dotenv/config';
import { EmployeeModel } from "./model/employee.model.js";


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server Started in http://localhost:${PORT}`);
    DbConnection();
    EmployeeModel.sync();
});