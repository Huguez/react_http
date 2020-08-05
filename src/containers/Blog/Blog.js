import React, { Component } from 'react';
import Posts from './Posts/Posts';

import classes from './Blog.css';

class Blog extends Component {

    render () {
        
        return (
            <div className={ classes.Blog }>
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">New Post</a></li>
                            <li><a href="/">link</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts />
            </div>
        );
    }
}

export default Blog;