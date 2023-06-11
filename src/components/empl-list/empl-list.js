import EmployeesListItem from "../empl-list-item/empl-list-item";
import './empl-list.css';

const EmployeesList = ({ data }) => {

   const elements = data.map(item => {
      return (
         <EmployeesListItem name={item.name} salary={item.salary} increase={item.increase} />
      )
   })

   return (
      <ul className="app-list list-group">
         {elements}
      </ul>
   )
}

export default EmployeesList;