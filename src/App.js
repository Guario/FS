import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FoldEl} from './FoldEl';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isEnabled: false,
            objs: [],
            files: [],
            folders: [],
            name: ''

        }

    }

    onInputChange(event) {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
        console.log(name + ": " + event.target.value);
    }


    onChange = (event) => {
        this.setState({
            name: event.target.value
        });

    };


    folderSaver = () => {
        this.setState({
            folders: [...this.state.folders, {name: this.state.name}],
            name: ''
        });
    };

    fileSaver = () => {
        this.setState({
            files: [...this.state.files, {name: this.state.name}],
            name: ''
        });
    };

      Logger =() =>{
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
        console.log('---', 'will update')
    }

    render() {

        return (

            <div>
                <div>
                    <input value={this.state.name} type="text" onChange={this.onChange}/>
                    <button onClick={this.fileSaver}>Add File</button>

                    <button onClick={this.folderSaver}>Add Folder</button>
                    {/*<button onClick={this.Logger}>Log</button>*/}
                </div>



                <ul>


                    <FoldEl folders={this.state.folders} />

                    {
                        this.state.files.map((item, index) => {
                            return (
                                <a>
                                    <li key={index} id="file">{item.name}</li>
                                </a>
                            );
                        })
                    }


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