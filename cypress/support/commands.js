/// <reference types="Cypress"/>
import pantallas from '../selectores/misselectores'


Cypress.Commands.add('escribir',(selector,texto,tiempo) => { 
            cy.get(selector).clear().type(texto)
            cy.wait(tiempo)
 })

 Cypress.Commands.add('hagoclick',(selector,tiempo) => { 
    cy.wait(tiempo)
    cy.get(selector).click()
})

Cypress.Commands.add('esperar',() => { 
    cy.wait(1000) 

})


Cypress.Commands.add('mi_login',() => { 
     // antes me conecto con el fixture
     cy.fixture('./datos_login')  // nombre del archivo
     // cuando ya me conecté :
     .then( (test_login) => {    // nombre de variable
     /////  Login con datos del fixture login.json 
    // escribo en el usuario
     cy.escribir(pantallas.login.txt_usuario,test_login.usuario, 1000)
     // escribo en la clave
     cy.escribir(pantallas.login.txt_clave,test_login.clave,1000)
     // boton ingresar
     cy.hagoclick(pantallas.login.btn_ingresar,1000)

 })     

})

