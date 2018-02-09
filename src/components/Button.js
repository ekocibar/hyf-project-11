import React from 'react';

export default class Button extends React.Component{
    handleClick = event => {
        event.preventDefault();

        if (!this.props.disabled && this.props.onClick) {
           this.props.onClick();
        };
    };

    render(){
        return(
            <button 
            className={this.props.className}
            disabled={this.props.disabled}
            onClick={this.handleClick}
            >
            {this.props.label}
            </button>
        );
    };
};