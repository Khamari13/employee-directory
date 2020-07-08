import React, { Component } from "react";
import User from "../lib/employee.json";
import DataBody from "./DataBody";
export default class Data extends Component {
    state = {
        mainList: [],
        activeList: []
    };
    componentDidMount() {
        this.setState({
            mainList: User,
            activeList: User
        });
    }
    searchAgent = term => {
        const newList = this.state.mainList.filter(
            user =>
                user.name.first.toLowerCase().includes(term.toLowerCase()) || user.name.last.toLowerCase().includes(term.toLowerCase())
        );
        this.setState({
            activeList: newList
        })
    };
    render() {
        return (

            <>
                <input onChange={event => this.searchAgent(event.target.value)} />
                <table className="data">
                    <thread>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Cell Phone</th>
                        </tr>
                    </thread>
                    <tbody>
                        {this.state.activeList.map((user, index) => (
                            <DataBody user={user} index={index} key={user.cell} />
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
}