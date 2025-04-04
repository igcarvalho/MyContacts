📘 README.md 
markdown
Copiar
Editar
# 📇 MyContacts

**MyContacts** is a simple backend API built with Node.js to manage contacts using a RESTful architecture. This project was developed to practice concepts such as controllers, repositories, Express routing, and UUID-based identifiers.

---

## 🚀 Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [UUID](https://www.npmjs.com/package/uuid)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [ESLint (Airbnb base config)](https://eslint.org/)

---

## 📁 Project Structure

MyContacts/ ├── node_modules/ ├── src/ │ ├── app/ │ │ ├── controllers/ │ │ │ └── ContactController.js │ │ └── repositories/ │ │ └── ContactsRepository.js │ ├── index.js │ └── routes.js ├── .editorconfig ├── .gitignore ├── eslint.config.mjs ├── package.json └── yarn.lock

yaml
Copiar
Editar

---

## 📌 Features

- ✅ List all contacts
- ✅ Get a contact by ID
- ✅ Create a new contact
- ✅ Update an existing contact
- ✅ Delete a contact

---

## 📫 API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| GET    | `/contacts`       | List all contacts        |
| GET    | `/contacts/:id`   | Get a contact by ID      |
| POST   | `/contacts`       | Create a new contact     |
| PUT    | `/contacts/:id`   | Update an existing contact |
| DELETE | `/contacts/:id`   | Delete a contact         |

---

## 🧪 Testing with Insomnia

You can use [Insomnia](https://insomnia.rest/) or any other REST client (e.g., Postman) to test the API.

### Example request body for POST:
```json
{
  "name": "Igor Carvalho",
  "email": "igor@email.com",
  "phone": "(21) 99999-9999",
  "category_id": "some-uuid-here"
}
⚙️ Getting Started
Clone this repository:

bash
Copiar
Editar
git clone git@github.com:igcarvalho/MyContacts.git
Install the dependencies:

bash
Copiar
Editar
yarn install
Start the development server:

bash
Copiar
Editar
yarn start
The API will be running at: http://localhost:3000

📄 License
This project is licensed under the MIT License. See the LICENSE file for more details.

🙋‍♂️ Author
Made with 💙 by Igor Carvalho

GitHub: @igcarvalho

yaml
Copiar
Editar
