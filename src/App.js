import React, { Component } from 'react';
import './App.css';

import { Button, Form, FormGroup, Label, Input}
  from 'reactstrap';

import { FacebookLoginButton } from 'react-social-login-buttons';
import xls1 from '../src/files/Reporte-Pruebas-PRC01.2.xlsx';
import xls2 from '../src/files/Reporte-Pruebas-APS01.xlsx';
import xls3 from '../src/files/Reporte-Pruebas-MRW01.2.xlsx';
import xls4 from '../src/files/base de datos-mysql.xlsx';
import xls5 from '../src/files/review sprint2.xlsx';
import xls6 from '../src/files/Sprint _planning_sprint3.xlsx';
import doc1 from '../src/files/Reporte-Inventario.docx';

class App extends Component {
  render (){
    return (
    <div>
      
      <h1 className="centro">Avances</h1>
      <h2 className="centro">
        ADMINISTRAR PRODUCTOS Y SERVICIOS #4
        APS01.3	DISEÑO
      </h2>
      <img src={require('./imgs/Produc-serv.png')} className="imagce"/>

      <h2 className="centro">
      MODIFICAR RESERVACIONES - WEB (EMPLEADO) #2
      AW01.4	Diseño
      </h2>
      <img src={require('./imgs/Reserv-Empleados.png')} className="imagce"/>

      <h2 className="centro">
      PROGRAMAR CONTROL DE RESERVAS #1
      PRC01.2	Diseño del sistema
      </h2>
      <img src={require('./imgs/cliente.png')} className="imagce"/>
      <br></br><br></br>
      <hr></hr>
      <h1 className="centro">Reportes de las pruebas realizadas</h1>
      <p className="centro">Reporte de pruebas del Diseño de interfaz de reservaciones del cliente 
        <a href={xls1}> (PRC01.2)</a></p>
      <p className="centro">Reporte de pruebas del Diseño de interfaz Productos y servicios 
        <a href={xls2}> (APS01)</a></p>
      <p className="centro">Reporte de pruebas del Diseño de interfaz de modificacion de reservaciones del empleado 
        <a href={xls3}> (MRW01.2)</a></p>
        <br></br><br></br><br></br><br></br>
        <hr></hr><br></br>
        <h1 className="centro">Avances Sprint 3</h1>
        <h2 className="centro">Como resultado de Review Meeting del sprint 2, se decide modificar un producto:</h2>
        <img src={require('./imgs/review_s2.jpg')} className="imagce"/>
        <br></br>
        <h2 className="centro">De ésta forma incrementan los puntos de historia para el sprint 3, lo cual se acordó en la reunión Sprint Planning</h2>
        <img src={require('./imgs/planning_s3.jpg')} className="imagce"/><br></br>
        <h2 className="centro">Modificaciones al Sprint 3</h2>
        <img src={require('./imgs/PH_S3.jpg')} className="imagce"/>
        <br></br>
        <h2 className="centro">Se decide modificar la interfaz del cliente, mostrando informacion concerniente a la contingencia</h2>
        <img src={require('./imgs/Update-cliente.png')} className="imagce"/>
        <br></br>        
        <h2 className="centro">Inventario de los productos y servicios disponibles APS01.1</h2>
        <img src={require('./imgs/inventario.png')} className="imagce"/><br></br>
        <h2 className="centro">Base de datos Mysql PRC01.3</h2>
        <img src={require('./imgs/base.png')} className="imagce"/>

        
        <p className="centro">Resultado de la Review Meeting
        <a href={xls5}> (Sprint 2)</a></p>
        <p className="centro">Resultado de la Sprint Planning Meeting 
        <a href={xls6}> (Sprint 3)</a></p>
        <p className="centro">Estructura de la base de datos Mysql 
        <a href={xls4}> (PRC01.3)</a></p>
        <p className="centro">Reporte de inventario de productos y servicios 
        <a href={doc1}> (APS01.1)</a></p>
        <br></br><br></br>
        <h1 className="centro">Login al sistema CUPS MRW01.3</h1>
        <Form className="login-form">
        <h1>Sistema <span className="font-weight-bold">CUPS</span></h1>
        <h2 className="text-center">Bienvenido</h2>
        <FormGroup>
          <Label>Correo electrónico</Label><br></br>
          <input type="email" placeholder="e-mail" />
        </FormGroup>
        <FormGroup>
          <Label>Contraseña</Label><br></br>
          <input type="password" placeholder="password" /><br></br>
        </FormGroup>
        <button className="btn-lg btn-dark btn-block">
           Enviar
        </button>
        <div className="text-center pt-3">
          O inicie sesión con sus redes sociales
        </div>
        <FacebookLoginButton className="mt-3 mb-3"/>
        <div className="text-center pt-3"></div>
          <a href="/signup">Registrarse </a>
          <span className="p-2">|</span>
          <a href="/signup"> Olvidé mi contraseña</a>
         
      </Form>
      <br></br><br></br>
      <hr></hr>
      <br></br><br></br>
      
      <div className="centro">
        <h1>Avances Sprint 4</h1>
        <h3>Inició el 27 de marzo</h3>
        <h2 className="centro">Review meeting- Sprint 3</h2>
        <img src={require('./imgs/review_s3.jpg')} className="imagce"></img>
        <br></br>
        <h2 className="centro">Sprint Planning- Sprint 4</h2>
        <img src={require('./imgs/planning_s4.jpg')} className="imagce"></img>
        <br></br>
        <h2 className="centro">Tareas Sprint 4</h2>
        <img src={require('./imgs/Sprint4.jpg')} className="imagce"></img>
        <br></br>
        <h3>Aplicación web (MRW01.2)</h3>
        <br></br>
        <div className="container">
      <a href="#">
        <img src={require('./imgs/LOGO1-1.png')} className="logo"/><br></br>
      </a>
      <div className="covid">
      <p> CoVid19 Si crees tener los síntomas, permanece <br></br>en tu habitación y reportalo al 911 </p>
      </div>
      <a href="#">
      <p className="enlac">Ir a la página de información general para ésta contingéncia</p>
      </a>
<nav>
<ul>
  <li><a href="#" class="active">Inicio</a></li>
  <li><a href="#">Productos</a></li>
  <li><a href="#">Servicios</a></li>
  <li><a href="#">Productos</a></li>
  <li><a href="#">Reservaciones</a></li>  
</ul>
</nav></div>
<div className="container2">
  <div className="amarillo"> <p>Hasta el momento se contabilizan 19 casos confirmados en el Estado de México</p></div>
<div className="mini"><p className="grande">Realizar una reservación</p>
<p>Has elegido como destino <span className="azul">Valle de Bravo</span></p><p className="naranja">Recuerda lavarte las manos con frecuencia</p></div>
<div className="imagV"><img src={require('./imgs/valle_de_bravo.jpg')} className="imagen"/></div><br></br>
<br></br>
<div className="inferior">
<div className="izquierda">
  <div className="fechas">
<p>En construcción...</p>
  </div>
  </div>
  <div className="derecha">

  
</div>
</div>
</div>


      </div>
      <hr></hr>
      <h3 className="centro">Chat en línea (AAL01.1)</h3>
        <br></br>
        <div className="carac">
        <div className="chatbox">
    <div className="chatlogs">
        <div className="chat cups">   
         <div className="user-photo"></div>
       <p className="chat-message">Como podemos ayudarte?</p>     
      </div>
        <div className="chat usuario">   
         <div className="user-photo"></div>
       <p className="chat-message"> Queria confirmar una reservacion</p>      
      </div>
      <div className="chat cups">   
         <div className="user-photo"></div>
       <p className="chat-message">ok, podria darme su codigo de reservacion</p>      
      </div>
  </div>
  <div className="chat-form">
  <textarea></textarea>
  <button> send </button>
</div>  
</div>
</div>        
    </div>
    );
  }
}


export default App;