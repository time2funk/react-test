import React, { Component } from 'react';

class ProjectsItem extends Component {
	// constructor(){
	// 	super();
	// }	
	render() {
	    return (
	      <li className="Projects-Item">
	        <strong>{this.props.title}</strong> - {this.props.category}
	      </li>
	    );
	}
}



export default ProjectsItem;
