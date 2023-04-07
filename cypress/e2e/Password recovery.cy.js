describe('Тестирование логики авторизации', function () {
    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio');
        cy.wait(1000);
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.wait(1000);
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
})