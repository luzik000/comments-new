import React, { Component } from 'react';
import './comment-add-form.css';

export default class CommentAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onCommentAdded(this.state.label);
    
    this.setState({
      label: ''
    });
  }

  render() {
    return (
      <form className="comment-add-form d-flex"
      onSubmit={this.onSubmit}>
        <input type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done" 
          value={this.state.label}/>
        <button
        type="submit"
          className="btn btn-outline-secondary"
        >Add</button>
      </form>
    );
  };
};



/*

  state = {
    toggledInput: false,
  }


  
  addNewComment = (text) => {
    // const item = this.props.item;
    this.commentsService.addComment(this.props.comment, text);

    // this.setState({ item });
    this.toggleAddComment();
  }

  toggleAddComment = () => {
    this.setState(({ toggledInput }) => {
      return {
        toggledInput: !toggledInput
      }
    });
  }


    const inputRow = this.state.toggledInput ? <CommentAddForm onCommentAdded={this.addNewComment} /> : null;


    
            <button
              className="btn btn-success float-right"
              type="button"
              onClick={this.toggleAddComment}>
              <i className="fa fa-plus"></i>
            </button>
*/