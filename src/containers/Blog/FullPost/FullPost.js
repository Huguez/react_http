import React, { Component } from 'react';

import classes from './FullPost.css';
// import axios from 'axios';
import instance from '../../../axios';

class FullPost extends Component {
    state={
        loadedPost: null
    }

    componentDidMount(){
        // console.log( this.props);
        this.loadData();
    }

    componentDidUpdate(){
        this.loadData();
    }

    loadData(){
        if( this.props.match.params.id ){
            if(  !this.state.loadedPost || ( this.state.loadedPost && this.state.loadedPost.id != this.props.match.params.id ) ){
                instance.get( '/posts/' + this.props.match.params.id ).then(
                    ( resp ) => {
                        this.setState( { loadedPost: resp.data });
                        // console.log( "aqui" );
                        
                    }
                );
            }
        }
    }

    deletePost = () =>{
        instance.delete( '/posts/' + this.props.match.params.id ).then( 
            ( resp ) => {
                console.log("delete " + this.props.match.params.id );
            }
        );
    }

    render () {
        let post = <p style={{ textAlign: 'center' }} >Please select a Post!</p>;
        
        if( this.props.match.params.id ){
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