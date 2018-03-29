import React from 'react';

const RoutinesList = (props) =>{
	const {exercise, reps, sets, weight, rest} = props.workoutData;

	return(
		<tr>
			<td className='text-center'>{exercise}</td>
			<td className='text-center'>{reps}</td>
			<td className='text-center'>{sets}</td>
			<td className='text-center'>{weight} lb.</td>
			<td className='text-center'>{rest} min.</td>
		</tr>
	)
}

export default RoutinesList;