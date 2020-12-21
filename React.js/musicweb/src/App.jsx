import React, {Component} from 'react';
import './App.css'
import{FormGroup, FormControl, InputGroup} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
 
class App extends Component{
    render(){
        return(
            <div className ="App">
            <div className ="App-title">Music Webnet</div>
            <FormGroup>
                <FormControl type="text" placeholder="Search on Artist"/>
                
            </FormGroup>
            <div>Artist picture</div>
            <div>Artist name</div>
            <div className="Gallery">Gallery</div>
            </div>
        )
    }
}

export default App;