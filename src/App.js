import React, { Component } from 'react';
//import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {age: 32, name: 'Amedeo'},
      {age: 27, name: 'Matteo'},
      {age: 33, name: 'Gioia'},
    ],
    showPersons: false
  }

  changeNameHandler = (newName) => {
    this.setState({
      persons: [
        {age: 32, name: newName},
        {age: 26, name: 'Matteo Stabile'},
        {age: 32, name: 'Gioia Fiorini'},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {age: 32, name: 'Amedeo'},
        {age: 27, name: event.target.value},
        {age: 33, name: 'Gioia'},
      ]
    })
  }

  togglePersonsHandler = () => {
    const visualizza = this.state.showPersons

    this.setState({
      showPersons : !visualizza
    })
  }


  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null

    if(this.state.showPersons){
      persons = (
        <div>

          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />
          })}
        {/* <Person 
          age={this.state.persons[0].age}
          name={this.state.persons[0].name}
          > Faccio il programmatore da circa un anno </Person>
        <Person 
          age={this.state.persons[1].age}
          name={this.state.persons[1].name}
          click={this.changeNameHandler.bind(this, 'SuperCiccio')}
          changed={this.nameChangedHandler}
          />
          
        <Person 
          age={this.state.persons[2].age} 
          name={this.state.persons[2].name}/> */}
      </div>
      )
    }

    return (
      <div className="App">
        <h1>Ciao</h1>
        <p>Qui funziona!</p>
        {/* <button style={style} onClick={() => this.changeNameHandler('Ciccio')}>CLICCA</button> */}
        <button style={style} onClick={this.togglePersonsHandler}>CLICCA</button>
        {persons}
      </div> 
    );
  }
}

export default App;
// export default app;





// const app = (props) => {

//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {age: 32, name: 'Amedeo'},
//       {age: 27, name: 'Matteo'},
//       {age: 33, name: 'Gioia'},
//     ]
//   })
  

//   const changeNameHandler = () => {
//     setPersonsState({
//       persons: [
//         {age: 32, name: 'Amedeo Pro'},
//         {age: 26, name: 'Matteo Stabile'},
//         {age: 32, name: 'Gioia Fiorini'},
//       ]
//     })
//   }

 
//     return (
//       <div className="App">
//         <h1>Ciao</h1>
//         <p>Qui funziona!</p>
//         <button onClick={changeNameHandler}>CLICCA</button>
//         <Person age={personsState.persons[0].age} name={personsState.persons[0].name}> Faccio il programmatore da circa un anno </Person>
//         <Person age={personsState.persons[1].age} name={personsState.persons[1].name}/>
//         <Person age={personsState.persons[2].age} name={personsState.persons[2].name}/>
//       </div>
//     );
  
// }