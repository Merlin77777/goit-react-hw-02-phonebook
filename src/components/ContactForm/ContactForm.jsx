import { Component } from 'react';
import { nanoid } from 'nanoid';
import { PropTypes } from 'prop-types';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  formSubmit = evt => {
    evt.preventDefault();
    const { name, number } = evt.currentTarget.elements;

    const contactItem = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };

    evt.currentTarget.reset();
    this.props.handleSubmit(contactItem);
  };

  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};
