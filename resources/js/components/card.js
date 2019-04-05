import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Card extends Component {

  render() {
      let classes = this.props.classes ? this.props.classes : 'card';
      return (

        <div className={classes}>
          <div className="card-content">
            <div className="card-img">
              <img src={this.props.events.event_image} alt=""/>
              <span className="date"><h4><i className="fas fa-calendar"></i> {this.props.events.event_time} </h4></span>
              <span className="city"><h4><i className="fas fa-map-marker-alt"></i> {this.props.events.event_city}</h4></span>
            </div>
            <div className="card-desc">
              <h3>{this.props.events.event_title}</h3>
              <p>{this.props.events.event_description}</p>
              </div>
            </div>
              <div>
              <Link to={"/event/" + this.props.events.id} onClick={() => this.reload(this.props.events.id)}>
                <button type="button" className="btn-card btn-primary btn-lg btn-block"> <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>Show more details<span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span></button>
              </Link>
              </div>
        </div>
      )
    }
}
{/* <Link to={"/event/" + events.id} onClick={() => this.reload(events.id)}> */}
