import React, { Component } from 'react';

import classes from './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    state={
        loadedPost: null
    }



    componentDidUpdate(){
        if( this.props.id ){
            if(  !this.state.loadedPost || ( this.state.loadedPost && this.state.loadedPost.id !== this.props.id ) ){
                axios.get( '/posts/' + this.props.id ).then(
                    ( resp ) => {
                        this.setState( { loadedPost: resp.data });
                        // console.log( "aqui" );
                        
                    }
                );
            }
        }
    }

    deletePost = () =>{
        axios.delete( '/posts/' + this.props.id ).then( 
            ( resp ) => {
                console.log("delete " + this.props.id );
            }
        );
    }

    render () {
        let post = <p style={{ textAlign: 'center' }} >Please select a Post!</p>;
        
        if( this.props.id ){
            post = <p style={{ textAlign: 'center' }} >Loading...!!!</p>;
        }

        if( this.state.loadedPost ){
            // console.log( this.state.loadedPost.title );
            post = (
                <div className={classes.FullPost}>
                    <h1>{ this.state.loadedPost.title }</h1>
                    <p>{ this.state.loadedPost.body }</p>
                    <div className={classes.Edit}>
                        <button onClick={ this.deletePost }  className={classes.Delete}>Delete</button>
                    </div>
                </div>
            );
        }
        
        return post;
    }
}

export default FullPost;