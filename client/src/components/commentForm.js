import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commentUpload } from '../actions/commentAction';
// import Button from 'react-bootstrap/Button'

class CommentForm extends Component {

  state = {
    story_comment: ""     //need to be the same as database column
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      story_id: this.props.storyId
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    let valueCSRF = document.querySelector('meta[name="csrf-token"]').content;
    this.props.commentUpload(this.state, valueCSRF)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Comment</label>
          <br></br>
          <textarea value={this.state.comment} name="story_comment" rows="5" cols="60" onChange={this.handleOnChange}></textarea>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {commentUpload})(CommentForm)
