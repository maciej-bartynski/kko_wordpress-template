import React from 'react';

export var sliderPositions = (parentCSSClass) => {
    const parent = document.querySelector(parentCSSClass);
    const amount = parent.querySelectorAll(".react-slider--item").length;
    let array = [];
    for (let i = 0; i < amount; i++) {
        array.push(i * -100);
    }
    return array;
}

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
            <div className="slider">
                {
                    (() => {
                        return this.props.dims.map((item, id) => {
                            return <div key={`${id}.${this.props.nameClass}`} onClick={(e) => { this.clickHandler(e, id) }} className={`bullet ${this.props.nameClass}`} />
                        });
                    })()
                }
            </div>
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
