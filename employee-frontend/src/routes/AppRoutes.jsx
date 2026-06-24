import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeList from '../pages/EmployeeList';
import CreateEmployee from '../pages/CreateEmployee';
import EditEmployee from '../pages/EditEmployee';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<EmployeeList/>}></Route>
                <Route path='/create' element={<CreateEmployee/>}></Route>
                <Route path='/edit/:id' element={<EditEmployee/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;