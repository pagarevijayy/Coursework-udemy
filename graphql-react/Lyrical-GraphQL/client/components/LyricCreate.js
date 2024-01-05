import React, { Component } from "react";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {

    constructor(props){
        super(props);
        this.state = { lyric: ""}
    }

    onSubmit(event){
        event.preventDefault();
        console.log(event)

        this.props.mutate({
            variables: { content: this.state.lyric, id: this.props.songId}, 
            // refetchQueries: [{ query }]
        }).then(() => {
            this.setState({lyric: ""})
        });
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label htmlFor="lyric">Lyric
                        <input type="text" name="lyric" value={this.state.lyric} 
                        onChange={(e)=> this.setState({ lyric: e.target.value})} />
                    </label>
                </form>
            </div>
        )
    }
}


const mutation = gql`
mutation AddLyricToSong ($id: ID, $content: String) {
 addLyricToSong (songId: $id, content: $content) {
    id
  	title
  	lyrics{
      id 
      likes
      content
    }
  }
}
`;


export default graphql(mutation)(LyricCreate);