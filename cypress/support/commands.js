//Создание пользователя
Cypress.Commands.add("userCreate", (userUrl, user) => {
  cy.request({
    method: "POST",
    url: userUrl,
    body: {
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      phone: user.phone,
      userStatus: user.userStatus,
    },
  });
});

//-----------------------------

//Запрос данных пользователя
Cypress.Commands.add("userGet", (userUrl, username) => {
  cy.request({
    failOnStatusCode: false,
    method: "GET",
    url: userUrl + username,
  });
});

//-----------------------------

//Изменение данных пользователя
Cypress.Commands.add("userUpdate", (userUrl, username, user) => {
  cy.request({
    method: "PUT",
    url: userUrl + username,
    body: {
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      phone: user.phone,
      userStatus: user.userStatus,
    },
  });
});

//-----------------------------

//Удаление пользователя
Cypress.Commands.add("userDelete", (userUrl, username) => {
  cy.request({
    method: "DELETE",
    url: userUrl + username,
  });
});
