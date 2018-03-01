import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const List_workouts = (props) => {
    const {workouts} = props;
    return(
        <ListGroup>
            {
                workouts.map((item,index)=>{
                    return <ListGroupItem href={`#link${item.link}`} key={index}>{item.name}</ListGroupItem>
                })
            }
        </ListGroup>
    )
}
export default List_workouts;

