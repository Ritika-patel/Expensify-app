import React from "react";
import { NavLink } from 'react-router-dom'



const Header  = () => (
    <header>
      <h1>Expensify</h1>
      <ul>
     <li> home - <NavLink exact={true} to="/" activeClassName="is-active">Dashboard</NavLink></li>
     <li>AddExpense - <NavLink to="/create" activeClassName="is-active">Add-Expense</NavLink></li>
     <li>EditExpense - <NavLink to="/edit" activeClassName="is-active">Edit-Expense</NavLink></li>
     <li>Help - <NavLink to="/help" activeClassName="is-active">help</NavLink></li>
      </ul>
    </header>
)

export default  Header