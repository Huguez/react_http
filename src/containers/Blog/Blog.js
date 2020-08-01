import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.css';

class Blog extends Component {
    
    state={
        posts:[],
        selectedId: null,
    }
    
    componentDidMount(){
        axios.get( 'https://jsonplaceholder.typicode.com/posts' ).then(
            ( resp ) => {
                const posts = resp.data.slice( 0, 4 );
                const updatePosts = posts.map( ( post ) => { 
                    return { ...post, author:'Huguez' } 
                 } );
                
                this.setState( { posts: updatePosts } );
            }
        );
    }
    
    postSelector = ( id ) => {
        this.setState( { selectedId: id } )
    }


    render () {
        const posts = this.state.posts.map( ( p ) => { 
            return < Post 
                clicked={ () => this.postSelector( p.id )  }
                key={ p.id }
                title={ p.title } 
                author={ p.author } />
         });
        return (
            <div>
                <section className={classes.Posts}>
                    { posts }
                </section>
                <section>
                    <FullPost id={ this.state.selectedId }  />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;