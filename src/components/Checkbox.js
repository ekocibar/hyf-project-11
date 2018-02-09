import React from 'react';

export default class Checkbox extends React.Component{

    handleClick = event => {
        event.preventDefault();
    };

    render(){
        return(
            <div className="CheckBox">
                <label>
                    <input type='checkBox' className={this.props.className}
                     onChange={this.props.onChange}
                    />
                    <span>HomWork</span>
                </label>

                <label>
                    <input type='checkBox' className={this.props.className}
                     onChange={this.props.onChange}
                    />
                    <span>Attendance</span>
                </label>
            </div>
        );
    };
};