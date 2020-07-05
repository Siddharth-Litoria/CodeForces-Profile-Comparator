import React from "react"
import './App.css'
import axios from 'axios'
import { Redirect} from "react-router-dom";
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstUsername: '',
            secondUsername: '',
            formError: { firstUsernameError: '', secondUsernameError: '' },
            fieldValidity: { firstUsernameValid: false, secondUsernameValid: false },
            firstcharacter: {},
            secondcharacter: {},
            loaded: false,
            loadedfirstcharacter: false,
            loadedsecondcharacter: false,
            errorfirst: "",
            errorsecond: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleData = this.handleData.bind(this)
    }
    handleChange(event) {
        const { name, value } = event.target
        let formError = this.state.formError;
        let fieldValidity = this.state.fieldValidity;
        switch (name) {
            case 'firstUsername':
                formError.firstUsernameError =
                    value.length < 1
                        ? 'Please enter first username!'
                        : '';
                fieldValidity.firstUsernameValid = value.length < 1 ? false : true;
                break;
            case 'secondUsername':
                formError.secondUsernameError =
                    value.length < 1
                        ? 'Please enter second username!'
                        : '';
                fieldValidity.secondUsernameValid = value.length < 1 ? false : true;
                break;
            default:
                break;
        }
        this.setState({
            [name]: value,
            formError: formError,
            fieldValidity: fieldValidity,
            errorfirst: "",
            errorsecond: ""
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.handleData()

    }
    handleData() {
        //console.log("here")
        const promise1 = axios.get('https://codeforces.com/api/user.info?handles=' + this.state.firstUsername);
        const promise2 = axios.get('https://codeforces.com/api/user.info?handles=' + this.state.secondUsername);
        promise1.then(response => {
            //console.log(response.data)
            this.setState({
                firstcharacter: response.data,
                loadedfirstcharacter: true,
                errorfirst: ''
            })
        }).catch(error => {
            //console.log(error.response);
            if (error.response) {
                this.setState({ errorfirst: error.response.data.comment,firstcharacter:{} });
            } else {
                this.setState({ errorfirst: error.message });
            }
        })
        promise2.then(response => {
            //console.log(response)
            this.setState({
                secondcharacter: response.data,
                loadedsecondcharacter: true,
                errorsecond: ''
            })
        }).catch(error => {
            //console.log((error.response));
            if (error.response) {
                this.setState({ errorsecond: error.response.data.comment,secondcharacter:{}});
            } else {
                this.setState({ errorsecond: error.message });
            }
        });
        this.setState({

            loaded: true
        })
    }
    render() {
        //console.log(this.state)
        if (this.state.loaded && this.state.loadedfirstcharacter && this.state.loadedsecondcharacter) {
            return <Redirect to={{ pathname: '/Show', state: { data: this.state.firstcharacter, data1: this.state.secondcharacter } }} />
        }
        return (
            <section id="cover" className="min-vh-100">
                <div id="cover-caption">
                    <div className="container">
                        <div className="row text-black">
                            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                                <h1 className="display-4 py-2 text-truncate">Codeforces Profile</h1>
                                <div class="px-2">
                                    <form className="justify-content-center" onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label className="sr-only">First-Username</label>
                                            <input type="text" className="form-control" name="firstUsername" onChange={this.handleChange} placeholder="Enter First Username"></input>
                                            {this.state.firstUsername.length < 1 &&
                                                <span className="spantext">{this.state.formError.firstUsernameError}</span>}
                                            {<span className="spantext">{this.state.errorfirst}</span>}

                                        </div>
                                        <div className="form-group">
                                            <label className="sr-only">Second-Username</label>
                                            <input type="text" className="form-control" name="secondUsername" onChange={this.handleChange} placeholder="Enter Second Username"></input>
                                            {this.state.secondUsername.length < 1 &&
                                                <span className="spantext">{this.state.formError.secondUsernameError}</span>}
                                            {<span className="spantext">{this.state.errorsecond}</span>}
                                        </div>

                                        <button className="btn btn-primary" disabled={!(this.state.fieldValidity.firstUsernameValid && this.state.fieldValidity.secondUsernameValid)}>Compare</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        );
    }
}

export default Search
