import React, {Component} from "react";
import gql from 'graphql-tag';
import {graphql} from "react-apollo"
class LyricList extends Component {

    onLike(id){
        this.props.mutate({ variables: { id } })
    }

    getLyricsList() {
        return this.props.lyrics.map(lyric => {
            return (<li key={lyric.id} className="collection-item">
                
                <span>{lyric.content}</span>
                <span className="vote-box">
                    <i className="material-icons" onClick={()=> this.onLike(lyric.id)}>thumb_up</i>
                    {lyric.likes}
                </span>
            </li> )
        })
    }

    render(){
        return (
            <ul className="collection">
                {this.getLyricsList()}
            </ul>
        )
    }
}

const mutation = gql`
    mutation LikeLyric($id: ID!){
        likeLyric(id: $id) {
              id
              content
        			likes
        }
    }
`

export default graphql(mutation)(LyricList);