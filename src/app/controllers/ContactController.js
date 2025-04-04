

//const ContactRepositorty = require('../repositories/ContactsRepository');
const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros
   const contacts = await ContactsRepository.findAll();

   response.json(contacts);

  }

  async show(request,response) {
    const {id} = request.params;
    const contact = await ContactsRepository.findById(id);

    if(!contact) {
      // 404: Not Found
      return response.status(404).json({error: 'User not found'});
    }

      response.json(contact);
    // Obter um registro
  }

 async store(request, response) {
  // Criar um registro
  const {name, email, phone, category_id} =request.body;

if(!name) {
  return response.status(400).json({error: 'Name is required'});
}

  const contactExists = await ContactsRepository.findByEmail(email);
  if(contactExists) {
    return response.status(400).json({error: ' This e-mail already exists'});

  }
  const  contact = await ContactsRepository.create({
    name, email, phone, category_id
  });
  response.json(contact);
}


 async update(request, response) {
    // Atualizar um registro

    const {id} = request.params;
    const {
      name, email, phone, category_id
    } = request.body;

   const contactExists = await ContactsRepository.findById(id);
   if(!contactExists) {
    return response.status(404).json({error: 'User not found'});
   }
   if(!name) {
    return response.status(400).json({error: 'Name is required'});
  }
  const contactByEmail = await ContactsRepository.findByEmail(email);
  if(contactByEmail && contactByEmail !== id) {
    return response.status(400).json({error: ' This e-mail already exists'});

  }

  const contact = await ContactsRepository.update(id, {
    name, email, phone, category_id
  });
  response.json(contact);



  }
  async delete(request, response) {

    const {id} = request.params;

    const contact = await ContactsRepository.findById(id);

    if(!contact) {
      // 404: Not Found
      return response.status(404).json({error: 'User not found'});
    }

    await ContactsRepository.delete(id);
    // 204: No Content
    response.sendStatus(204);
    // Deletar um registro
  }

}

module.exports = new ContactController();
