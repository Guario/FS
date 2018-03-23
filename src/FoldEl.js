
import React, {Component} from 'react';

export class FoldEl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: props.index,
            name: props.name,
            children: props.children || [],

        }

    }

    componentWillReceiveProps(nextProps) {
        let child = nextProps.folderItem;
        if (child && child.parent === this.state.name) {
            let children = this.state.children.concat([child]);
            this.setState({children:children});
        }
    }
    renederChild(el, index) {
        return (
            <a><li onClick={this.onSelect} key={index}>
                {el.name}
            </li></a>
        )
    }

    onSelect = () => {

        this.props.selected={
            name: this.state.name,
            type: this.state.folders
        };

    };



    render()
    {
        let {index, name} = this.state;
        return(

            <ul>
                <li onClick={this.props.onSelect} key={index} id="folder">{name}</li>
                {/* this.state.children.map((el, index)=> this.renederChild(el, index)) */}
            </ul>

        )
    }
}

