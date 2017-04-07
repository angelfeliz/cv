import React from 'react';

const passion = (props) =>{
return (
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="row title_box">
            <div className="hexagono-shape col-lg-2 col-md-2 col-sm-2 col-xs-2">
              <span className="fa fa-grav fa-2x"></span>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-11 col-xs-9">
              <h3 className="title text_box">
                {props.form.passion}
              </h3>
            </div>
          </div>
          <div className="row passion-space">
          <div className="col-lg-1 col-md-2 col-sm-4 col-xs-12">
            <div className="row">
                <img className="img-responsive one-size-img" src={require("../images/camera-1.png")}/>
            </div>
              <div className="row passion-text">
                <h5>
                    {props.form.passions[0]}
                </h5>
              </div>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-4 col-xs-12">
            <div className="row">
                <img className="img-responsive one-size-img" src={require("../images/exercise-1.png")}/>
            </div>
              <div className="row passion-text">
                <h5>
                    {props.form.passions[1]}
                </h5>
              </div>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-4 col-xs-12">
            <div className="row">
                <img className="img-responsive one-size-img" src={require("../images/music-2.png")}/>
            </div>
              <div className="row passion-text">
                <h5>
                    {props.form.passions[2]}
                </h5>
              </div>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-4 col-xs-12">
            <div className="row">
                <img className="img-responsive one-size-img" src={require("../images/adventure-1.png")}/>
            </div>
              <div className="row passion-text">
                <h5>
                    {props.form.passions[3]}
                </h5>
              </div>
          </div>
          </div>
    </div>
);
}


export default passion;
