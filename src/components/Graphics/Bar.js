import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarGraphic extends Component{
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        title: 'Write some title'
    }
    render(){
        return(
            <div className="BarGraphic">
                <Bar
                    data={this.props.activity}
                    options ={{
                       title:{
                           display: this.props.displayTitle,
                           text: this.props.title,
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

export default BarGraphic;