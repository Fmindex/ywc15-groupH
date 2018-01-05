import React, { Component } from 'react';

class Tag extends Component {
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
            height: 56, 
            backgroundColor: `rgba(${this.props.color}1)`, 
            display: 'inline-block', 
            margin: 8, 
            cursor: 'pointer',
            padding: 16,
            color: 'white', 
            boxShadow: shadow,
        }
        : 
        { 
            height: 56, 
            backgroundColor: `rgba(${this.props.color}0.3)`, 
            display: 'inline-block', 
            margin: 8, 
            cursor: 'pointer', 
            padding: 16,
            color: 'white',
            boxShadow: shadow,
        };

        return (
            <div style={tagStyle} 
                onClick={() => this.props.onClick(this.props.major)} 
                onMouseEnter={() => this.onMouseEnter()}
                onMouseLeave={() => this.onMouseLeave()}
            >
                {this.props.text}
            </div>
        );
    }
}
export default Tag;