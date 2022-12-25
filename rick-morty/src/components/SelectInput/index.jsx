import './SelectInput.css';

const SelectInput = ({ total, onChangeHandler, name }) => {
  return (
    <div className="episode__picker">
      <select name={name} onChange={onChangeHandler} id={name} className="select__picker">
        <option value="1" selected>
          Choose...
        </option>
        {total.map((item) => (
          <option key={item} value={item + 1} className="episode__picker-option">
            {name} - {item + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
