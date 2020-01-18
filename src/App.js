import React, { useState } from 'react';
import './App.css';

function Stats(list){
	const renderStats = list.list.reduce((acc,item) => {
		if(!acc.includes(item)){
			acc.push(item);
		}
		return acc;
	},[])
	return (<div className = 'component'>{ renderStats.length } unique numbers</div>)
}

function Form({ generateNumber }){	//Add Numbers Here
	return (
		<form className = 'component' onSubmit = {event => event.preventDefault()}>
			<div>Even Numbers Only! <input id = 'check' type = 'checkbox'/></div>
			<input type='submit' onClick = { generateNumber } value = 'Generate Number'/>
		</form>
	)
}

function Numbers(list){  //This is where we're listing numbers
	return (
		<ul className = 'component'>{
			list.list.map((num, idx) => {
				return (<li key = { idx }>{ num }</li>)
			}) }
		</ul>)
}

function App() {
	const [numList, setNumList] = useState([])
	const flag = document.querySelector('#check');
	const generateNumber = flag => {
		//Still won't affect even only
		console.log(flag);
		const num = flag.target.checked ? Math.ceil(Math.random() * 5) * 2 : Math.ceil(Math.random() * 10);
		console.log(flag.target.checked, num);
		setNumList([...numList, num])
	};
	return (
		<div className="App">
			<Stats list = { numList }/>
			<Form generateNumber = { generateNumber }/>
			<Numbers list = { numList }/>
		</div>
	);
}

export default App;