import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class PieGraphic extends Component{
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        location: 'Choose a title'
    }
    render(){
        return(
            <div className="PieGraphic">
                <Pie
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

export default PieGraphic;