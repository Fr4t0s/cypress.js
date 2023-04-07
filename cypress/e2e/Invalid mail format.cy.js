describe('Тестирование логики авторизации', function () {
    it('Неверный формат почты', function () {
        cy.visit('https://login.qa.studio');
        cy.wait(1000);
        cy.get('#mail').type('АртёмВозьмиНаРаботу.плиз =D');
        cy.wait(3000);
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.wait(1000);
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
})    