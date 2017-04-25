import React, { Component } from 'react';
import * as d3 from 'd3';

class DonutPath extends Component {
    constructor(props){
        super(props);

        this.createChart = this.createChart.bind(this);
    }

    componentWillMount(){
        // const radius = this.props.height;
        const radius = 160;

        const outerRadius = radius / 2;
        const innerRadius = radius / 3.3;

        this.arc = d3.arc()
            .outerRadius(outerRadius)
            .innerRadius(innerRadius);

            this.transform = 'translate('+radius/2+','+radius/2+')';
    }

    createChart(_self){
        var paths = (this.props.pie(this.props.data)).map(function(d, i) {

            return (
                <path fill={_self.props.color(i)} d={_self.arc(d)} key={i}/>
            )
        });
        return paths;
    }


    render(){
        var paths = this.createChart(this);

        return(
            <g transform={this.transform}>
                {paths}
            </g>
        )
    }

}

export default DonutPath;