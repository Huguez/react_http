import React, { Component } from 'react';
import instance from '../../../axios';

import Post from '../../../components/Post/Post'
import classes from "./Posts.css";

class Posts extends Component{
    
    state={
        posts:[],
    }

    componentDidMount(){
        // console.log(this.props.match.url);

        instance.get( '/posts' ).then(
            ( resp ) => {
                const posts = resp.data.slice( 0, 4 );
                const updatePosts = posts.map( ( post ) => { 
                    return { ...post, author:'Huguez' } 
                 } );
                
                this.setState( { posts: updatePosts } );
            }
        ).catch( err =>{
            console.log(err);
            // this.setState( { error: true } );
        });
    }

    postSelector = ( id ) => {
        this.setState( { selectedId: id } )
    }

    render(){
        
        let posts = <p style={ { textAlign: 'center' } }> Algo Salio Mal!!!!! </p>;
        
        if( !this.state.error ){
            posts = this.state.posts.map( ( p ) => { 
                return < Post 
                    clicked={ () => this.postSelector( p.id )  }
                    key={ p.id }
                    title={ p.title } 
                    author={ p.author } />
            });
        }

        return (
            <section className={classes.Posts}>
                { posts }
            </section>
        );
    }
}

export default Posts;