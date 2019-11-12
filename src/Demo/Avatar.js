import React from 'react';
import Avatarlist from './Avatarlist';
import 'tachyons';

class Avatar extends React.Component{
	constructor(){
		super();
		this.state={
			name:"Welcome to Avatar World"
		}
	}

	namechange(){
		this.setState({name:"So you finally subscribed to avatar page"})
	}

	render(){
		const avatarlistarray=[
		{
			id:1,
			name:"suhail",
			work:"web-developer"
		},
		{
			id:2,
			name:"Lal bahadur",
			work:"competitive programmer"
		},
		{
			id:3,
			name:"Kishor kumar",
			work:"Data scientist"
		},
		{
			id:4,
			name:"Naran",
			work:"Android developer"
		}
		]

		const comp=avatarlistarray.map((value)=>{
			return (<Avatarlist key={value.id} id={value.id} name={value.name}
				work={value.work}/>);
		})
		return(
			<div className="mainpage">
				<h1 className="tc">{this.state.name}</h1>
				{comp}
				<button onClick={ ()=>this.namechange()}>Subscribe</button>
			</div>
			)
	}
}
export default Avatar;