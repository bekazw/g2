import React from 'react';

const Player = (props) => (
    <div id = "Player">
        {console.log(props.match.params.num)}
    </div>
)

export default Player;