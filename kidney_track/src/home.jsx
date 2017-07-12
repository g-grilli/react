import React, { Component } from 'react';
import {Card, CardHeader, CardTitle, CardActions, CardText} from 'material-ui/Card';
import movie from './logo.svg';
import './App.css'

class Main extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'
        }
    }

    render () {
        return (
          <div className='fullscreen-bg'>
            <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            <div>
             <h1>HELLO</h1>
            </div>
            </div>
        )
    }
};
export default Main