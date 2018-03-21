import React, {Component} from 'react';


export class FoldEl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: props.index,
            name: props.name,
            children: props.children || []
        }

    }

    componentWillReceiveProps(nextProps) {
        let child = nextProps.folderItem;
        if (child && child.parent === this.state.name) {
            let children = this.state.children.concat([child]);
            this.setState({children:children});
        }
    }
    renederChild(el, idx) {
        return (
            <li key={idx}>
                {el.name}
            </li>
        )
    }

    render()
    {

        return(


            <a>
            <ul>
                {this.props.folders.map((item, index) => {
                    return(
                    <li key={index} id="folder">{item.name}</li>
                    )
                })}



                {this.state.children.map((el, idx)=> this.renederChild(el, idx))}
            </ul>
            </a>
        )
    }
}

