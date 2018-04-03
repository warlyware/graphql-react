import React, { Component } from 'react';

export default class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state={ title: '' }
  }

  render() {
    return(
      <div>
        <h3>Create new song</h3>
        <form action="">
          <label>Song Title</label>
          <input
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}
