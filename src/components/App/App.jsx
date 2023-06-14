import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name } = evt.currentTarget.elements;
    const contactItem = {
      id: nanoid(),
      name: name.value,
    };
    console.log(this.state);
    console.log(contactItem);
    this.setState(({ contacts }) => ({
      contacts: [contactItem, ...contacts],
      name: contactItem.name,
    }));
  };

  listContacts = () => {
    const list = this.state.contacts.map(contact => contact.name + ' ');
    return list;
  };

  render() {
    return (
      <>
        <h1>Phonenook</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <p>Name</p>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <p>
              <button type="submit">Add contact</button>
            </p>
          </form>
          <h2>Contacts</h2>
          {this.listContacts()}
        </div>
      </>
    );
  }
}
