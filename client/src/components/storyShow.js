import React from 'react'

export default function StoryShow(props) {

  if (props.story.time) {
    let storyTime = new Date(props.story.time * 1000);
    let timeString = storyTime.toLocaleString();

    return (
      <div>
        <h4>{props.story.title}</h4>
        <p>{props.story.text}</p>
        <p>Published at: {timeString}</p>
      </div>
    )
  } else {
    let timeString = "Time is not available";

    return (
      <div>
        <h4>{props.story.title}</h4>
        <p>{props.story.text}</p>
        <p>Time: {timeString}</p>
      </div>
    )
  }
}