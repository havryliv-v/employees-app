import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../empl-add-form/empl-add-form';
import EmployeesList from '../empl-list/empl-list';
import SearchField from '../search-field/search-field';


import './app.css'



function App() {

   const data = [
      { name: 'Vitalii H.', salary: 500, increase: true },
      { name: 'Oleg R.', salary: 750, increase: false },
      { name: 'Alex O.', salary: 1200, increase: true }
   ]

   return <div className='app'>
      <AppInfo />
      <div className="search-field">
         <SearchField />
         <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />
   </div>
}


export default App;