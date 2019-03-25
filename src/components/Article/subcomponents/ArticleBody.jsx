import React from 'react';
import PropTypes from 'prop-types';

class ArticleBody extends React.Component {
  componentDidMount() {
    const { type, body } = this.props;

    if (type === 'HTML') {
      document.getElementById('html-article').innerHTML = body;
    }
  }

  render() {
    const {
      author, body, image, title, type, username,
    } = this.props;

    if (type === '') {
      return (
        <>
          <a href={`https://www.sword-point.com/profile/${username}`}>
            <p className="author-link">
              {`By: ${author}`}
            </p>
          </a>
          <img src={image} alt={title} />
          <div>
            {body.map(x => <p>{x}</p>)}
          </div>
        </>
      );
    }
    // if type is HTML
    return (
      <>
        <img src={image} alt={title} />
        <div id="html-article" />
      </>
    );
  }
}

ArticleBody.defaultProps = {
  author: '',
  body: [],
  image: '',
  title: '',
  type: '',
  username: '',
};

ArticleBody.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string || PropTypes.array,
  image: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  username: PropTypes.string,
};

export default ArticleBody;
