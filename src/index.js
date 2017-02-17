import React, { component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import "./sass/style.scss";
import Main from './components/Main';
import PostsContainer from './container/PostsContainer';
import ArticlesCategoryContainer from "./container/ArticlesCategoryContainer";
import CommentsContainer from "./container/CommentsContainer";
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ browserHistory }>
            <Route path="/wordpress" component={ Main }>
                    <IndexRoute component={ PostsContainer }/>
                    <Route path="/wordpress/page/(:pageNum)" component={ PostsContainer }/>
                    <Route path="/wordpress/articles" component={ ArticlesCategoryContainer }/>
                    <Route path="/wordpress/guest-book" component={ CommentsContainer }/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
);