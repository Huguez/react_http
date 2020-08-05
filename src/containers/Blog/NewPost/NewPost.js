import React, { Component } from 'react';
// import axios from 'axios';
import instance from '../../../axios';
import classes from  './NewPost.css';
import { Redirect } from 'react-router-dom';


class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    componentDidMount(){
        console.log(this.props);
    }

    postData = () => {
        const data = {
            title: this.state.title,
            content: this.state.content,
            autthor: 'Huguez'
        };

        instance.post( '/posts', data ).then( 
            ( resp ) => {
                console.log(resp);
                this.props.history.replace('/posts');

                // this.setState({ submitted: true });
            }
        );
    }

    render () {
        // let redirect = null;
        // if( this.state.submitted ){
        //     redirect = <Redirect to="/posts" />
        // }
        return (
            <div className={classes.NewPost}>
                {/* { redirect } */}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})} >
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                    <option value="Huguez">Huguez</option>
                </select>
                <button onClick={ this.postData }>Add Post</button>
            </div>
        );
    }
}

export default NewPost;