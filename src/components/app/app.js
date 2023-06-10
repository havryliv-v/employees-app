import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../empl-add-form/empl-add-form';
import EmployeesList from '../empl-list/empl-list';
import SearchField from '../search-field/search-field';


import './app.css'


function App() {
   return <div className='app'>
      <AppInfo />
      <div className="search-field">
         <SearchField />
         <AppFilter />
      </div>
      <EmployeesList />
      <EmployeesAddForm />
   </div>
}


export default App;