/// <reference types="Cypress"/>
import pantallas from '../selectores/misselectores'

describe('Login de Usuario en Emaras', ()=>{

    beforeEach('Conectarme con la Web de Emaras', ()=>{
        //cy.viewport('samsung-s10','landscape')
        cy.viewport(1000,600)
        cy.visit('')
    })

    it('Escribo mi usuario y clave', ()=>{
        /////////////////////////////  Pantalla de Login 

        cy.mi_login()
       
        /////////////////////////////  Pantalla de Selección de Consorcios
        /// click sobre el edicio

        cy.hagoclick(pantallas.consorcios.nro_consorcio,1000)
        //seleccion menu usuarios
        cy.hagoclick(pantallas.consorcios.menu_usuarios,1000)
        // seleccion sub-menu Datos Administracion
        cy.hagoclick(pantallas.consorcios.submenu_datos_adm,1000)   

        /////////////////////////////  Pantalla de Datos de la Administración
        // escribo en domicilio
        cy.fixture('./datos_adm')
        .then( (test_adm) => {   // nombre de los datos obtenidos de la conexión con el fixture
           // tomo los datos del txt domicilio y lo comparo con el valor del fixture
      cy.get(pantallas.datos_administracion.txt_domicilio)
       .should('have.value',test_adm.domicilio)

       cy.get('input[name="nombre"]').should('have.value',test_adm.nombre)
        cy.esperar()
        })
          
        // cerrar la sesión
        cy.hagoclick(pantallas.datos_administracion.lnk_cerrar_sesion,1000)  

       
    })
    
})
