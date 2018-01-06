import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMouseEnter: false,
        }
        this.onMouseEnter = this.onMouseEnter.bind(this);
    }

    onMouseEnter() {
        this.setState({
            onMouseEnter: true,
        })
    }

    onMouseLeave() {
        this.setState({
            onMouseEnter: false,
        })
    }
    render() {
        let shadow = !this.state.onMouseEnter ? '2px 2px 1px grey' : '4px 4px 2px grey';
        let tagStyle = this.props.isActive ? 
        {
            height: this.props.height, 
            width: '75%',
            textAlign: 'center',
            backgroundColor: `rgba(${this.props.color}1)`, 
            display: 'inline-block', 
            borderRadius: '16px',
            margin: '0px 8px 8px 8px', 
            fontSize: '14px',
            cursor: 'pointer',
            padding: 8,
            color: 'white', 
            // boxShadow: shadow,
        }
        : 
        { 
            height: this.props.height, 
            width: '90%',
            textAlign: 'center',
            backgroundColor: `rgba(${this.props.color}0.3)`, 
            display: 'inline-block', 
            margin: '0px 8px 8px 8px', 
            cursor: 'pointer', 
            padding: 8,
            color: 'white',
            boxShadow: shadow,
        };

        return (
            <div style={tagStyle} className={this.props.className}
                onMouseEnter={() => this.onMouseEnter()}
                onMouseLeave={() => this.onMouseLeave()}
            >
                {this.props.text}
            </div>
        );
    }
}
export default Button;