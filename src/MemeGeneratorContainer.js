import React, {Component} from 'react';
import MemeGeneratorComponent from './MemeGeneratorComponent';

class MemeGenerator extends Component {
    constructor() {
        super();  
        this.state = {
            topText    : "",
            bottomText : "",
            randomImg  : "https://i.imgflip.com/26br.jpg",
            allMemes   : []
        };
    }

    componentDidMount = () => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data;
            this.setState({ allMemes : memes});
        });        
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const totalMemes = this.state.allMemes.length;
        const randomImg = Math.floor(Math.random() * totalMemes);
        const imgRandom = this.state.allMemes[randomImg].url;
        this.setState({ randomImg : imgRandom});
    }

    render() {
        return (
            <MemeGeneratorComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                {...this.state} 
            />
        );        
    }
}

export default MemeGenerator;