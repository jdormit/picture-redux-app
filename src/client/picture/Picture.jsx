import React from 'react';
import {connect} from 'react-redux';

export const Picture = React.createClass({
  render: function() {
    return (
        <div>
        <h2>{this.props.picture.title}</h2>
        <img src={this.props.picture.url} alt={this.props.picture.title} height={this.props.picture.height} width={this.props.picture.width} />
        <p>{this.props.picture.caption}</p>
        <h3>Comments</h3>
        {Object.keys(this.props.comments).map(comment_id => {
          <div>
            <h4>{this.props.comments[comment_id].datePosted} {this.props.comments[comment_id].postedBy} said:</h4>
            <p>{this.props.comments[comment_id].text}</p>
          </div>
        })}
      </div>
    );
  }
});

function mapStateToProps(state, ownProps) {
  return {
    comments: state.commentState.get('comments'),
    picture: state.pictureState.get('pictures')[ownProps.params.id]
  };
}

export const PictureContainer = connect(mapStateToProps)(Picture);
