import React, { Component } from 'react';
import { reduxForm } from 'redux-form';


import {createComment} from '../actions/action'

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = () => {
        console.log("On Submit");
        //this.props.createComment(props);

    }

    render() {

        //const {fields: {author_name, author_url, author_email, content}, handleSubmit} = this.props;
        return (
            <div className="respond">
                <form onSubmit={this.handleSubmit}>

                    <div>
                        <div className="respond-item">
                            <input placeholder="昵称-Name (必填)" required type="text"/>
                        </div>

                        <div className="respond-item">
                            <input placeholder="邮箱-Email (必填)" required type="text"/>
                        </div>

                        <div className="respond-item">
                            <input placeholder="网址-URL" type="text"/>
                        </div>
                        <div className="respond-item">
                            <textarea required rows="13" placeholder="回复内容-Comment"/>
                        </div>
                        <div className="respond-item">
                            <input name="submit" type="submit" value="提交留言"
                                   className="cover"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

/*CommentForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
    form: 'createCommentForm',                           // a unique name for this form
    fields: ['author_name', 'author_url', 'author_email', 'content', 'parent', 'post'] // all the fields in your form
}, null, {createComment})(CommentForm);*/

export default CommentForm;

