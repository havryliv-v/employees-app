import EmployeesListItem from "../empl-list-item/empl-list-item";
import './empl-list.css';

const EmployeesList = () => {
   return (
      <ul className="app-list list-group">
         <EmployeesListItem />
         <EmployeesListItem />
         <EmployeesListItem />
      </ul>
   )
}

export default EmployeesList;