describe('Тестирование логики авторизации', function () {
    it('Верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.wait(1000);
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('ЫЫЫЫЫЫЫЫ');
        cy.get('#loginButton').click();
        cy.wait(1000);
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
})