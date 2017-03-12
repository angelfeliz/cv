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
             bibliography : 'Bio',
             skills : 'Habilidades',
             education : 'Educacion',
             language : 'Idiomas',
             passion : 'Pasatiempos',
             experience : 'Experiecia',
             bibliographyDetail : 'Desarrollador de software con experiencias prácticas en trabajo en equipo, proyecto pequeño y grande, estrategia de marca. Dedicado a la programación y la arquitectura de la información.',
             educationDetail : [ { time : '2016',
                                                  title : 'Productividad Personal en la Era Digital',
                                                  place : 'Santa Maria la Real del Patrimonio Histórico'
                                  },
                                  { time : '2016',
                                    title : 'Desarrollo y determinación de problemas IBM Integra en (WebSphere Message Broker 7.0V)',
                                    place : 'IGM Company, Santo Domingo, Republica Dominicana'
                                  },
                                  { time : '2014',
                                    title : 'Diplomado de .NET Desarrollo de aplicaciones',
                                    place : 'Instituto Tecnológico de Santo Domingo, Santo Domingo, Republica Dominicana'
                                  },
                                  { time : '2013',
                                    title : 'Grado universitario',
                                    place : 'Ing. en Sistema, Universidad APEC, Santo Domingo, Dominican Republic'
                                  }
                               ],
              experiencieDetail : [ { place : 'Dirección General de Contrataciones Pública',
                                      time : '2016 Presente',
                                      position : 'Consultor de software',
                                      description : "Como consultor externo tengo que participar en reuniones y trabajar con pequeños equipos de desarrolladores. Estoy colaborando en el desarrollo de proyectos mientras mantengo los proyectos a tiempo. Cuando aparecen nuevos problemas, como equipo trabajamos para solucionar el problema lo antes posible y al mismo tiempo mantener el proyecto dentro del calendario."
                                    },
                                    { place : 'BanReservas',
                                      time : '2015 2016',
                                      position : 'Analista Sistema de Información',
                                      description : "Participe en la creación del ETL para el core contable del banco, manteniendo también el antiguo proyecto. La herramienta que utilizamos fue Cognos Data Manager. El departamento tiene un repositorio de reportes personalizados los reportes se construye utilizando la base de datos de Oracle, y establecer el informe en Cristal Informe."
                                    },
                                    { place : 'Oficina nacional de estadística',
                                      time : '2013 2015',
                                      position : 'Desarrollador I',
                                      description : ""
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
            bibliography : 'Bio',
            education : 'Education',
            skills : 'Skills',
            language : 'Languages',
            passion : 'Hobbies',
            position : 'Software developer',
            experience : 'Experiences',
            bibliographyDetail : 'Software developer with practice experiences in team working, small and big project, branding strategy. devoted to programming and information architect.',
            educationDetail : [ { time : '2016',
                                                 title : 'Personal productivity in the digital age',
                                                 place : 'Santa Maria la Real del Patrimonio Histórico'
                                 },
                                 { time : '2016',
                                   title : 'Development and problem analysis IBM Integration (WebSphere Message Broker 7.0v)',
                                   place : 'IGM Company, Santo Domingo, Dominican Republic'
                                 },
                                 { time : '2014',
                                   title : 'Diploma in .NET Application Development',
                                   place : 'Instituto Tecnológico de Santo Domingo, Santo Domingo, Dominican Republic'
                                 },
                                 { time : '2013',
                                   title : 'Bachelor degree',
                                   place : 'Software Engineer, Universidad APEC, Santo Domingo, Dominican Republic'
                                 }
                              ],
            experiencieDetail : [ { place : 'Dirección General de Contrataciones Pública, Santo Domingo, Dominican Republic',
                                    time : '2016 Present',
                                    position : 'Software Consultant',
                                    description : "As an external consultant I am required to participate in meetings and work with small teams of developers. I'm collaborating on the development of projects while keeping the projects on schedule. When new issues appear, as a team we worked to fix the issue as soon as possible while also keeping the project on schedule."
                                  },
                                  { place : 'BanReservas, Santo Domingo, Dominican Republic',
                                    time : '2015 2016',
                                    position : 'Information System Analist',
                                    description : "I participated in the creation of the ETL for the Accountant core of the bank, maintaining also old project the tool we used was Cognos Data Manager. The department have a repository of customize reports each report we build using Oracle data base, and set the report in Cristal Report"
                                  },
                                  { place : 'Oficina nacional de estadística, Santo Domingo, Dominican Republic',
                                    time : '2013 2015',
                                    position : 'Software Developer I',
                                    description : "Build and maintain web application, all build in house. I create the first phase of Human Resource management application. Participated in the team building the website we divaded in two the front end and the back end for what we build a  content management system, I code in both the front end and the back end."
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
