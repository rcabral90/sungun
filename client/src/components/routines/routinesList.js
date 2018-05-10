import React from 'react';
import {Table} from 'react-bootstrap';


const RoutinesList = (props) =>{
	// const {exercise, reps, sets, weight, rest} = props.workoutData;
	const {exercise, sets} = props.workoutData;

	const tableRow = sets ? sets.map((set, idx)=>{
		return(
			<tr key={idx} index={idx}>
				<td className='text-center'>Set {idx}</td>
				<td className='text-center'> {set['reps']} </td>
				<td className='text-center'> {set['weight']} lb. </td>
				<td className='text-center'> {set['rest']} min. </td>
			</tr>
		)
	}):'';


	return(
		<div>
			<h4>
				{exercise}
			</h4>
			<Table striped responsive condensed bordered hover>
				<thead>
					<tr>
						<th className='text-center'></th>
						<th className='text-center'>Reps</th>
						<th className='text-center'>Weight</th>
						<th className='text-center'>Rest (min)</th>
					</tr>
				</thead>
				<tbody>
					{tableRow}
				</tbody>
			</Table>
		</div>
	)
}

export default RoutinesList;



// {
// 	exercise: 'Name 1',
// 	sets:[
// 		{	
// 			reps: '15',
// 			weight: '40',
// 			rest: '3'
// 		},
// 		{
// 			reps: '12',
// 			weight: '60',
// 			rest: '2'
// 		},
// 		{
// 			reps: '12',
// 			weight: '60',
// 			rest: '2'
// 		}]
// }