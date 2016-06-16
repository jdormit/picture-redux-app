import React from 'react';

export default React.createClass({
  render: function() {
    return (
        <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.url} alt={this.props.title} height={this.props.height} width={this.props.width} />
        <p>{this.props.caption}</p>
        <h3>Comments</h3>
        {this.props.comments.map(comment => {
          <div>
            <h4>{comment.datePosted} {comment.postedBy} said:</h4>
            <p>{comment.text}</p>
          </div>
        })};
      </div>
    );
  }
});
