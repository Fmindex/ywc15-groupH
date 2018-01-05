import React, { Component } from 'react';

import Tag from './tag';

class Tags extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: 32 }}>
                <Tag text="WEB CONTENT" 
                    isActive={this.props.isActive["content"]} 
                    onClick={this.props.onTagClick} 
                    major="content"
                    color="6, 160, 234, "
                />
                <Tag text="WEB DESIGN" 
                    isActive={this.props.isActive["design"]} 
                    onClick={this.props.onTagClick} 
                    major="design" 
                    color="241, 228, 0, "
                />
                <Tag text="WEB MARKETING" 
                    isActive={this.props.isActive["marketing"]}    
                    onClick={this.props.onTagClick} major="marketing" 
                    color="230, 42, 41, "
                />
                <Tag text="WEB PROGRAMMING" 
                    isActive={this.props.isActive["programming"]}
                    onClick={this.props.onTagClick} 
                    major="programming" 
                    color="0, 201, 165, "
                />
            </div>
        );
    }
}
export default Tags;