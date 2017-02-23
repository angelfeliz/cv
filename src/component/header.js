import React from 'react';



const  Head = (props)=>{
  return (
    <div>
               <div className="row picture-container">
                  <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
                      <div className="img-mark">
                          <img src={require('../images/face.jpg')} className="img-responsive img-rounded" alt="my picture" />
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-5 col-xs-8 full-name">
                      <h3>Angel Eduardo Rodríguez</h3>
                  </div>
                  <div className="row hidden-lg hidden-md hidden-sm visible-xs career-container">
                      <div className="col-xs-12 first_row title-blue hidden-lg hidden-md hidden-sm visible-xs">
                          <h5 className="career-name">{props.form.position}</h5>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-8 hidden-xs pull-right top-margin-small
                              social-content">
                      <div className="row  social-network">
                          <span>erodriguezfeliz@gmail.com</span>
                          <span className="fa-stack fa-lg">
                            <span className="fa  fa-stack-2x"></span>
                          <span className="fa fa-envelope-o fa-stack-1x fa-inverse" aria-hidden="true"></span>
                          </span>
                      </div>
                      <div className="row social-network">
                          <a href="https://www.freecodecamp.com/angelfeliz">angelfeliz</a>
                          <span className="fa-stack fa-lg">
                              <span className="fa  fa-stack-2x"></span>
                          <span className="fa fa-free-code-camp fa-1x fa-stack-1x fa-inverse" aria-hidden="true"></span>
                          </span>
                      </div>
                      <div className="row social-network">
                          <a href="https://github.com/angelfeliz">angelfeliz</a>
                          <span className="fa-stack fa-lg">
                          <span className="fa  fa-stack-2x"></span>
                          <span className="fa fa-github fa-stack-1x fa-inverse" aria-hidden="true"></span></span>
                      </div>
                      <div className="row social-network">
                          <a href="https://do.linkedin.com/in/erodriguezfeliz">erodriguezfeliz</a>
                          <span className="fa-stack fa-lg">
                          <span className="fa  fa-stack-2x"></span>
                          <span className="fa fa-linkedin-square fa-1x fa-stack-1x fa-inverse" aria-hidden="true"></span>
                          </span>
                      </div>
                 </div>
              </div>
              <div className="row hidden-lg hidden-md hidden-sm">
                <div className="social-content hidden-lg hidden-md hidden-sm visible-xs col-xs-offset-4 col-xs-8">
                  <div className="social-network social-network-1">
                    <span className="color-white">erodriguezfeliz@gmail.com</span>
                    <span className="fa-stack fa-lg">
                      <span className="fa  fa-stack-2x"></span>
                      <span className="fa fa-envelope-o fa-stack-1x fa-inverse" aria-hidden="true"></span>
                    </span>
                   </div>
                  <div className="social-network social-network-2">
                    <a href="https://www.freecodecamp.com/angelfeliz">angelfeliz</a>
                    <span className="fa-stack fa-lg">
                      <span className="fa fa-stack-2x"></span>
                      <span className="fa fa-free-code-camp fa-1x fa-stack-1x fa-inverse" aria-hidden="true"></span>
                    </span>
                  </div>
                </div>
               </div>
              <div className="row hidden-lg hidden-md hidden-sm">
                <div className="social-content hidden-lg hidden-md hidden-sm visible-xs col-xs-offset-4 col-xs-8">
                  <div className="social-network social-network-3">
                    <a href="https://github.com/angelfeliz">angelfeliz</a>
                    <span className="fa-stack fa-lg">
                      <span className="fa  fa-stack-2x"></span>
                      <span className="fa fa-github fa-stack-1x fa-inverse" aria-hidden="true"></span></span>
                   </div>
                  <div className="social-network social-network-4">
                    <a href="https://do.linkedin.com/in/erodriguezfeliz">erodriguezfeliz</a>
                    <span className="fa-stack fa-lg">
                      <span className="fa  fa-stack-2x"></span>
                      <span className="fa fa-linkedin-square fa-1x fa-stack-1x fa-inverse" aria-hidden="true"></span>
                    </span>
                  </div>
                 </div>
               </div>
              <div className="row career-container hidden-xs">
                <div className="col-lg-12">
                  <h3 className="career-name">{props.form.position}</h3>
                </div>
              </div>
</div>
  );
}

export default Head;
