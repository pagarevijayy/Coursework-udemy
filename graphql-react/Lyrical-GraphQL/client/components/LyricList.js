import React, {Component} from "react";

class LyricList extends Component {

    getLyricsList() {
        return this.props.lyrics.map(lyric => {
            return (<li key={lyric.id} className="collection-item">{lyric.content}</li> )
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

export default LyricList;