import React, { Component } from 'react';
import logo from './logo.svg';
import './css/index.css';
import Head from './component/header.js';
import Bibliography from './component/Bibliography.js'
import Education from './component/education.js'
import Experience from './component/experience.js'
import Skill from './component/skill.js'
import Language from './component/language.js'
import Passion from './component/passion.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      es : {
             position : 'Desarrollador de software',
             bibliography : 'Bibliografía',
             skills : 'Habilidades',
             education : 'Educaciones',
             language : 'Idiomas',
             passion : 'Pasiones & Pasatiempos',
             experience : 'Experiecias',
             bibliographyDetail : 'Desarrollador de software con experiencias prácticas en trabajo en equipo, proyecto pequeño y grande, estrategia de marca. Dedicado a la programación y la arquitectura de la información.',
             educationDetail : [ { time : 'Desde Noviembre 2016 hasta Noviembre 2016',
                                                  title : 'Productividad Personal en la Era Digital',
                                                  place : 'Santa Maria la Real del Patrimonio Histórico'
                                  },
                                  { time : 'Desde Febrero 2014 hasta Abril 2014',
                                    title : 'Diplomado de .NET Desarrollo de aplicaciones',
                                    place : 'Instituto Tecnológico de Santo Domingo - INTEC'
                                  },
                                  { time : 'Desde Julio 2010 hasta Octubre 2013',
                                    title : 'Grado universitario',
                                    place : 'Ing. en Sistema, UNAPEC'
                                  },
                                  { time : 'Desde Febrero 2016 hasta Febrero 2016',
                                    title : 'Curso de esarrollo y determinación de problemas IBM Integra en (WebSphere Message Broker 7.0V)',
                                    place : 'IGM Company'
                                  }
                               ],
              experiencieDetail : [ { place : 'Dirección General de Contrataciones Pública',
                                      time : '2016 Now',
                                      position : 'Consultor de software'
                                    },
                                    { place : 'BanReservas',
                                      time : '2015 2016',
                                      position : 'Analista Sistema de Información'
                                    },
                                    { place : 'Oficina nacional de estadística',
                                      time : '2013 2015',
                                      position : 'Desarrollador I'
                                    }
                                 ],
               languageDetail : [ { language : 'Español',
                                    level : 'Nativo'
                                  },
                                  { language : 'Ingles',
                                    level : 'Competencia profesional completa'
                                  }
                                ],
               passions : ['Fotografia', 'Ejercicios', 'Musica & Baile', 'Aventuras & Viajes']
            },
      en : {
            bibliography : 'Bibliography',
            education : 'Educations',
            skills : 'Skills',
            language : 'Languages',
            passion : 'Passions & Hobbies',
            position : 'Software developer',
            experience : 'Experiences',
            bibliographyDetail : 'Software developer with practice experiences in team working, small and big project, branding strategy. devoted to programming and information architect.',
            educationDetail : [ { time : 'From November 2016 to November 2016',
                                                 title : 'Personal productivity in the digital age',
                                                 place : 'Santa Maria la Real del Patrimonio Histórico'
                                 },
                                 { time : 'From February 2014 to April 2014',
                                   title : 'Diploma in .NET Application Development',
                                   place : 'Instituto Tecnológico de Santo Domingo - INTEC'
                                 },
                                 { time : 'From July 2010 to October 2013',
                                   title : 'Bachelor degree',
                                   place : 'Software Engineer, UNAPEC'
                                 },
                                 { time : 'From February 2016 to February 2016',
                                   title : 'Curse of Development and problem determination IBM Integra On (WebSphere Message Broker 7.0V)',
                                   place : 'IGM Company'
                                 }
                              ],
            experiencieDetail : [ { place : 'Dirección General de Contrataciones Pública',
                                    time : '2016 Now',
                                    position : 'Consultor de software'
                                  },
                                  { place : 'BanReservas',
                                    time : '2015 2016',
                                    position : 'Analista Sistema de Información'
                                  },
                                  { place : 'Oficina nacional de estadística',
                                    time : '2013 2015',
                                    position : 'Desarrollador I'
                                  }
                                ],
             languageDetail : [ { language : 'Spanish',
                                  level : 'Native'
                                },
                                { language : 'English',
                                  level : 'Full professional proficiency'
                                }
                              ],
             passions : ['Photographic', 'Exercise', 'Music & Dance', 'Adventure & Travel']


      },
      currently : {
      }
    }
    this.handleClick = this.handleClick.bind(this);
  }
componentWillMount(){
  this.setState({currently : {...this.state.en }});
}
  handleClick(lan){
    console.log("hello"+lan);
    if(lan === 'EN'){
      this.setState({currently : {...this.state.en}});
    }else{
      this.setState({currently : {...this.state.es }});
    }
  }
  render() {
    return (
      <main>
        <div className="container bg-first-row">
          <button type="button" className="btn btn-default btn-shape-link" onClick={()=>this.handleClick('EN')}>EN</button>
          <button type="button" className="btn btn-default btn-shape-link" onClick={()=>this.handleClick('ES')}>ES</button>
          <Head form = {this.state.currently} />
        </div>
        <div className="container bg-secound-row">
          <div className="row first-row row-space-left">
            <Bibliography form = {this.state.currently} />
          </div>
          <div className="row secound-row row-space-left">
            <Education form = {this.state.currently}/>
            <Experience form = {this.state.currently}/>
          </div>
          <div className="row third-row row-space-left">
            <Skill />
            <Language form = {this.state.currently} />
          </div>
          <div className="row fourth-row row-space-left">
            <Passion form = {this.state.currently} />
          </div>
        </div>
      </main>

    );
  }
}

export default App;
