import React, { Component } from 'react';
import axios from 'axios';
import ActivityData from '../data/activity.json'
import Pie from '../components/Graphics/Pie';
import Bar from '../components/Graphics/Bar';
import Line from '../components/Graphics/Line';
import DashboardPanel from '../components/DashboardPanel';
import { Col, Row, Well } from 'react-bootstrap';


class Dashboards extends Component {
  constructor(props){
    super(props);
    this.state = {
      activityData: props.activity, //data from Json
      dashboardData: ''
    }
  }

  componentWillMount(){
    this.getChartData();
    axios.get('http://localhost:3000/dashboards')
    .then(response => {
      //console.log(response, 'response');
      let pickInformation = function(dashboard) {
        return {
          name: dashboard.data.dashboards[0].name,
          datasets: dashboard.data.dashboards[0].datasets,
          labels: dashboard.data.dashboards[0].labels,
        }
      }

      let dashboard = pickInformation(response);

     /*  console.log(dashboard, 'Dashboard');
      console.log(this.state.activityData, 'activityData'); */

      this.setState({
        dashboardData:dashboard    
      });
    })
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      activityData: ActivityData.activity
    })
  }
  render() {
    return (
      <div className="Dashboard container-fluid">
          <Row>
            <DashboardPanel/>
            <Col xs={10} className="Dashboard__content">
                <h1 className="Dashboard__title">Dashboards</h1>
                <Col xs={12} md={6}>
                  <Well> 
                    <Pie activity={this.state.dashboardData} //Comes from the API
                    legendPosition="bottom" title={'Activity by Application'}
                    />
                  </Well>
                </Col>
                <Col xs={12} md={6}>
                  <Well>
                    <Bar activity={this.state.activityData} 
                      displayLegend={false} title={'Errors by App'}
                    />
                  </Well>
                </Col>
                <Col xs={12} md={6}>
                  <Well>
                    <Line activity={this.state.activityData} 
                      legendPosition="bottom" title={'Revenue by hour'}
                    />
                  </Well>
                </Col>
                <Col xs={12} md={6}>
                  <Well>
                    <Line activity={this.state.activityData} 
                      legendPosition="bottom" title={'Response time by App'}
                    />
                  </Well>
                </Col>
            </Col>
          </Row>
      </div>
    );
  }
}

export default Dashboards;
