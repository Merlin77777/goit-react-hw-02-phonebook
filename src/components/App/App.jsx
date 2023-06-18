import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactItem from './ContactItem';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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

  onChangeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilterContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getFilterContact();
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
          <p>Find contacts by name</p>
          <input type="text" onChange={this.onChangeFilter} />
          <ul>
            {visibleContacts.map(item => (
              <ContactItem {...item} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}
