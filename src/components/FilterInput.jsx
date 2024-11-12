/* eslint-disable react/prop-types */

const FilterInput = ({ value, onChange }) => (
    <div className="filter-input">
      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
  
  export default FilterInput;
  