import './app-filter.css'

const AppFilter = (props) => {

   const btnData = [
      { name: 'all', label: 'Всі співробітники' },
      { name: 'like', label: 'На підвищення' },
      { name: '1000>', label: 'З/П більше 1000$' }
   ]

   const btns = btnData.map(({ name, label }) => {
      const active = props.filter === name;
      const clazz = active ? "btn-light" : "btn-outline-light"
      return (
         <button className={`btn ${clazz}`}
            type="button"
            key={name}
            onClick={() => props.onFilterSelect(name)}>
            {label}
         </button>
      )
   })

   return (
      <div className="btn-group">
         {btns}

      </div>
   )
}

export default AppFilter;