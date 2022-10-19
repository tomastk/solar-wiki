import React from 'react'
import './index.css'

const YoutubeVideo = ({ embedId }) => (
  <div className="video-responsive wrapper mt-20 mb-20">
    <iframe
      width="450"
      height="720"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
)

export default YoutubeVideo
