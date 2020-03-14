import React, { Component } from 'react';
import './App.css';

import { Button, Form, FormGroup, Label, Input}
  from 'reactstrap';

import { FacebookLoginButton } from 'react-social-login-buttons';
import xls1 from '../src/files/Reporte-Pruebas-PRC01.2.xlsx';
import xls2 from '../src/files/Reporte-Pruebas-APS01.xlsx';
import xls3 from '../src/files/Reporte-Pruebas-MRW01.2.xlsx';


class App extends Component {
  render (){
    return (
    <div>
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
    </div>
    );
  }
}


export default App;