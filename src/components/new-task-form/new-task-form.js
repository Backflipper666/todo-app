import React, { Component } from 'react';
import './new-task-form.css';

export default class TaskEdit extends Component {
  state = {
    label: '',
  };
  ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
  onLabelChange = (event) => {
    this.setState({
      label: this.ucFirst(event.target.value),
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const label = this.state.label;
    const trimmed = label.trim();

    if (trimmed.length === 0) {
      return;
    }
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: '',
    });
  };
  render() {
    return (
      <form className="new-task-form" onSubmit={this.onSubmit}>
        <input
          className="new-task-input"
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
          value={this.state.label}
          autoFocus
        />
      </form>
    );
  }
}
