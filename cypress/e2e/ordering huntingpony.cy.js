describe('Тестирование оформления заказа', function () {
    it('Добавление заказа', function () {
         cy.visit('https://huntingpony.com');
         cy.wait(2000);
         // проверка существования "Ошейники и шлейки" и нажимаем на неё
         cy.get('[data-index="5"] > .header__collections-controls > .header__collections-link').should('exist').click();

         // пауза для полной прогрузки проверка существования "Ошейник "Пони-Селедка" Графит" и нажимаем на неё  
         cy.wait(1000);               
         cy.get('[data-product-id="339770355"] > .product-preview__content > .product-preview__area-title > .product-preview__title > a').should('exist').click();

         //проверка существования "В корзину" и нажимаем на неё 
         cy.get('.add-cart-counter__btn').should('exist').click();

         // пауза для отрисовки кнопки сервером, проверка существования "+" и добавляем ещё один товар 
         cy.wait(1000);
         cy.get('[data-add-cart-counter-plus=""]').should('exist').click();   

         // пауза для того, чтобы дать время серверу посчитать- иначе оформляет 1 товар а второй остается в корзине 
         cy.wait(3000);                                       

         // проверка существования "Корзина" и заходим 
         cy.get('.header__cart > .icon').should('exist').click();     

         // проверка существования "Оформить заказ" и проверяем активность кликом  
         cy.get('.cart-controls > .button').should('exist').contains("Оформить заказ").click()                                  
    })
})