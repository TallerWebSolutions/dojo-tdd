export type Contact = {
  last_name: string;
  first_name: string;
  date_of_birth: string;
  email: string;
};

export interface DataSource {
  fetch(): Contact[];
}

export class BirthdayReminder {
  private dataSource: DataSource;

  setDataSource(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  getContacts(): Contact[] {
    return this.dataSource.fetch();
  }

  private getEmailForBirthdayPerson = (person: Contact) => {
    const message = {
      subject: "Subject: Happy birthday!",
      body: `Happy birthday, dear ${person.first_name}!`
    };

    return message;
  };

  getEmailsForBirthdayPeople = (people: Contact[]) =>
    people.map(person => this.getEmailForBirthdayPerson(person));
}
