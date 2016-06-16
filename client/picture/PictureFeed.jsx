import React from 'react';
import {connect} from 'react-redux';

export const PictureFeed = React.createClass({
  render: function() {
    return (
      <div>
        <a href='/addPicture'>Add A Picture</a>
      {this.props.pictures.map(picture => {
        <div>
          <h3>{picture.title}</h3>
          <img src={picture.url} width="256" height="192" />
        </div>
      })};
      </div>
    );
  }
});

function mapStateToProps(state) {
  pictures: state.get('pictures');
}

export const PictureFeedContainer = connect(mapStateToProps)(PictureFeed);
