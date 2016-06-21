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
      {Object.keys(this.props.pictures).map(picture_id =>
        <div key={picture_id}>
          <h3>{this.props.pictures[picture_id].title}</h3>
          <a href={`/#/pictures/${picture_id}`}>
            <img src={this.props.pictures[picture_id].url} alt={this.props.pictures[picture_id].title} width="256" height="192" />
          </a>
        </div>
      )}
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
