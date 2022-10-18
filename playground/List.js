import React, {Component} from 'react';

class List extends Component {
    render() {
        return (
            <ol>
                {this.props.tasksList.map((task, index) => <li key={index}>{task}</li>)}
            </ol>
        );
    }
}

export default List;
