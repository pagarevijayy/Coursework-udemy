import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
    render() {
        if(this.props.data.loading){
            return (<div>loading...</div>)
        }

        return (
            <div>
                Song Detail - {this.props.data.song.title}
            </div>
        )
    }
}


export default graphql(fetchSong, {
    options: (props) => { return { variables: {id: props.params.id}}}
})(SongDetail);