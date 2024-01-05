import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import { Link } from 'react-router';

class SongDetail extends Component {
    render() {
        if(this.props.data.loading){
            return (<div>loading...</div>)
        }

        return (
            <div>
                <Link to='/'>
                    Back
                </Link>
                <h3>
                    {this.props.data.song.title}
                </h3>
            </div>
        )
    }
}


export default graphql(fetchSong, {
    options: (props) => { return { variables: {id: props.params.id}}}
})(SongDetail);