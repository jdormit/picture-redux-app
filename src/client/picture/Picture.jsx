import React from 'react';
import {connect} from 'react-redux';
import {CommentWidgetContainer} from '../comment/CommentWidget';
import * as actions from '../actionIndex';

export const Picture = React.createClass({
  componentWillMount: function() {
    this.props.getComments(this.props.picture._id);
  },
  render: function() {
    return (
        <div>
        <h2>{this.props.picture.title}</h2>
        <img src={this.props.picture.url} alt={this.props.picture.title} height={this.props.picture.height} width={this.props.picture.width} />
        <p>{this.props.picture.caption}</p>
        <CommentWidgetContainer picture_id={this.props.picture._id}/>
        <h3>Comments</h3>
        {Object.values(this.props.comments).map(comment => {
          return (
          <div key={comment._id}>
            <h4>{comment.datePosted} {comment.postedBy} said:</h4>
            <p>{comment.text}</p>
          </div>
          )
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

export const PictureContainer = connect(mapStateToProps, actions.CommentActions)(Picture);
