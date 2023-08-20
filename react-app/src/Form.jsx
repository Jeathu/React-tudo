import { Component } from "react"; // Import Components
import PropTypes from "prop-types"; // Import prop-types


// Principal component
class Form extends Component {
    initialState = {
        name:"",
        job:""
    }
    state = this.initialState

    handeleChange = (event) => {
      const{name,value} = event.target
      this.setState({[name]:value})
    }

    // Using Props
    submitForm = () =>{
        let character = this.state
        this.props.handelSubmit(character)
        this.setState(this.initialState)
    }

    render(){
        return(
        <form>
            <label htmlFor="name">Name</label>
            <input
             type="text"
             name="name"
              id="name"
              value={this.state.name}
              onChange={this.handeleChange}
              />
            <label htmlFor="job">Job</label>
           <input
             type="text"
             name="job"
             id="job"
             value={this.state.job}
             onChange={this.handeleChange}
             />
            <input type= "button" value="Submit" onClick={this.submitForm} />
       </form>
       )
    }
}

// Props validation for handelSubmit
Form.propTypes = {
  handelSubmit: PropTypes.func.isRequired
};



export default Form;