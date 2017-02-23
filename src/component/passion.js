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
          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
            <div className="row">
                <img className="img-responsive one-size-img" src={require("../images/night-photography.jpg")}/>
            </div>
            <div className="row passion-text">
              <h5>
                Photographic
              </h5>
            </div>
          </div>
          </div>
    </div>
);
}


export default passion;
