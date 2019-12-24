import React, { Component } from 'react';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef(); // newer approach
    }
    
    componentDidMount(){
        // this.inputElement.focus(); // older approach
        this.inputElementRef.current.focus();
    }
    render () {
        console.log('[Person.js] rendering...');  
        return (
            <Aux>
                {this.props.isAuth ? <p>Authenticated!</p> : <p>Please log in</p>}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p> 
                <p>{this.props.children}</p> 
                <input 
                 type="text" 
                //  ref={(inputEl) => {this.inputElement = inputEl}} // older approach
                 ref={this.inputElementRef}
                 onChange={this.props.changed} 
                 value={this.props.name} />
            </Aux>
        );
    }
};

export default withClass(Person, classes.Person);