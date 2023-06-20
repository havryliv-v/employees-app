import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../empl-add-form/empl-add-form';
import EmployeesList from '../empl-list/empl-list';
import SearchField from '../search-field/search-field';

import './app.css'

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            { name: 'Vitalii H.', salary: 500, increase: false, like: true, id: 1 },
            { name: 'Oleg R.', salary: 750, increase: false, like: false, id: 2 },
            { name: 'Alex O.', salary: 1200, increase: false, like: false, id: 3 }
         ]
      }
      this.newId = 4;
   }

   deleteItem = (id) => {
      this.setState(({ data }) => {
         return {
            data: data.filter(i => i.id !== id)
         }
      })
   }

   addItem = (name, salary) => {
      const newItem = {
         name,
         salary,
         increase: false,
         like: false,
         id: this.newId++
      }
      this.setState(({ data }) => {
         const newArr = [...data, newItem];
         return {
            data: newArr
         }
      })
   }

   onToggleProp = (id, prop) => {
      this.setState(({ data }) => ({
         data: data.map(item => {
            if (item.id === id) {
               return { ...item, [prop]: !item[prop] }
            } else {
               return item
            }
         })
      }))
   }



   render() {
      const employees = this.state.data.length;
      const increased = this.state.data.filter(item => item.increase).length
      return <div className='app'>
         <AppInfo
            employees={employees}
            increased={increased}
         />
         <div className="search-field">
            <SearchField />
            <AppFilter />
         </div >
         <EmployeesList
            data={this.state.data}
            onDelete={this.deleteItem}
            onToggleProp={this.onToggleProp}
         />
         <EmployeesAddForm onAdd={this.addItem} />
      </div>
   }
}

export default App;