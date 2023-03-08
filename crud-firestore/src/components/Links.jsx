// eslint-disable-next-line no-unused-vars
import React , {useEffect, useState}from 'react';
import { LinkForm } from './LinkForm';
import { db } from '../firebase';
import { collection, addDoc,query, onSnapshot } from "firebase/firestore";


export const Links = () => {
  const [links, setlinks] = useState()

	const addOrEdit = async (linkObject) => {
    try{
		await addDoc(collection(db, "links"),{linkObject})
		console.log('new task added');
  }catch(err){
    console.error("Error adding document: ", err);
  }
	};
 
  const getLinks = async() => {
    try{
      
const q = query(collection(db, "links"));
  onSnapshot(q, (querySnapshot) => {
  const Website = [];
  querySnapshot.forEach((doc) => {
    Website.push({...doc.data(), id:doc.id});
  });
  console.log("url websites ", Website);
});

    }catch(err) {
      console.error("Error adding document: ", err);
    }
  }


  useEffect( () => {
    getLinks()
  },[])

	return (
		<div className=''>
			<LinkForm addOrEdit={addOrEdit} />
			Links
		</div>
	);
};
