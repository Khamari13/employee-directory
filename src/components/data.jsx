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
            <div className="container">
            <h2>Employee Directory</h2>
            <div className="jumbotron">
            <input onChange={event => this.searchAgent(event.target.value)} />
                <div className="data">
                    <div>
                        <div className="card1">
                            <div className="col">#</div>
                            <div className="col">Employee Image</div>
                            <div className="col" style={{cursor: 'pointer'}}onClick={this.sortUsers}>
                                Name {
                                    this.state.orderList ==='asc'? (''):(this.state.orderList === 'des'? '':'')
                                }
                                </div>
                            <div className="col">Email</div>
                            <div className="col">Cell Phone</div>
                        </div>
                    </div>
                    <div>
                        {this.state.activeList.map((user, index) => (
                            <DataBody user={user} index={index} key={user.cell} />
                        ))}
                    </div>
                </div>
            </div>
            </div>
            </>
        );
    }
}