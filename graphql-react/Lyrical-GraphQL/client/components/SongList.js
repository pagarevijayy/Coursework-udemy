import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { Link } from 'react-router'
import { query } from '../queries/fetchSongs';
import gql from 'graphql-tag';

class SongList extends Component {
    renderSongs(){
        return this.props.data.songs.map(song => {
            return (
                <li className='collection-item' key={song.id}>
                    <Link to={`/songs/${song.id}`}>
                        <span>{song.title}</span>
                    </Link>
                    <i className='material-icons' onClick={() => {this.deleteSong(song.id)}}>delete</i>
                </li>
            )
        })
    }

    deleteSong(id){
        this.props.mutate({ variables: { id }}).then(()=> { this.props.data.refetch()})
    }

    render(){
        // console.log(this.props)
        if(this.props.data.loading) {
            return <div>loading...</div>
        }

        return (
            <div>
                <ul className='collection'>
                    {this.renderSongs()}
                </ul>
                <Link to='songs/new' className='btn-floating btn-large red right'>
                    <i className='material-icons'>add</i>
                </Link>
            </div>
        );
    }
}

const mutation = gql`
    mutation DeleteSong($id: ID){
        deleteSong(id: $id) {
            id
        }
    }
`;

export default graphql(mutation)(graphql(query)(SongList));