import { useState } from 'react';

function SimpleForm() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form>
        <label>
          Enter something:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
      </form>
      <p>You entered: {inputValue}</p>
    </div>
  );
}

export default SimpleForm;
