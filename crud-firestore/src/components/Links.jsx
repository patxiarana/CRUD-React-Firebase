// eslint-disable-next-line no-unused-vars
import React from 'react';
import { LinkForm } from './LinkForm';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";


export const Links = () => {
  
	const addOrEdit = async (linkObject) => {
    try{
		await addDoc(collection(db, "links"),{linkObject})
		console.log('new task added');
  }catch(err){
    console.error("Error adding document: ", err);
  }
	};

	return (
		<div className=''>
			<LinkForm addOrEdit={addOrEdit} />
			Links
		</div>
	);
};
