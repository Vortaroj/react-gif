import {useState} from 'react';

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Categoría Nueva'
        value={inputValue}
        name='newCategoria'
        id='newCategoria'
        className='form-control'
        onChange={onInputChange}
      />
      {/* <button className='btn btn-primary'>Agregar</button> */}
    </form>
  );
};
