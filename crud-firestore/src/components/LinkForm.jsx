// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export const LinkForm = () => {
	const [values, setValues] = useState({
		url: '',
		name: '',
		description: ''
	});

const handleInputChange = (e) => { 
    e.preventDefault()
    const {name , value} = e.target ;
    setValues({...values, [name]:value})
}

	const handlesubmit = (e) => {
		e.preventDefault();
		console.log(values);
	};

	return (
		<form className='card card-body' onSubmit={handlesubmit}>
			<div className='form-group input-group'>
				<div className='input-group-text bg-light'>
					<i className='material-icons'>instert_link</i>
				</div>
				<input
					type='text'
					className='form-control'
					placeholder='url'
					name='url'
                    onChange={handleInputChange}
				/>
			</div>
			<div className='form-group input-group'>
				<div className='input-group-text bg-light'>
					<i className='material-icons'>create</i>
				</div>
				<input
					type='text'
					className='form-control'
					name='name'
					placeholder='Website name'
                    onChange={handleInputChange}
				/>
			</div>
			<div className='form-group'>
				<textarea
					name='descrpition'
					rows='3'
					className='form-control'
					placeholder='write a description'
                    onChange={handleInputChange}
				/>
			</div>
			<button className='btn btn-primary btn-block'>Save</button>
		</form>
	);
};
