import React from 'react';

function MemeGeneratorComponent(props) {
    return (
        <div className="meme-generator-content">
            <form className="meme-form" onSubmit={props.handleSubmit}>
                <label>
                    <input 
                        type="text" 
                        name="topText" 
                        value={props.topText}
                        placeholder="Top Text"
                        onChange={props.handleChange}
                    />
                </label>
                <label>
                    <input 
                        type="text" 
                        name="bottomText" 
                        value={props.bottomText}
                        placeholder="Bottom Text"
                        onChange={props.handleChange}
                    />
                </label>
                <button>Gen</button>
            </form>

            <div className="display-meme">
                <img src={props.randomImg} alt="meme" />
                <h2 className="top">{props.topText}</h2>
                <h2 className="bottom">{props.bottomText}</h2>
            </div>
        </div>
    );
}

export default MemeGeneratorComponent;