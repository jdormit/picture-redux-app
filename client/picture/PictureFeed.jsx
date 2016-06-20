import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actionIndex';

export const PictureFeed = React.createClass({
  componentWillMount: function() {
    this.props.getPictures();
  },
  render: function() {
    return (
      <div>
        <a href='/#/addPicture'>Add A Picture</a>
      {this.props.pictures.map(picture =>
        <div>
          <h3>{picture.title}</h3>
          <img src={picture.url} alt={picture.title} width="256" height="192" />
        </div>
      )};
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    pictures: state.pictureState.get('pictures')
  };
}

export const PictureFeedContainer = connect(mapStateToProps, actions.PictureActions)(PictureFeed);
