import React, { Component } from 'react';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

import './Blog.css';

import classes from './Blog.css';
import { Route, NavLink, Switch } from 'react-router-dom';

class Blog extends Component {



    render () {        
        
        return (
            <div className={ classes.Blog }>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                exact
                                to="/"
                                activeClassName="my-active"
                                activeStyle={{ color: '#fa923f', textDecoration: 'underline'  }}>Home</NavLink ></li>
                            <li><NavLink 
                                activeClassName="my-active"
                                activeStyle={{ color: '#fa923f', textDecoration: 'underline'  }}
                                to={{ 
                                pathname: '/newPost', 
                                hash: '#submit', 
                                search: '?quick-submit=true' }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={ Posts }/>
                    <Route path="/newPost" component={ NewPost }/>
                    <Route path="/:id" exact component={ FullPost }/>
                </Switch>
            </div>
        );
    }
}

export default Blog;