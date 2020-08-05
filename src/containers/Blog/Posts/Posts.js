import React, { Component } from 'react';
import instance from '../../../axios';
import { Link, Route } from 'react-router-dom';

import Post from '../../../components/Post/Post'
import classes from "./Posts.css";
import FullPost from '../FullPost/FullPost';

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
                // console.log(updatePosts);
                this.setState( { posts: updatePosts } );
            }
        ).catch( err =>{
            console.log(err);
            // this.setState( { error: true } );
        });
    }

    postSelector = ( id ) => {
        this.props.history.push( { pathname: '/posts/' + id } );
        // this.props.history.push( '/' + id  );
        
    }

    render(){
        
        let posts = <p style={ { textAlign: 'center' } }> Algo Salio Mal!!!!! </p>;
        
        if( !this.state.error ){
            posts = this.state.posts.map( ( p ) => { 
                return (<Link key={ p.id } to={ '/posts/' + p.id }><Post 
                    clicked={ () => this.postSelector( p.id )  }
                    title={ p.title } 
                    author={ p.author } /> </Link>)
            });
        }

        return (
            <div>
                <section className={classes.Posts}>
                    { posts }
                </section>
                <Route path={this.props.match.url + '/:id' } exact component={ FullPost }/>
            </div>
            
        );
    }
}

export default Posts;