import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = evt.currentTarget.elements;
    const contactItem = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };
    console.log(this.state);
    console.log(contactItem);
    this.setState(({ contacts }) => ({
      contacts: [contactItem, ...contacts],
      name: contactItem.name,
    }));
  };

  listContacts = () => {
    const list = this.state.contacts.map(
      contact => '*' + contact.name + ' ' + contact.number + '\r'
    );
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
            <p>Number</p>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
