import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div>
        <form>
          <label for='title'>Title</label>
          <input type='text' name='title' />
          <label for='url'>Picture URL:</label>
          <input type='text' name='url' />
          <label for='caption'>Add a Caption:</label>
          <textarea name='caption'></textarea>
        </form>
      </div>
    );
  }
});
