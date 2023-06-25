import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = contactItem => {
    const { name } = contactItem;
    if (this.state.contacts.some(contact => contact.name === name)) {
      Notiflix.Report.warning('Warning!', `${name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contactItem, ...contacts],
      }));
    }
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
        <h1>Phonebook</h1>
        <div>
          <ContactForm handleSubmit={this.handleSubmit} />
          <h2>Contacts</h2>
          <Filter onChangeFilter={this.onChangeFilter} />
          <ContactList onVisibleContacts={visibleContacts} />
        </div>
      </>
    );
  }
}
