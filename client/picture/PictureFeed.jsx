import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div>
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
