import React, { Component } from 'react';
import { browserHistory, Link} from 'react-router';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    search = (e) => {

    }

    onInputChange = (e) => {

    }

    render() {
        return (
            <header className="header">
                <div className="logo_wrap">
                    <span className="rope rope_left"></span>
                    <span className="rope rope_right"></span>
                    <div className="fix logo_in">
                        <a href="#" className="fix">
							<span className="sticker paper">
								<span className="logo"></span>
							</span>

                            <span className="logo_txt"></span>
                        </a>
                        <p className="slogan">
                        </p>
                    </div>
                </div>
                <div className="nav fix">
                    <nav className="main_nav">
                        <ul className="fix">
                            <li className="current-menu-item"><Link to="/wordpress">首页</Link></li>
                            <li><Link to="/wordpress/articles">博文</Link></li>
                            <li><Link to="/wordpress/guest-book">留言</Link></li>
                            <li><a href="#">相片</a></li>
                        </ul>
                    </nav>
                    <div className="search_form">
                        <form role="search" method="get" className="rel" id="searchform" onSubmit={this.search}>
                            <input type="text" required placeholder="search here..."
                                   onChange={this.onInputChange}/>
                            <input type="submit" id="searchsubmit" className="abs" value=" "/>
                        </form>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;