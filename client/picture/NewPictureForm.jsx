import React from 'react';
import * as actions from '../actionIndex';
import {postPicture} from './PictureActions';
import {connect} from 'react-redux';

function constructPicture() {
  const formData = new FormData(document.getElementById('new_picture_form'));
  return formData;
}

export const NewPictureForm = React.createClass({
  render: function() {
    return (
      <div>
        <form id='new_picture_form'>
          <label for='title'>Title</label>
          <input type='text' name='title' />
          <label for='url'>Picture URL:</label>
          <input type='text' name='url' />
          <label for='caption'>Add a Caption:</label>
          <textarea name='caption'></textarea>
          <button type='button' onClick={() => this.props.postPicture(constructPicture())}>
            Send It
          </button>
        </form>
      </div>
    );
  }
});

export const NewPictureFormContainer = connect(null, actions.PictureActions)(NewPictureForm)
