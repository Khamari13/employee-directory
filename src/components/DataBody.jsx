import React from 'react'

const DataBody = props => {
    console.log(props.user)
    return (
        <tr>
            <th scope="col">{props.index + 1}</th>
            <th scope ="col"><img src= {props.user.picture.thumbnail}/></th>
            <th scope="col">{`${props.user.name.first} ${props.user.name.last}`}</th>
            <th scope="col">{props.user.email}</th>
            <th scope="col">{props.user.cell}</th>
        </tr>
    )
}

export default DataBody