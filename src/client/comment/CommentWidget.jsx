import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actionIndex';

function constructComment() {
  let formData = new FormData(document.getElementById('new_comment_form'));
  return formData;
}

export const CommentWidget = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Leave a comment!</h3>
        <form id='new_comment_form'>
          <label for='postedBy'>Your name:</label>
          <input type='text' name='postedBy' required/>
          <label for='text'>Wot you want to say:</label>
          <textarea name='text' required/>
          <input type='hidden' name='datePosted' value={new Date()} />
          <input type='hidden' name='_picture' value={this.props.picture_id} />
          <button type='button' onClick={() => this.props.postComment(constructComment())}>Let it be so.</button>
        </form>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {

  };
}

export const CommentWidgetContainer = connect(mapStateToProps, actions.CommentActions)(CommentWidget);
