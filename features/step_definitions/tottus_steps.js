const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { Selector } = require('testcafe');



Given('Navego a la pagina de google.com', async function() {
    await testController.navigateTo('http://www.google.com');
});

When('Busco {string}', async function(terminosDeBusqueda) {
    const campoDeBusquda = Selector('input').withAttribute('name', 'q').with({ boundTestRun: testController });

    await testController.typeText(campoDeBusquda, terminosDeBusqueda)
        .pressKey('enter');
});

When('Selecciono tottus nataniel', async function() {
    const linkTottusNataniel = Selector('b').withText('nataniel').with({ boundTestRun: testController });

    await testController.click(linkTottusNataniel);
});

When('Hago click en el boton sitio web', async function() {
    const botonSitioWeb = Selector('a').withText('Sitio web').with({ boundTestRun: testController });

    await testController.click(botonSitioWeb);
});

When('timeout', async function() {
    await testController.wait(1800);
});

When('Hago click en recetas y mas', async function() {
    //const imgRecetas = Selector('a').withAttribute('href', 'http://www.tottusrecetas.cl').with({ boundTestRun: testController });
    const imgRecetas = Selector('#new_tottus_nav_cliente_recetas > a > img').with({ boundTestRun: testController });
    /*const imgRecetas = Selector('div').withAttribute('id', 'new_tottus_nav_cliente')
        .child('ul').nth(2)
        .with({ boundTestRun: testController });*/

    await testController.click(imgRecetas);
});

Then('Selecciono Dificultad alta', function() {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('Busco corona de Rollitos de canela', function() {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('valido que la receta tenga canela', function() {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('valido que la receta tenga azucar rubia', function() {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});