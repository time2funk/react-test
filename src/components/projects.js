import React, { Component } from 'react';
import ProjectItem from './projectItem';

class Projects extends Component {
	// constructor(){
	// 	super();
	// }
	render() {
		if(this.props.projects)
			this.projectItems = this.props.projects.map( (project,id) => {
				return (
					<ProjectItem key={id} title={project.title} category={project.category}/>
				);
			});
		else
			this.projectItems = [];

		console.log(this.props);
		console.log(this.projectItems);
		
		return (
			<div className="Projects">
				<h2>
					{this.props.title}
				</h2>
				<ul>
					{this.projectItems}
				</ul>
			</div>
		);
	}
}

export default Projects;
