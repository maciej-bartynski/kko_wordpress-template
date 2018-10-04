import React from 'react';
import styled from 'styled-components';

export var sliderPositions = (parentCSSClass) => {
    const parent = document.querySelector(parentCSSClass);
    const amount = parent.querySelectorAll(".react-slider--item").length;
    let array = [];
    for (let i = 0; i < amount; i++) {
        array.push(i * -100);
    }
    return array;
}

const ReactSlider = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and(min-width: 900px) {
    display: none;
  }
  .bullet {
    width: 8px;
    height: 8px;
    margin: 8px;
    border-radius: 4px;
    background-color: #333333;
  }
  .activebullet {
    background-color: #4cbc1d;
  }
  @media only screen and (min-width: 900px) {
    &.slider {
      display: none;
    }
  }
`;

export class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            position: this.props.position,
            dims: this.props.dims
        }
        this.automaticposition=0,
        this.clickHandler = this.clickHandler.bind(this),
        this.automaticSlide = this.automaticSlide.bind(this),
        this.onClickSlide = this.onClickSlide.bind(this);
        this.timer = null
    }

    onClickSlide(num){
        document.querySelector(this.props.movingItem).style.left = num + "%";
    }

    automaticSlide() {
        this.automaticposition += 1;
        this.clickHandler(null, this.automaticposition);
        if (this.automaticposition === this.state.dims.length-1) {
            this.automaticposition = -1;
        }
    };

    clickHandler(e, num) {
        clearTimeout(this.timer);
        this.setState({
            position: num
        })
        this.timer = setTimeout(this.automaticSlide, 15000)
    }

    render() {
        return (
            <ReactSlider className="slider">
                {
                    (() => {
                        return this.props.dims.map((item, id) => {
                            return <div key={`${id}.${this.props.nameClass}`} onClick={(e) => { this.clickHandler(e, id) }} className={`bullet ${this.props.nameClass}`} />
                        });
                    })()
                }
            </ReactSlider>
        );
    }

    componentDidMount() {
        let active = document.querySelectorAll(`.bullet.${this.props.nameClass}`)[this.state.position];
        active.classList.add('activebullet');
        setTimeout(this.automaticSlide, 15000);
    }

    componentDidUpdate() {
        let active = document.querySelectorAll(`.bullet.${this.props.nameClass}`)[this.state.position];
        for (let i = 0; i < document.querySelectorAll(`.bullet.${this.props.nameClass}`).length; i++) {
            document.querySelectorAll(`.bullet.${this.props.nameClass}`)[i].classList.remove('activebullet');
        }
        active.classList.add('activebullet');
        this.onClickSlide(this.state.dims[this.state.position]);
    }
}
