/// programacion en JavaScript 
// Selector por elemento divido por página

class pantallas{
    // Página del login  
    login = {
                "txt_usuario" : '#mid_left > form > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=text]',
                "txt_clave"   : ':nth-child(2) > [width="40"] > input',
                "btn_ingresar": '#btnIngresar'
        }
    // Página de selección del consorcio
    consorcios = {
            "nro_consorcio" : '#tableData > tbody > tr:nth-child(3) > td.evenselected > p > a',
            "menu_usuarios" : '#tp_menu > ul > li:nth-child(8) > a > font',
            "submenu_datos_adm" : '#tp_menu > ul > li:nth-child(8) > ul > li:nth-child(6) > font > a'
    }

    // Datos de la Administración
    datos_administracion = {
            "txt_domicilio" : 'body > form > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(5) > td:nth-child(3) > font > input[type=text]',
            "btn_guardar"   : ':nth-child(2) > input',
            "lnk_cerrar_sesion" :'[align="right"] > :nth-child(1) > a > font'
        
    }

}

module.exports = new pantallas();