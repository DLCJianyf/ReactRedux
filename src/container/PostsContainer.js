import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { getPosts } from '../actions/action';
import Posts from '../components/Posts';

class PostsContainer extends Component {

    constructor(props) {
        super(props);
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    getPageNum = () => {
        return 1;
    }

    handlePageClick = (selected) => {
        console.log(selected);
        let pageNow = selected.selected + 1;
        browserHistory.push(`/page/${pageNow}`);
    }

    componentWillReceiveProps = (nextProps) => {
        let pageNum = this.getPageNum();
        this.props.getPosts();
    }

    render() {
        let _this = this;
        return (
            <Posts {...this.props} {...this}/>
        )
    }
}

/**
 * 1.映射store中的数据（state）到组件 mapStateToProps
 * 2.映射action方法到组件 mapDispatcherToProps
 */

let mapStateToProps = (store) => {
    return {
        postList: store.posts.posts,
        totalPages: store.posts.totalPages
    }
}

export default connect(mapStateToProps, {getPosts: getPosts})(PostsContainer);
