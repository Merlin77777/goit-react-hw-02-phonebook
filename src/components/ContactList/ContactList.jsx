import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

export function ContactList({ onVisibleContacts, onDeleteContact }) {
  return (
    <ul>
      {onVisibleContacts.map(item => (
        <ContactItem
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
          deleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  onVisibleContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
