import { FilterLabel } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <input type="text" name="filter" onChange={onChange} value={value} />
    </FilterLabel>
  );
};
