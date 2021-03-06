import React, {Component} from 'react';
import './App.css'
import{FormGroup, FormControl, InputGroup} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
 
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            query: ''
        }
    }

    search(){
        console.log('this.state',this.state);
        const BASE_URL ='https://api.spotify.com/v1/search?';
        const FETCH_URL = BASE_URL + 'q=' + this.state.query +'&type=artist&limit=1'
        console.log('FETCH_URL', FETCH_URL);
    }
    render(){
        return(
            <div className ="App">
            <div className ="App-title">Music Webnet</div>
            <FormGroup>
                <FormControl type="text" placeholder="Search on Artist"
                value={this.state.query}
                onChange ={event =>{this.setState({query: event.target.value})}}
                onKeyPress={event => {if (event.key === 'Enter'){
                    this.search()
                }
            }}
                />
                <button onClick={()=>this.search()}>search</button>
            </FormGroup>
            <div>Artist picture</div>
            <div>Artist name</div>
            <div className="Gallery">Gallery</div>
            </div>
        )
    }
}

export default App;