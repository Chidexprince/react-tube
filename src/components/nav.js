import React, { Component } from 'react';
import YouTube_Logo from './../YouTube_Logo.png'

class Nav extends Component {
    state = {
        term: ''
    }

    search = (e) => {
        e.preventDefault();
        console.log(this.state.term)
    }

    change = (e) => {
        this.setState({
            term: e.target.value
        })
        console.log(this.state.term)
    }

    render(){
        return (
            <div className='row navbar-light bg-light'>
                <div className='col-2 m-2'>
                    <img src={YouTube_Logo} width='150px' height='80px'/>
                </div>
                <div className='col-8'>
                <form class="form-inline m-4" onSubmit={this.search}>
                    <input className="form-control mr-sm-2 search" type="search" placeholder="Search" aria-label="Search" onChange={this.change} />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
                <div className='col-2'></div>
            </div>
        )
    }
}


export default Nav
