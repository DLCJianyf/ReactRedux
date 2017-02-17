import React, { Component } from 'react';

class Category extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="arc_meta">
                <time className="metaItem">{ this.props.dateTime }</time>
                <span>|</span>
                <span>
                    <a href="http://localhost:3001/category/past/" rel="category tag">{ this.props.category }</a>
                </span>
                <span>|</span>
                <span><a href="http://localhost:3001/coward-was-robbed/#comments" className="comments-link" >`{this.props.commentNum} 条评论`</a></span>
            </div>
        )
    }
}

export default Category;