import React from 'react';
import './Demo.css';
import 'tachyons';

class Avatarlist extends React.Component{
	
	render(){
		const src="https://joeschmoe.io/api/v1/"+this.props.name;
		return(
			<div className=" avatarstyle ma4 bg-light-purple dib pa3 grow shadow-4">
				<img src={src} alt="Avatar"/>
				<h1 className="">{this.props.name}</h1>
				<p>{this.props.work}</p>
			</div>
			)
	}
}

export default Avatarlist;