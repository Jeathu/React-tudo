
// C'est pour importer compnent 
import  { Component } from "react";
import PropTypes from 'prop-types'

// fonctional component
const TableHeader = ()=> {
     return( 
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Action</th>
        </tr>
       </thead>
    )
}

// Voire c'est quoi props
const TableBody = (props)=> {
    const {Data,remcharacter} = props
    const rows =  Data.map ((characters,index)=> {
        return(<tr key={index}>
                 <td>{characters.name}</td>
                 <td>{characters.job}</td>
                 <td > <button onClick={()=> remcharacter(index)}> Delete</button> </td>
              </tr>)
    })
    
    return(
    // voire {rows}
    <tbody>
        {rows}
    </tbody>
    )
}


// class  component
class Table extends Component{
    render(){
        // on a envoyer propriété charactersData qui a crée App.jsx
        // ( Data ) c'est un propriété 
       const {charactersData,removeData} = this.props
        return(
            <table>
            <TableHeader/>
            <TableBody remcharacter={removeData} Data = {charactersData}/>
            </table>
        )
    }
}


// 👇️ define prop types for the component
Table.propTypes = {
    charactersData: PropTypes.array.isRequired, // Exemple si charactersData est un tableau requis
    removeData: PropTypes.func.isRequired,      // Exemple si removeData est une fonction requise
  };

  // Prop type validation
TableBody.propTypes = {
    Data: PropTypes.arrayOf(PropTypes.object).isRequired,
    remcharacter: PropTypes.func.isRequired,
  };


// C'est pour exporter ce ficiher Table.jsx
export default Table;