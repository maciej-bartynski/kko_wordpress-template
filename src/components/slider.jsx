import React from 'react';

const slideTheSlider = (num) => {
    document.querySelector(".tilt--positioner").style.left = num + "%";
}

export class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            dims: [0, -25, -50, -75]
        }
        this.automaticposition=0,
        this.clickHandler = this.clickHandler.bind(this),
        this.automaticSlide = this.automaticSlide.bind(this),
        this.timer = ()=>{setTimeout(this.automaticSlide, 15000)},
        this.timer()
    }


    automaticSlide() {
        this.automaticposition += 1;
        this.clickHandler(null, this.automaticposition);
        if (this.automaticposition === 3) {
            this.automaticposition = -1;
        }
        this.timer()
    };

    clickHandler(e, num) {
        clearTimeout(this.timer);
        this.setState({
            position: num
        })
    }

    render() {
        return (
            <div className="slider">
                <div onClick={(e) => { this.clickHandler(e, 0) }} className="bullet" />
                <div onClick={(e) => { this.clickHandler(e, 1) }} className="bullet" />
                <div onClick={(e) => { this.clickHandler(e, 2) }} className="bullet" />
                <div onClick={(e) => { this.clickHandler(e, 3) }} className="bullet" />
            </div>
        );
    }

    componentDidMount() {
        let active = document.querySelectorAll('.bullet')[this.state.position];
        active.classList.add('activebullet');
    }

    componentDidUpdate() {
        let active = document.querySelectorAll('.bullet')[this.state.position];
        for (let i = 0; i < document.querySelectorAll('.bullet').length; i++) {
            document.querySelectorAll(".bullet")[i].classList.remove('activebullet');
        }
        active.classList.add('activebullet');
        slideTheSlider(this.state.dims[this.state.position]);
    }
}
