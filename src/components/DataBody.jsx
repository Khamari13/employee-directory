import React from 'react'

const DataBody = props => {
    return (
        <tr>
            <th scope="col">{props.index + 1}</th>
            <th scope="col">{`${props.User.name.first} ${props.User.name.last}`}</th>
            <th scope="col">{props.User.email}</th>
            <th scope="col">{props.User.cell}</th>
        </tr>
    )
}

export default DataBody