import React, { Component } from 'react';
import { Link } from "react-router";

export default class ArticlesCategory extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        let _this = this;
        let {categories} = this.props;

        return (
            <div className="main_content archives">
                <div className="line_paper sticker">
                    {
                        categories.map(function (cat) {
                            return(
                                <div key={cat.id}>
                                    <h2>{ cat.title }</h2>
                                    <ul>
                                        { cat.data.map(function(data) {
                                            return (
                                                <li className="cat-item" key={data.id}>
                                                    <Link to={'/wordpress/category/'}>{ data.time }</Link>
                                                </li>
                                            )
                                        }) }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }


}

