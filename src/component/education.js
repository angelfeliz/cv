import React from 'react';

const education = (props) => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="row title_box">
              <div className="hexagono-shape col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <span className="fa fa-mortar-board fa-2x"></span>
              </div>
              <div className="col-lg-11 col-md-10 col-sm-11 col-xs-9">
                <h3 className="title text_box">
                  {props.form.education}
                </h3>
              </div>
            </div>            
            {props.form.educationDetail.map((item,index)=>{
              return (<div key={index} className="row education-space">
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                          <div className="col-lg-11 col-md-11 col-sm-11 col-sm-11 col-xs-11">
                            <h4 className="education-color-black">
                              {item.time}
                            </h4>
                          <p className="education-color-gray">
                              {item.title}
                          </p>
                          <p className="education-color-black">
                              {item.place}
                          </p>
                        </div>
                      </div>);
            })}


          </div>

  );
}

export default education;
