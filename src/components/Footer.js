import React, {Component} from 'react';

class Footer extends Component {
    
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <footer className="footer tac">
                <div className="paper sticker">
                    <p>Designed By @Jianyf</p>
                    <p>Copyright © 2013-2015 Jianyf</p>
                </div> 
            </footer>
        )
    }
}

export default Footer;