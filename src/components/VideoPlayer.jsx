import React from "react";

function VideoPlayer(){

    return(
        <div className="flex justify-center">
            <iframe className="" width="560" height="315" src="https://www.youtube.com/embed/ylm3gAoPXfA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default VideoPlayer;