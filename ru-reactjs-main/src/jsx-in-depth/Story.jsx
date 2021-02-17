import React from "react";
import PropTypes from "prop-types";

function PhotoStory(props) {
  return <div>PhotoStory: {props.story}</div>;
}

function VideoStory(props) {
  return <div>VideoStory: {props.story}</div>;
}

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // Обязательно с заглавной буквы
  const SpecificStory = components[props.storyType];

  return <SpecificStory story={props.story} />;
}

Story.propTypes = {
  storyType: PropTypes.string.isRequired,
  story: PropTypes.string.isRequired
}

export default Story;
