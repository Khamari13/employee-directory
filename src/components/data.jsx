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
        });
    };

    sortUsers = () => {
        const renderList = this.state.activeList.sort((a, b) => {
            if (this.orderList === "asc" || !this.state.orderList) {
                if (a.name.first > b.name.first) {
                    return 1;
                }
                if (a.name.first < b.name.first) {
                    return -1
                }
                return 0;
            } else {
                if (a.name.first < b.name.first) {
                    return 1;
                }
                if (a.name.first > b.name.first) {
                    return -1;
                }
                return 0;
            }
        });
        const newOrder = "asc" === this.state.orderList ? "des" : "asc";
        this.setState({
            orderList: newOrder,
            activeList: renderList
        });
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