import React, {Component} from 'react';
import {Table, PageHeader} from 'react-bootstrap';
import RoutinesList from './routinesList';

import './routines.css';

class Routines extends Component{

	render(){
		const wData = [
			{
				exercise: 'Name 1',
				sets:[
					{	
						reps: '15',
						weight: '60',
						rest: '3'
					},
					{
						reps: '12',
						weight: '90',
						rest: '2'
					},
					{
						reps: '12',
						weight: '20',
						rest: '2'
					}]
			},
			{
				exercise: 'Name 2',
				sets:[
					{	
						reps: '25',
						weight: '40',
						rest: '3'
					},
					{
						reps: '20',
						weight: '60',
						rest: '2'
					},
					{
						reps: '15',
						weight: '60',
						rest: '2'
					}]
			},
			{
				exercise: 'Name three',
				sets:[
					{	
						reps: '10',
						weight: '40',
						rest: '3'
					},
					{
						reps: '5',
						weight: '60',
						rest: '2'
					},
					{
						reps: '3',
						weight: '60',
						rest: '2'
					}]
			}
			// {
			// 	exercise: 'Name 2',
			// 	reps: '10',
			// 	sets:'4',
			// 	weight:'--',
			// 	rest: '2'
			// },
			// {
			// 	exercise: 'Name 3',
			// 	reps: '20',
			// 	sets:'1',
			// 	weight: '15',
			// 	rest: '--'
			// }
		]
		const date = new Date();
		const dateStr = date.toLocaleDateString();
		const routinesList = wData ? wData.map((workout,idx)=>{
			return <RoutinesList key={idx} index={idx} workoutData={workout}/>
		}):'';

		return(
			<div className='container-fluid'>
				<PageHeader className='routinesHeader'>
					Workout Sheet <small>{dateStr}</small>
				</PageHeader>
				<div className='container-fluid'>
					{routinesList}
				</div>
			</div>
		)

	}
}

export default Routines;