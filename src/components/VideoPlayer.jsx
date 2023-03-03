import React from "react";

function VideoPlayer(){

    return(
        <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
            <iframe className="absolute top-0 left-0 w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/ylm3gAoPXfA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default VideoPlayer;