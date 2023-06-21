import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

export function ContactList({ onVisibleContacts }) {
  return (
    <ul>
      {onVisibleContacts.map(item => (
        <ContactItem
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  onVisibleContacts: PropTypes.array.isRequired,
};
