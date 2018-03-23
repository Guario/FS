import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FoldEl} from './FoldEl';

export class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isEnabled: false,
            objs: [],
            name: '',
        }

    }


    onChange = (event) => {
        this.setState({
            name: event.target.value
        });

    };


    folderSaver = () => {
        this.props.folderSaver(this.state.name);
    };

    fileSaver = () => {
        this.props.fileSaver(this.state.name);
    };

    Logger = () => {
        console.log('files');
        console.log(this.state.files);
        console.log('folders');
        console.log(this.state.folders);
    };

    componentWillMount() {
        console.log('element will be mount')
    }

    componentDidMount() {
        console.log('element was mounted')
    }


    componentWillUpdate(nextProps, nextState) {
        console.log( 'will update')
        // nextProps
        if (this.props.item !== nextProps.item) {
            let _objs = this.state.objs;
            this.setState({
                objs: _objs.concat(nextProps.item)
            })
        }
    }

    renderItems(el, index) {
        if (el.type === 'folder') {
            return (<FoldEl name={el.name} index={el.index} children={el.children}/>)
        }

        return (
            <a><li onClick={this.onSelect} key={index}>
                {el.name}
            </li></a>
        )
    }


    render() {

        return (

            <div>
                <div>
                    <input value={this.state.name} type="text" onChange={this.onChange}/>
                    <button onClick={this.fileSaver}>Add File</button>

                    <button onClick={this.folderSaver} >Add Folder</button>
                    {/*<button onClick={this.Logger}>Log</button>*/}
                </div>


                <ul>
                    {this.state.objs.forEach((el, index) => this.renderItems(el, index))}
                </ul>
            </div>
        );
    }


}

export default connect(
    state => ({
        objs: state.objs
    }),
    dispatch => ({
        fileSaver: (name) => {
            const payload = {
                id: Date.now().toString(),
                name
            };
            dispatch({type: 'ADD_FILE', payload});
        },
        folderSaver: (name) => {
            const payload = {
                id: Date.now().toString(),
                name
            };
            dispatch({type: 'ADD_FOLDER', payload});
        }
    })
)(App);