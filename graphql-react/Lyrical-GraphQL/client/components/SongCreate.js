import React, { Component } from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo';

class SongCreate extends Component {
    constructor(props){
        super(props);
        this.state = { title: ''};
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.mutate({
            variables: {
                title: this.state.title
            }
        });
        // console.log(this.props)
    }

    render(){
        return (
            <div>
                <h3>Create a new song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label htmlFor="title"> Song Title
                        <input type="text" name='title' 
                        onChange={ (event) => this.setState({title: event.target.value})}
                        value={this.state.title} />
                    </label>
                </form>
            </div>
        )
    }
}

const mutation = gql`
mutation AddSong ($title: String) {
 addSong (title: $title) {
    id
  	title
  }
}
`;

export default graphql(mutation)(SongCreate);