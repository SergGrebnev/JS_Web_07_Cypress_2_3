const userData = require("../fixtures/user.json");
const userUrl = userData.url;
const user = userData.user;
const userNumber = 0; // номер пользователя в массиве user

describe("Сервис User", () => {
  beforeEach(() => {
    //Создание пользователя
    cy.userCreate(userUrl, user[userNumber]).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq(`${user[userNumber].id}`);
    });
  });

  //--------------------------------

  it("Должен создать пользователя", () => {
    //Проверка пользователя
    cy.userGet(userUrl, user[userNumber].username).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(user[userNumber].id);
      expect(response.body.username).to.eq(user[userNumber].username);
    });
  });

  //-------------------------

  it("Должен изменить пользователя", () => {
    const userNew = 1;

    //Изменение пользователя (id менять нельзя)
    cy.userUpdate(userUrl, user[userNumber].username, user[userNew]).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq(`${user[userNumber].id}`);
    });

    //Проверка пользователя
    cy.userGet(userUrl, user[userNew].username).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(user[userNew].id);
      expect(response.body.username).to.eq(user[userNew].username);
      expect(response.body.firstName).to.eq(user[userNew].firstName);
      expect(response.body.lastName).to.eq(user[userNew].lastName);
    });
  });

  //--------------------------------

  it("Должен удалить пользователя", () => {
    //Удаление пользователя
    cy.userDelete(userUrl, user[userNumber].username).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq(`${user[userNumber].username}`);
    });

    //Проверка удалённого пользователя
    cy.userGet(userUrl, user[userNumber].username).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(404);
      expect(response.body.message).to.eq("User not found");
    });
  });
});
