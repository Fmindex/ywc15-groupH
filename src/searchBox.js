import React, { Component } from 'react';
class SearchBox extends Component {
    render() {
        return (
            <div style={this.props.style}>
                <input type="text" className="form-control" style={{ height: 36 }} ref="search" onChange={() => this.props.onKeyPressed(this)} value={this.props.value} />
            </div>
            
        );
    }
}
export default SearchBox;   