import React, { Component } from 'react'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
    renderSongs(){
        return this.props.data.songs.map(song => {
            return (<li className='collection-item' key={song.id}>{song.title}</li>)
        })
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
            </div>
        );
    }
}

const query = gql`
{
    songs{
        id
        title
    }
}
`;

export default graphql(query)(SongList);