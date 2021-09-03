import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{ song.title }</div>
                </div>
            )
        })
    }

    render () {
        return (
            <div className="ui divided list">{ this.renderList() }</div>
        )
    }
}

// return will send the object as a prop to the SongList component
const mapStateToProps = state => {
    return { songs: state.songs }
}

/** This is just a simple invoking of inside function

a() {
    return b () {}
}
a()(), invokes b but only a() will only return b */

// AACTION CREATORS have to be sent through connect to update reducers

// selectSong will be sent to the SongList component as prop, 
// we have to send it like this as it is an ACTION CREATOR and if we just call 
// it like selectSong() isnide the component the reducer will not get updated 
export default connect(mapStateToProps, { selectSong })(SongList);