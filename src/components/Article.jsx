/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.defaultOpen,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isOpen } = this.state;
    // console.log('---', 'clicked');
    this.setState({
      isOpen: !isOpen,
    });
  }


  render() {
    // console.log('----', this.props);
    const { article } = this.props;
    const { isOpen } = this.state;
    const body = isOpen && <section>{article.text}</section>;
    return (
      <div className="hello">
        <h2>
          {article.title}
          <button type="button" onClick={this.handleClick}>
            {isOpen ? 'close' : 'open'}
          </button>
        </h2>

        {body}
        <h3>
          create date:
          {new Date(article.date).toDateString()}
        </h3>
      </div>
    );
  }
}

export default Article;
