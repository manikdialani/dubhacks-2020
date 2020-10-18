import React, {Component} from 'react';

/* Taking personal information for user accounts */
class Info extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name] : checked}) : this.setState({[name]: value})
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.firstname}
                    name="firstname"
                    placeholder="First Name"
                    onChange={this.handkleChange}
                />
                <br />
                <input
                    type="test"
                    value={this.state.lastName}
                    name="lastname"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                />

                <textarea value={"dub@hacks.com"}/>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={(this.handleChange)}
                    />
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender}
                        onChange={(this.handleChange)}
                    />
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender}
                        onChange={(this.handleChange)}
                    />
                </label>

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are a {this.state.gender}</h2>
            </form>
        )
    }
}

export default Info;
