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
            { name: 'Vitalii H.', salary: 5000, increase: false, like: true, id: 1 },
            { name: 'Oleg R.', salary: 750, increase: false, like: false, id: 2 },
            { name: 'Alex O.', salary: 900, increase: false, like: false, id: 3 },
            { name: 'Olga M.', salary: 2200, increase: false, like: false, id: 4 }
         ],
         term: '',
         filter: 'all'
      }
      this.newId = 5;
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

   onToggleProp = (e, id, prop) => {
      if (e.type === 'click' || e.keyCode === 13) {
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
   }



   searchEmpl = (items, term) => {
      if (term.length === 0) {
         return items;
      }
      return items.filter(item => {
         return item.name.indexOf(term) > -1
      })
   }

   onUpdateSearch = (term) => {
      this.setState({ term });
   }

   filterPost = (items, filter) => {
      switch (filter) {
         case 'like':
            return items.filter(item => item.like);
         case '1000>':
            return items.filter(item => item.salary >= 1000);
         default:
            return items
      }
   }

   onFilterSelect = (filter) => {
      this.setState({ filter });
   }

   changeSalary = (newSalary, name) => {
      this.setState(({ data }) => ({
         data: data.map(person => {
            if (person.name === name) {
               const newClearSalary = newSalary.replace(/\D/g, '');
               return { ...person, salary: newClearSalary }
            }
            return person
         })
      }))
   }

   render() {
      const { data, term, filter } = this.state;
      const employees = this.state.data.length;
      const increased = this.state.data.filter(item => item.increase).length;
      const visibleData = this.filterPost(this.searchEmpl(data, term), filter);

      return (
         <div className='app' >
            <AppInfo
               employees={employees}
               increased={increased}
            />
            <div className="search-field">
               <SearchField onUpdateSearch={this.onUpdateSearch} />
               <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
            </div >
            <EmployeesList
               data={visibleData}
               onDelete={this.deleteItem}
               onToggleProp={this.onToggleProp}
               changeSalary={this.changeSalary}
            />
            <EmployeesAddForm onAdd={this.addItem} />
         </div >
      );
   }
}

export default App;