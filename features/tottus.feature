Feature: Consulta de sucursales


    Buscar sucursal Tottus nataniel y validar receta


    Scenario: Validar receta de rollitos de canela
        Given Navego a la pagina de google.com
        When Busco "tottus sucursales"
        When Selecciono tottus nataniel
        When Hago click en el boton sitio web
        When timeout
        When Hago click en recetas y mas 
        Then Selecciono Dificultad alta
        Then Busco corona de Rollitos de canela
        Then valido que la receta tenga canela
        Then valido que la receta tenga azucar rubia
