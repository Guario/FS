
class FSfrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ""};

        this.folderSubmit = this.folderSubmit.bind(this);
        this.fileSubmit = this.fileSubmit.bind(this);
    }

    onChange(e) {
        let val = e.target.value;
        this.setState({name: val});
    }



    folderSubmit(e) {
        e.preventDefault();

    }

    fileSubmit(e) {
        e.preventDefault();

    }

    render() {
        return (
            <form>
                <p>
                    <label>Name folder or file</label><br/>

                    <input type='text' value={this.state.name} onChange={this.onChange}/>
                </p>
                <button onClick={this.folderSubmit}>Create Folder</button>
                <button onClick={this.fileSubmit}>Create File</button>

            </form>
        );
    }

}
ReactDOM.render(
    <FSfrom />,
    document.getElementByld("index")
)