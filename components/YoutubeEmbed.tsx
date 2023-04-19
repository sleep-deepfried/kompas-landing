import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
  <div className="video-responsive" style={{ display: 'flex', justifyContent: 'center', marginTop:30 }}>
    <iframe
  width="900"
  height="500"
  src={`https://www.youtube.com/embed/${embedId}`}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  title="Embedded youtube"
  style={{ width: '900px !important', height: '500px !important', borderRadius: "10px" }}
/>

  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
