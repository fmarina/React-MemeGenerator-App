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
            <div>
                <form className="meme-form">
                    <label>
                        <input 
                            type="text" 
                            name="topText" 
                            value={this.state.topText}
                            placeholder="Top Text"
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        <input 
                            type="text" 
                            name="bottomText" 
                            value={this.state.bottomText}
                            placeholder="Bottom Text"
                            onChange={this.handleChange}
                        />
                    </label>

                </form>

            </div>
        );
    }
}

export default MemeGenerator;