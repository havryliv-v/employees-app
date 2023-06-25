import EmployeesListItem from "../empl-list-item/empl-list-item";
import './empl-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp, changeSalary }) => {
   const elements = data.map(item => {
      const { id, ...itemProps } = item
      return (
         <EmployeesListItem
            key={id}
            {...itemProps}
            onDelete={() => { onDelete(id) }}
            onToggleProp={(e) => onToggleProp(e, id, e.currentTarget.getAttribute('data-toggle'))}
            changeSalary={changeSalary} />

      )
   })

   return (
      <ul className="app-list list-group">
         {elements}
      </ul>
   )
}

export default EmployeesList;