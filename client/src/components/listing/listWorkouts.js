import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const ListWorkouts = (props) => {
    const {workouts, header} = props;
    return (
        <div>
            <h1>{header}</h1>
            <ListGroup>
                {workouts.map((item, index) => {
                    return <ListGroupItem href={`#link${item.link}`} key={index}>{item.name}</ListGroupItem>
                })
                }
            </ListGroup>
        </div>
    )
}
export default ListWorkouts;
