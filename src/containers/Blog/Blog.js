import React, { Component } from 'react';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

import './Blog.css';

import classes from './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import AsyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = AsyncComponent( () =>{
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state={
        auth: false
    }

    render () {        
        return (
            <div className={ classes.Blog }>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                exact
                                to="/posts/"
                                activeClassName="my-active"
                                activeStyle={{ color: '#fa923f', textDecoration: 'underline'  }}>Posts</NavLink ></li>
                            
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
                    { this.state.auth ? <Route path="/newPost" component={ AsyncNewPost }/> : null }
                    <Route path="/newPost" component={ NewPost }/>
                    <Route path="/posts" component={ Posts }/>
                    <Route render={ () => <h1>not found!!!</h1> }/>
                    {/* <Redirect from ="/" to="posts"/> */}
                    {/* <Route path="/:id" exact component={ FullPost }/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;