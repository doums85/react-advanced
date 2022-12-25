const Increment = ({ icon = 'bx bx-plus', onClick, disabled }) => {
  return (
    <button className={`counter__btn ${disabled ? 'disable' : undefined}`} onClick={disabled ? undefined : onClick}>
      <i className={`${icon} counter__btn--icon`}></i>
    </button>
  );
};

export default Increment;
