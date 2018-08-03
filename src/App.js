import React, { Component } from 'react';
import Projects from './components/projects';
import AddProject from './components/addProject';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }
  componentWillMount(){
    this.setState({
      projects : [
        {
          title: 'Electron',
          category: 'pc-GUI'
        },
        {
          title: 'React',
          category: 'web-app'
        },
        {
          title: 'Angular',
          category: 'web-app'
        },
        {
          title: 'Vue',
          category: 'web-app'
        },
        {
          title: 'ionic',
          category: 'web-view'
        },
        {
          title: 'Native Script',
          category: 'mob-app'
        },
      ]
    });
  }
  componentDidMount(){}
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({
      projects : projects
    });
  }
  render() {
    return (
      <div className="App">
        My test app
        <hr/>
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects title='My Projects' projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
