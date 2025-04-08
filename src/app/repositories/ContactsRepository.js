const { v4 } = require('uuid');

const db = require('../../../database/');



let contacts = [
  {
    id: v4(),
    name: 'Igor Carvalho',
    email: "igor@email.com",
    phone: "(21) 99999-9999",
    category: v4(),
  },
  {
    id: v4(),
    name: 'Solange Carvalho',
    email: "solange@email.com",
    phone: "(21) 99345-9239",
    category: v4(),
  },
];

class ContactsRepository {
  findAll () {
    return new Promise((resolve) => resolve(contacts));

  }

  findById (id) {
    return new Promise((resolve) => resolve(
      contacts.find((contacts) => contacts.id === id)
    ));

  }

  findByEmail (email) {
    return new Promise((resolve) => resolve(
      contacts.find((contacts) => contacts.email === email)
    ));

  }
  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

 async create({
    name, email, phone, category_id,
  }) {
     const [row] = await db.query(`INSERT INTO contacts(name, email, phone , category_id)
       VALUES ($1, $2, $3, $4)
       RETURNING *
       `,[name, email, phone, category_id]);

      return row;


  }
  update(id,{
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updateContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };
      contacts = contacts.map((contact) =>  (
        contact.id === id ? updateContact : contact
      ));

      resolve(updateContact);
    });
  }
}

module.exports = new ContactsRepository();
