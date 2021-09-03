import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>
            <h3>
                Please select a song
            </h3>
        </div>
    }
    return (
        <div>
            <h2>Details for: </h2>
            <p>
                Title: { song.title }
                <br />
                Duration: { song.duration }
            </p>
        </div>
    )
}

/** Any change in mapStateToProps will cause the component above to re-render */

// This object will be sent to the SongDetail component as a prop
const mapStateToProps = state => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);