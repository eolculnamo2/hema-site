/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-else-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-alert */
import React from 'react';

class Row3 extends React.Component {
  constructor() {
    super();
    this.state = {
      sending: false,
      sent: false,
      addedElements: [],
      items: [1],
      currentElement: 'p',
      imageType: 'full',
      width: 100,
      userProfile: {},
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      fetch('/authenticate/getUserProfile', {
        method: 'POST',
        body: null,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
      })
        .then(res => res.json())
        .then((data) => {
          if (data.data !== false) {
            this.setState({ userProfile: data.data });
          }
        });
      if (sessionStorage.getItem('addedElements')) {
        this.setState({ addedElements: JSON.parse(sessionStorage.getItem('addedElements')) });
      }
    }
  }

  makeSubmission() {
    const { userProfile } = this.state;
    if (userProfile.username && typeof window !== 'undefined') {
      this.setState({ sending: true });

      const payload = {
        title: document.getElementById('title').value,
        email: userProfile.email,
        author: userProfile.displayName,
        username: userProfile.username,
        body: document.getElementsByClassName('preview__wrap')[0].innerHTML,
        captcha: document.getElementsByName('g-recaptcha-response')[0].value,
      };

      fetch('/posts/process-submission', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
      })
        .then(res => res.json())
        .then((data) => {
          // eslint-disable-next-line react/no-unused-state
          this.setState({ ending: false, sent: data.data === 'sent' });
        });
    } else {
      alert('Must be logged in to make article submission.');
    }
  }

  addElement(el, value) {
    const { addedElements, imageType, width } = this.state;

    // let x = this.state.addedElements
    if (el !== 'li') {
      const content = value[0].value;
      addedElements.push({
        type: el,
        value: content,
        imageType,
        imageWidth: width,
      });
    } else {
      const content = [];
      Array.prototype.forEach.call(value, (y) => {
        content.push(y.value);
      });
      addedElements.push({ type: el, values: content });
    }
    this.setState({ addedElements });
  }

  addOrDeleteListItem(add) {
    const { items } = this.state;
    // const arr = items;
    // eslint-disable-next-line no-unused-expressions
    add ? items.push(1) : items.splice(items.length - 1, 1);
    this.setState({ items });
  }

  // eslint-disable-next-line consistent-return
  showCurrentElement() {
    const {
      currentElement,
      imageType,
      items,
      width,
    } = this.state;

    if (typeof window !== 'undefined') {
      if (currentElement === 'p') {
        return (
          <>
            <textarea className="new-p" />
            <button className="add-el-button" type="button" onClick={this.addElement.bind(this, 'p', document.getElementsByClassName('new-p'))}>
                Add Paragraph
            </button>
          </>
        );
      }
      if (currentElement === 'h3') {
        return (
          <>
            <input className="sp-input new-h" />
            <button className="add-el-button" type="button" onClick={this.addElement.bind(this, 'h3', document.getElementsByClassName('new-h'))}>
                Add Header
            </button>
          </>
        );
      // eslint-disable-next-line no-else-return
      } else if (currentElement === 'img') {
        return (
          <div>
            <p>
                Image Type: {imageType === 'full' ? 'Full' : imageType === 'float-right' ? 'Float Right' : 'Float Left'}
            </p>
            <p>
              Image Width: {`${width}%`}
            </p>
            <input placeholder="Enter Image Url" className="sp-input new-img" />
            <br />
            <input className="sp-input" placeholder={`width: ${width}`} id="adjust-width" type="number" min="0" max="100" />
            <button
              type="button"
              className="blue-option-buttons"
              onClick={() => { this.setState({ width: !(document.getElementById('adjust-width').value).isNaN() ? document.getElementById('adjust-width').value : 25 }); }}
            >
                Set Width
            </button>
            <br />
            <button
              type="button"
              className={imageType === 'full' ? 'blue-option-buttons submission__selected-option' : 'blue-option-buttons'}
              onClick={() => { this.setState({ imageType: 'full' }); }}
            >
                Full
            </button>
            <button
              type="button"
              className={imageType === 'float-right' ? 'blue-option-buttons submission__selected-option' : 'blue-option-buttons'}
              onClick={() => { this.setState({ imageType: 'float-right' }); }}
            >
                Float Right
            </button>
            <button
              type="button"
              className={imageType === 'float-left' ? 'blue-option-buttons submission__selected-option' : 'blue-option-buttons'}
              onClick={() => { this.setState({ imageType: 'float-left' }); }}
            >
                Float Left
            </button>
            <button className="add-el-button" type="button" onClick={this.addElement.bind(this, 'img', document.getElementsByClassName('new-img'))}>
                Add Image
            </button>
          </div>
        );
      } else if (currentElement === 'li') {
        return (
          <div>
            {items.map(() => <input className="sp-input new-li" />)}

            <button
              className="blue-option-buttons"
              type="button"
              onClick={this.addOrDeleteListItem.bind(this, true)}
            >
                Add Item
            </button>
            <button
              type="button"
              className="blue-option-buttons"
              onClick={this.addOrDeleteListItem.bind(this, false)}
            >
                Delete Item
            </button>
            <button className="add-el-button" type="button" onClick={this.addElement.bind(this, 'li', document.getElementsByClassName('new-li'))}>
                Add List
            </button>
          </div>
        );
      }
    }
  }

  resetArticle() {
    // eslint-disable-next-line no-restricted-globals
    const test = confirm('Are you sure you want to delete your work?');
    if (test) {
      this.setState({ addedElements: [] });
    }
  }

  // eslint-disable-next-line consistent-return
  previewUI() {
    const { addedElements } = this.state;
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('addedElements', JSON.stringify(addedElements));
      return (
        <div
          className="preview__wrap"
          style={{ display: addedElements.length === 0 ? 'none' : 'block' }}
          contentEditable="true"
        >
          {addedElements.map((x) => {
            if (x.type === 'img') {
              return (
                <img
                  style={{ width: `${x.imageWidth}%` }}
                  className={`${x.imageType} preview__item`}
                  src={x.value}
                  alt={x.value}
                />
              );
            } else if (x.type === 'p') {
              return (<p className="preview__item">{x.value}</p>);
            } else if (x.type === 'h3') {
              return (<h3 className="preview__item">{x.value}</h3>);
            } else if (x.type === 'li') {
              return (
                <ul className="preview__item">
                  {x.values.map(y => <li>{y}</li>)}
                </ul>
              );
            }
            return null;
          })}
        </div>
      );
    }
  }

  render() {
    const { currentElement, sending, sent } = this.state;

    return (
      <div className="submission-box">
        <form>
          <h4 className="subtitle">Article Submission</h4>
          <em>Please read contributor guidelines before submission.</em>
          <p>
            You can&nbsp;
            <a className="underline" href="mailto:rbertram8@gmail.com">submit by email</a>
            &nbsp;or use the editor below.
          </p>
          <div className="flex-submission-inputs">
            <div>
              <label>Title</label>
              <input id="title" className="sp-input" />
            </div>
          </div>
          <div className="submission__flex">
            <button
              className={currentElement === 'h3' ? 'submission__selected-option el-option-button' : 'el-option-button'}
              type="button"
              onClick={() => { this.setState({ currentElement: 'h3' }); }}
            >
                Add Header
            </button>
            <button
              className={currentElement === 'p' ? 'submission__selected-option el-option-button' : 'el-option-button'}
              type="button"
              onClick={() => { this.setState({ currentElement: 'p' }); }}
            >
                Add Paragraph
            </button>
            <button
              className={currentElement === 'img' ? 'submission__selected-option el-option-button' : 'el-option-button'}
              type="button"
              onClick={() => { this.setState({ currentElement: 'img' }); }}
            >
                Add Image
            </button>
            <button
              className={currentElement === 'li' ? 'submission__selected-option el-option-button' : 'el-option-button'}
              type="button"
              onClick={() => { this.setState({ currentElement: 'li' }); }}
            >
                Add List
            </button>
          </div>

          {this.showCurrentElement()}
          {this.previewUI()}

          <div className="g-recaptcha" data-sitekey="6Lexs2UUAAAAAOCNpqiw_2MBMpWa2JxQ_fU8SCDa" />
          <button
            style={{ display: sent ? 'none' : 'block' }}
            onClick={this.makeSubmission.bind(this)}
            type="button"
            className={sending ? 'submissions-button submissions-button--sending' : 'submissions-button'}
          >
              Submit Article
          </button>
          <button
            type="button"
            onClick={this.resetArticle.bind(this)}
            className={sending ? 'submissions-button submissions--reset submissions-button--sending' : 'submissions-button submissions-button--reset'}
          >
              Reset Article
          </button>
          <em style={{ display: sent ? 'block' : 'none' }}>
              Thank you for your submission! We will be in contact upon review of your post.
          </em>
        </form>
      </div>
    );
  }
}

export default Row3;
