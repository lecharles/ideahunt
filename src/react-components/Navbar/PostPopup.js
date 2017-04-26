import React from 'react';
import Popup from './Popup';

class PostPopup extends React.Component {
  handlePost = () => {

  };

  render() {
    return (
      <Popup {...this.props} style="post-popup">
        <header>Post a new product</header>
        <section>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td><input placeholder="Enter idea's name"/></td>
              </tr>
              <tr>
                <td>Description</td>
                <td><input placeholder="Enter idea's description"/></td>
              </tr><tr>
                <td>Link</td>
                <td><input placeholder="http://www..."/></td>
              </tr><tr>
                <td>Media</td>
                <td><input placeholder="Paste a direct link to an image"/></td>
              </tr>
            </tbody>
          </table>
        </section>
        <footer className="post-footer">
          <button onClick={this.handlePost} className="post-btn">Hunt it!</button>
        </footer>
      </Popup>
    );
  }
}

export default PostPopup;
