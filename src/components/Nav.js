import React, {Component} from 'react';
import '../static/main.css';
import { Navbar } from 'react-bootstrap';

class NavRow extends Component {

    constructor() {
        super();

        this.state = { 
            time: new Date() 
        };
    }

    componentDidMount() { 
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1000); 
    }

    componentWillUnmount() { 
        clearInterval(this.update);
    }

    render () {
        return (
            <Navbar fixed="top" className='mb-5 navbar'>
            <Navbar.Brand >Today's news</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                Time : {this.state.time.toLocaleTimeString()}
                </Navbar.Text>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavRow;