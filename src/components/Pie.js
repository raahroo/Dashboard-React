import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class Chart extends Component{
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        location: 'City'
    }
    render(){
        console.log(this.props)
        return(
            <div className="Pie">
                <Pie
                    data={this.props.activity}
                    options ={{
                       title:{
                           display: this.props.displayTitle,
                           text: 'Cities population in '+ this.props.location,
                           fontSize: 25
                       },
                       legend:{
                           display: this.props.displayLegend,
                           position: this.props.legendPosition,
                       }
                    }}
                />
            </div>
        );
    }
}

export default Pie;