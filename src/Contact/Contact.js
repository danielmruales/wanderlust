import React, {Component} from 'react';
import './Contact.css'
import { withGlobal } from '../GlobalData';

class Contact extends Component{

    constructor(){
        super()
        this.state = {

            name: "",
            email: "",
            phone: "",
            city: "",
            state: ""
        }
    }


    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
 }



    submit = e => {
        e.preventDefault()
        this.setState({
            name: "",
            email: "",
            phone: "",
            city: "",
            state: ""
        })
    }

    render (){
    return (
        <div>
            
            <div className='mainContactDiv'>
                <h1 className='question'> Have Questions or Suggestions? </h1>
                <p className='directions'> Fill out the form below and one of our awesome team members will reach out! </p>

                <form className='contact' onSubmit={this.submit}>

                    <input type='text' placeholder='Name' name='name' value={this.state.name} onChange={this.handleChange} required></input>
                    <input type='email' placeholder='Email' name='email' value={this.state.email} onChange={this.handleChange} required></input>
                    <input type='number' placeholder='Phone' name='phone' value={this.state.phone} onChange={this.handleChange} required></input>
                    <input type='text' placeholder='City' name='city' value={this.state.city} onChange={this.handleChange}></input>

                    <select name='state' onChange={this.handleChange} value={this.state.state}>
                        <option value='default'>Select</option>
                        <option value='utah'> UT </option>
                        <option value='colorado'> CO </option>
                        <option value='arizona'> AZ </option>
                    </select>
                    <button>Submit</button>
                </form>
            </div>
            {/* <div className='thanksMsg'>
                <h1>Thanks for your submisson!</h1>
            </div> */}

        </div>
        );
    }
};

export default withGlobal(Contact);