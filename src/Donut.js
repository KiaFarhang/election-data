import React, { Component } from 'react';
import * as d3 from 'd3';
import DonutPath from './DonutPath';

class Donut extends Component {
	constructor(props){
		super(props);

		this.state = 
		{
			data: [],
			width: 0
		};
	}
	componentWillMount(){


		const width = 360;
		const height = 360;
		const padAngle = 0;

		this.pie=d3.pie()
            .value(function(d){return d.percent})
            .padAngle(padAngle)
            .sort(null);

        this.color = d3.scaleOrdinal()
    		.range(['#A6241A', '#1A83F2', '#1AA655']);

    	const data = [
    		{label: 'Republican', percent: 31.62},
        	{label: 'Democrat', percent: 61.73},
        	{label: 'Other',percent: 6.65}]; 


        this.setState({'data':data,width:this.props.width});

	}



	render(){
		return (
            <div>
                <svg id={this.props.id} width={this.state.width}

                     height={this.props.height} className="shadow">

                    <DonutPath width={this.state.width} height={this.props.height}
                                    pie={this.pie} color={this.color} data={this.state.data}/>

                </svg>
            </div>
            );
	}

}


export default Donut;