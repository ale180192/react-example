import React from "react";


export default class UsersDetail extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: this.props.email,
            id: this.props.id
        }
    }

    handleChange = (e) => {
        this.props.onChange({email: e.target.value, id: this.props.id});
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("click on submit detail", this.props);
        this.props.onSave();
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label>Id</label>
                    <input type="text" value={this.props.id} readOnly/>
                    <label>Email</label>
                    <input type="email" onChange={this.handleChange} value={this.props.email}/>
                    <button type="submit">Save</button>
                </form>
            </React.Fragment>
        )
    }
}