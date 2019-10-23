import { BirthdayReminder, DataSource } from "./";

describe("Birthday Greetings Kata", () => {
  it("Should send birthday email for two people", () => {
    const contacts = [
      {
        last_name: "Lehmkuhl",
        first_name: "Marcola",
        date_of_birth: "1990-01-01",
        email: "marcos@taller.net.br"
      },
      {
        last_name: "Schmitz",
        first_name: "Evelyn",
        date_of_birth: "1989-02-21",
        email: "evelyn@taller.net.br"
      }
    ];

    const reminder = new BirthdayReminder();
    const messages = reminder.getEmailsForBirthdayPeople(contacts);

    expect(messages[0].subject).toEqual("Subject: Happy birthday!");
    expect(messages[0].body).toEqual("Happy birthday, dear Marcola!");
    expect(messages[1].subject).toEqual("Subject: Happy birthday!");
    expect(messages[1].body).toEqual("Happy birthday, dear Evelyn!");
  });
});

describe("data source", () => {
  it("should get all people from the data source", () => {
    const expected = [
      {
        last_name: "Lehmkuhl",
        first_name: "Marcola",
        date_of_birth: "1990-01-01",
        email: "marcos@taller.net.br"
      },
      {
        last_name: "Schmitz",
        first_name: "Evelyn",
        date_of_birth: "1989-02-21",
        email: "evelyn@taller.net.br"
      }
    ];

    const dataSource: DataSource = {
      fetch: () => expected
    };
    const reminder = new BirthdayReminder();
    reminder.setDataSource(dataSource);

    expect(reminder.getContacts()).toEqual(expected);
  });
  it("should get all people from sqLite", () => {
    const expected = [
      {
        last_name: "Lehmkuhl",
        first_name: "Marcola",
        date_of_birth: "1990-01-01",
        email: "marcos@taller.net.br"
      },
      {
        last_name: "Schmitz",
        first_name: "Evelyn",
        date_of_birth: "1989-02-21",
        email: "evelyn@taller.net.br"
      }
    ];

    const dataSource: DataSource = {
      fetch: () => expected
    };
    const reminder = new BirthdayReminder();
    reminder.setDataSource(dataSource);

    expect(reminder.getContacts()).toEqual(expected);
  });
});
