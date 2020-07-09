import React from 'react'

const DataBody = props => {
    console.log(props.user)
    return (
        <card>
            <div  className="col"><img src= {props.user.picture.thumbnail}/></div>
            <div  className="col">{`${props.user.name.first} ${props.user.name.last}`}</div>
            <div  className="col">{props.user.email}</div>
            <div  className="col">{props.user.cell}</div>
        </card>
    )
}

export default DataBody