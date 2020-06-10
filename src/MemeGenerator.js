import React, {Component} from 'react';

class MemeGenerator extends Component {
    constructor() {
        super();  
        this.state = {
            topText    : "",
            bottomText : "",
            randomImg  : "",
            allMemes   : []
        };
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data;
            this.setState({ allMemes : memes});
        });        
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default MemeGenerator;