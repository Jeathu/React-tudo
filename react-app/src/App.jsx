
import { Component } from "react" // Import Components
import Table from "./table"; // Import Table.jsx
import Form from "./Form"; // Import Form.jsx


//// Principal component
class App extends Component{

  state = {
    characters : [ ]
  }

  // functional component  
  removecharacter =(index)=> {
    const{characters} = this.state
    let filtered = characters.filter((characters,i)=>{
         return i!==index
    })
    this.setState({characters:filtered})
  }

  // functional component
  handelSubmit = (character)=>{
       this.setState({characters:[...this.state.characters,character]})
  }


  render(){
     const {characters} = this.state
     return(
        // Class sur index.css (<div className='table'>)
        // ( charactersData , removeData , handelSubmit)  un propriété
       <div className='table' >
        <h1>Table</h1>
         <Table removeData = {this.removecharacter}  charactersData = {characters}/>
         <Form  handelSubmit ={this.handelSubmit}/>
       </div>
     )
    }

}

export default App;