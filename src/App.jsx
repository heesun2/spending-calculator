import { Component } from "react";
import "./App.css";
import { ExpenseForm } from './components/ExpenseForm';
import ExpenseList from "./components/ExpenseList";

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      expenses: [
      {id:1, charge:"렌트비", amount: 1600},
      {id:2, charge:"교통비", amount: 400},
      {id:3, charge:"식비", amount: 1200}
    ]
    }
  }

  handleDelete = (id) => {
    const newExpenses = this.state.expenses.filter(expense => expense.id !== id)
    console.log(newExpenses);
    this.setState({expenses: newExpenses});
  }

  render(){
    return(
      <main className="main-container">
        <h1>예산계산기</h1>

        <div style={{width:'100%', backgroundColor: 'white', padding: '1rem' }}>
          <ExpenseForm />
        </div>

        <div style={{width:'100%', backgroundColor: 'white', padding: '1rem' }}>
        {/** Expense List */}
          <ExpenseList 
          initialExpenses={this.state.expenses}
          handleDelete={this.handleDelete}
          
          />
        </div>

        <div style={{ display:'flex', justifyContent: 'end', marginTop:'1rem'}}>
          <p style={{fontSize: '1rem'}}>
            총 지출:
            <span>원</span>
          </p>
        </div>

      </main>
    )
  }
}

export default App;