import React, {Component} from 'react';

class MemeGenerator extends Component {
    constructor() {
        super();  
        this.state = {
            topText    : "",
            bottomText : "",
            randomImg  : "https://i.imgflip.com/26br.jpg",
            allMemes   : []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data;
            this.setState({ allMemes : memes});
        });        
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const totalMemes = this.state.allMemes.length;
        const randomImg = Math.floor(Math.random() * totalMemes);
        const imgRandom = this.state.allMemes[randomImg].url;
        this.setState({ randomImg : imgRandom});
    }

    render() {
        return (
            <div className="meme-generator-content">
                <form className="meme-form" onSubmit={this.handleSubmit}>
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
                    <button>Gen</button>
                </form>

                <div className="display-meme">
                    <img src={this.state.randomImg} alt="meme" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        );
    }
}

export default MemeGenerator;