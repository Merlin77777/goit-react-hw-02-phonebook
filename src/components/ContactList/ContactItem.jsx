import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number }) => {
  return (
    <li>
      {name} <span> {number}</span>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;