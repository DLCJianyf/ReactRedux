import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Category from './Category';

class Posts extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
        this.props.getPosts();
    }

    createMarkup = (html) => {
        return {
            __html: html
        }
    }

    render() {
        let _this = this;
        let {totalPages, postList, handlePageClick} = this.props;
        return (
            <div>
                {
                    postList.map(function(post) {
                    return (
                        <div className="line_paper sticker" key={ post.key }>
                            <h2><a href="http://localhost:3001/coward-was-robbed/">{ post.title }</a></h2>
                            <Category dateTime={ post.dateTime } category={ post.category } commentNum={post.commentNum} />
                            <div className="arc_cont" dangerouslySetInnerHTML={_this.createMarkup(post.exception)}>
                            </div>

                            <div className="tar">
                                <a href="http://localhost:3001/coward-was-robbed/" className="paper btn paper_purple">阅读全文</a>
                            </div>
                        </div>
                    )
                }) }
                <div className="paginate">
                    <ReactPaginate previousLabel={"上一页"}
                                   nextLabel={"下一页"}
                                   breakLabel={<a href="">...</a>}
                                   breakClassName={"break-me"}
                                   pageNum={ totalPages }
                                   marginPagesDisplayed={2}
                                   pageRangeDisplayed={5}
                                   clickCallback={ handlePageClick }
                                   containerClassName={"pagination"}
                                   subContainerClassName={"pages pagination"}
                                   activeClassName={"active"} />
                </div>
            </div>

        )
    }
}

export default Posts;