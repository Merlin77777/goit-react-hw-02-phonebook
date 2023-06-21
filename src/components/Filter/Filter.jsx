import PropTypes from 'prop-types';

export function Filter({ onChangeFilter }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={onChangeFilter} />
    </>
  );
}

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};
