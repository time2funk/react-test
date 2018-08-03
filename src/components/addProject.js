import React, { Component } from 'react';

class addProject extends Component {
	constructor(){
		super();
		this.state = {
			newProject : {}
		}
	}
	submitHandler(e){
		e.preventDefault();
		console.log(this.refs.title.value);
		this.setState({
			newProject : {
				title : this.refs.title.value,
				category : this.refs.category.value,
			} 
		},
		function(){ // callback
			console.log(this.state);
			this.props.addProject(this.state.newProject);
		});
	}
	render() {
		return (
			<div className="addProject">
				<form onSubmit={this.submitHandler.bind(this)}>
					<div>
						<label>Title</label> <br/>
						<input type='text' ref='title'/>
					</div>
					<div>
						<label>Category</label> <br/>
						<input type='text' ref='category'/>
					</div>
					<button type='submit'>Add a Project</button>
				</form>
			</div>
		);
	}
}


export default addProject;
