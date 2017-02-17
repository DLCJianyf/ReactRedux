import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import CommentsItem from './CommentsItem';
import CommentForm from './CommentForm';

class Comments extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { comments, getComments } = this.props;
        return (
            <div className="commentsWrap">
                {
                    comments.map(function(comment) {
                        return(
                            <CommentsItem comment={comment} key={ comment.id } />
                        )
                    })
                }
                <CommentForm {...this.props}/>
            </div>
        )
    }
}

export default Comments;
