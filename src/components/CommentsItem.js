import React, { Component } from 'react';

class CommentsItem extends Component {

    constructor(props) {
        super(props);
    }

    createMarkup = (html) => {
        return {
            __html: html
        }
    }

    render() {
        let { comment } = this.props;
        return (
            <li className="comment" key={comment.id}>
                <div className="fix">
                    <div className="img">
                        <img src="http://localhost/wordpress/wp-content/themes/learning/src/sass/images/user.jpg" alt=""/></div>
                    <div className="comment-content cell">
                        <div className="vcard">
                            {comment.name} 于
                            { comment.time } 说:
                        </div>
                        <div className="comment-body"
                             dangerouslySetInnerHTML={this.createMarkup(comment.content)}>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default CommentsItem;
