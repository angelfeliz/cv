import React from 'react';


const language = (props) => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="row title_box">
              <div className="hexagono-shape col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <span className="fa fa-american-sign-language-interpreting fa-2x"></span>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-8 col-xs-9">
                <h3 className="title text_box">
                  {props.form.language}
                </h3>
              </div>
            </div>
            {props.form.languageDetail.map((item, index) => {

            return(  <div key={index} className="row">
                      <div className="row language_space language">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 padding-right-0">
                        <h4 className="">
                          {item.language}
                        </h4>
                      </div>
                     </div>
                <div className="row language_space language_level">
                  <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                    <p className="">
                      {item.level}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

    </div>
  );
}


export default language;
