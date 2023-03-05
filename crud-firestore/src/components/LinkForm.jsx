// eslint-disable-next-line no-unused-vars
import React from 'react';

export const LinkForm = () => {
	return (
		<form className='card card-body'>
			<div className='form-group input-group'>
				<div className='input-group-text bg-light'>
					<i className='material-icons'>instert_link</i>
				</div>
				<input
					type='text'
					className='form-control'
					placeholder='url'
					name='url'
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
				/>
			</div>
			<div className='form-group'>
				<textarea
					name='descrpition'
					rows='3'
					className='form-control'
					placeholder='write a description'
				/>
			</div>
            <button className='btn btn-primary btn-block'>
                Save
            </button>
		</form>
	);
};
