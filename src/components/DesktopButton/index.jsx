import React from "react";
import ReactDOM from "react-dom";
import img from "../../media/desktop/SVG/bg-button-off.svg";
import imgHover from "../../media/desktop/SVG/bg-button-hov-on.svg";
import imgPressed from "../../media/desktop/SVG/bg-button-pres.svg";
import imgDisabled from "../../media/desktop/SVG/bg-button-dis.svg";

class DesktopButton extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            image: img
        } 
        this.clickHandler=this.clickHandler.bind(this);
        this.hoverHandler = this.hoverHandler.bind(this);
        this.mouseoutHandler = this.mouseoutHandler.bind(this);
    }

    clickHandler(e){
        this.setState({
           image: imgPressed
       })
    }

    hoverHandler(e) {
        e.preventDefault;
        this.setState({
            image: imgHover
        })
    }

    mouseoutHandler(e) {
        e.preventDefault;
        this.setState({
            image: img
        })
    }
    
    render(){
        return (
            <div className="main-button">
                <img 
                    onClick={(e)=>{this.clickHandler(e)}} 
                    onMouseOver={(e)=>{this.hoverHandler(e)}} 
                    onMouseOut={(e)=>{this.mouseoutHandler(e)}}
                    className="main-button_image" src={this.state.image}
                />
                <span className="main-button_text">{this.props.text}</span>
            </div>
        )
    }
};

ReactDOM.render(
  <DesktopButton text={'Inicjalny'}/>,
  document.querySelector(".button.sekcja1")
);

ReactDOM.render(
    <DesktopButton text={"Drugi"} />,
    document.querySelector(".button.sekcja2")
);

