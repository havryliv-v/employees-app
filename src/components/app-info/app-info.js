import './app-info.css';

const AppInfo = ({ employees, increased }) => {
   return (
      <div className="app-info">
         <h1>Облік співробітників в компанії ABC</h1>
         <h2>Загальна кількість співробітників: {employees}</h2>
         <h2>Премію получать: {increased} </h2>
      </div>
   )
}

export default AppInfo;