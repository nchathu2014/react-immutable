import React from 'react';
import {List,Map} from 'immutable';

export default class App extends React.Component{

	constructor(){
		super();

		this.state={
			data:Map({count:0,items:List()})
		}
	}

	_handleCountClick(){
		console.log("_handleCountClick");
		this.setState(({data})=>({
			data:data.update('count',v=>v+1)
		}));
	}

	_handleAddItemClick(){
		console.log("_handleAddItemClick");
		this.setState(({data})=>({
			data:data.update('items',list=>list.push(data.get('count')))
		}));
	}

	_removeItem(index){
		console.log("_removeItem -> "+index);
		this.setState(({data})=>({
			data:data.update('items',list=>list.delete(index))
		}))
	}

	_editItem(index){
		console.log("_editItem -> "+index);
		this.setState(({data})=>({
			data:data.update('items',list=>list.set(index,"Nuwan"))
		}));
	}


	render(){
        var countData = this.state.data;
		
		return(
			<div>
				<h2>Immutable data and ReactJS</h2>
				 <button onClick={this._handleCountClick.bind(this)}>Add to count</button>
        		 <button onClick={this._handleAddItemClick.bind(this)}>Save count</button>

        		  <div>
			          Count: {countData.get('count')} <br/>
			          Count List : {countData.get('items').map((item,index)=>{
			          	return( <div key={index} id={index} >
			          				<div>
				          				<span>{item}</span>
				          				<span 
				          				onClick={this._removeItem.bind(this,index)}>[X]</span>
				          				<span 
				          				onClick={this._editItem.bind(this,index)}>[E]</span>

			          				</div>
			          			
			          			
			          		    </div>);
			          })}
			      </div>
			</div>
		);
	}
}