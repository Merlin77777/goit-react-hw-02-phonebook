import PropTypes from 'prop-types';
import { Component } from 'react';
import { Item, ContactData, ButtonDelete } from './ContactItem.styled';

export class ContactItem extends Component {
  state = {
    id: this.props.id,
  };

  deleteContact = () => {
    this.props.deleteContact(this.state.id);
  };

  render() {
    return (
      <Item>
        <ContactData>
          {this.props.name} <span> {this.props.number}</span>
        </ContactData>
        <ButtonDelete type="button" onClick={this.deleteContact}>
          Delete
        </ButtonDelete>
      </Item>
    );
  }
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
