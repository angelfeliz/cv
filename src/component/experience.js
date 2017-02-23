import React from 'react';


const experience = (props) => {
  return (
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="row title_box">
                  <div className="hexagono-shape col-lg-2 col-md-2 col-sm-2 col-xs-2">
                    <span className="fa fa-suitcase fa-2x"></span>
                  </div>
                  <div className="col-lg-10 col-md-10 col-sm-11 col-xs-9">
                    <h3 className="title text_box">
                      {props.form.experience}
                    </h3>
                  </div>
                </div>
                {props.form.experiencieDetail.map((item, index)=>{
                  return  (
                    <div key={index} className="row">
                      <div className="row">
                        <div className="col-lg-offset-1 col-lg-10 col-md-offset-2 col-md-9 col-sm-offset-1 col-sm-6 col-xs-offset-2 col-xs-6 padding-right-0 experiences-work-margin-left">
                          <h4 className="company-worked">
                            {item.place}
                          </h4>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-2 col-xs-3 pad-right-0 exp_row_time">
                        <div className="line-upper-div"></div>
                        <p className="time-work-company pull-right">
                          {item.time}
                        </p>
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-5 col-xs-5">
                        <p className="company-position">
                          {item.position}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
  );
}

export default experience
