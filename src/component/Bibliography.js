import React from 'react';

const Bibliography = (props)=>{
      return (

        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="row title_box">
            <div className="hexagono-shape col-lg-2 col-md-2 col-sm-2 col-xs-2">
              <span className="fa fa-address-card-o fa-2x"></span>
            </div>
            <div className="col-lg-11 col-md-10 col-sm-11 col-xs-9">
              <h3 className="title text_box">
                {props.form.bibliography}
              </h3>
            </div>
          </div>
          <p className="paragraph">
            {props.form.bibliographyDetail}
          </p>
        </div>
      
      );
}

export default Bibliography;
