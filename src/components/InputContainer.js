import React from 'react';

export default class InputContainer extends React.Component {
    
    render() {
        return(
            <div>
                <label>{this.props.label}</label>
                <input type='text'
                value={this.props.value}
                name={this.props.name}
                onChange={this.props.onChange}
                />
            </div>
        );
    };
};