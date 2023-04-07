describe('Тестирование логики авторизации', function () {
    it('Неверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.wait(1000);
        cy.get('#mail').type('fratos19@mail.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.wait(1000);
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
})