import { useState } from "react";
import"./ExpenseTracker.css"
function ExpenseTracker(){
const[expense,setExpense]=useState("");
const[amount,setAmount]=useState("");
const[expenses,setExpenses]=useState([]);
return(
    <div className="expense">
        <h1>Expense Tracker</h1>
        <input
        type="text"
        placeholder="Expense name"
        value={expense}
        onChange={(e) =>setExpense(e.target.value)}
        />
        <input
        type="number"
        placeholder="Amount "
        value={amount}
        onChange={(e)=> setAmount(e.target.value)}
        />
        <button className="add-btn"
        onClick={()=>{
            if(expense===""||amount===""){
                return;
            }
            setExpenses([...expenses,{expense,amount}]);
            setExpense("");
            setAmount("");
    
        }}>
            Add Expense
            </button>
           { expenses.map((item ,index)=> (
            <div className="expense-item"
             key={index}>
                <p>{item.expense}-₹{item.amount}</p>

                <button className="edit-btn" 
                onClick={()=>{
                    const newExpense=prompt("Edit expense",item.expense);
                    if(newExpense!==null&&newExpense!==""){
                        const updatedExpenses = [...expenses];
                          updatedExpenses[index].expense = newExpense;
                           setExpenses(updatedExpenses);

                          }

                }}>
                    Edit
                    </button>

                <button className="delete-btn"
                 onClick={()=>{setExpenses(expenses.filter((_,i)=>i!==index));

                 }}>
                     Delete 
                   </button> 
                </div>
                 ))}
                 <h3>Number of Expenses: {expenses.length}</h3>
                 <h2>
                    Total:₹{expenses.reduce((total,item)=>total+Number(item.amount),0)}

                 </h2>
                
            

    </div>
);

}
export default ExpenseTracker;