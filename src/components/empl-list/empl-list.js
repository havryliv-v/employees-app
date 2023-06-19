import EmployeesListItem from "../empl-list-item/empl-list-item";
import './empl-list.css';

const EmployeesList = ({ data, onDelete }) => {
   const elements = data.map(item => {
      const { id, ...itemProps } = item
      return (
         <EmployeesListItem key={id}{...itemProps} onDelete={() => { onDelete(id) }} />
      )
   })

   return (
      <ul className="app-list list-group">
         {elements}
      </ul>
   )
}

export default EmployeesList;