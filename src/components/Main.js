import React, { Component, Children } from 'react';

import Header from './Header';
import Footer from './Footer';


class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrap">
                <div>
                    <Header/>
                    <div className="main_content arc_list">
                        { this.props.children }
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Main;
