import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getComments} from "../actions/action";
import Comments from "../components/Comments";


class CommentsContainer extends Component {

    constructor(props) {

        super(props);
    }

    componentWillMount = () => {

        this.props.getComments();

    }

    render() {
        return (
            <Comments {...this.props} {...this}/>
        )
    }
}


/*
 * 1.映射store当中的数据到组件
 * 2.映射action方法到组件
 *
 * */

function mapStateToProps(store) {

    return {
        comments: store.comments.allComments.data
    }
}

export default connect(mapStateToProps, { getComments })(CommentsContainer);
