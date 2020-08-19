import React,{Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from '.../components/robots';
import SearchBox from'../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'; 

class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.cypress.io/users').then(response=>response.json()).then(users=>this.setState({robots:users}));
	}
	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value})
		
	}
	
	render(){
		const filteredRobots=this.state.robots.filter(robots=>
			{return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()
			);
		})
		if(this.state.robots.length===0){
			return<h1>Loading</h1>
		}else{
        return(
		<div className='tc'>
		<h1 className='f1'>Robofriends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<CardList robots={filteredRobots}/>
		</Scroll>		
		</div>
		);
	
}
}
}
export default App;