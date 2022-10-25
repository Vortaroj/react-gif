import {useState} from 'react';
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categorias.indexOf(newCategory) != -1) {
      alert(`Ya existe la categoría ${newCategory}`);
      return;
    }
    setCategorias([newCategory, ...categorias]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(e) => onAddCategory(e)} />

      {categorias.map((categoria) => (
        <GifGrid key={categoria} categoria={categoria} />
      ))}
    </>
  );
};

//Una forma: if( categorias.include(newCategory) )

{
  /* Esta es una forma del Padre al hijo <AddCategory setCategorias={setCategorias} /> 
la de abajo es otra forma del hijo al padre implementando cambios en el componente

onNewCategory={(e) => onAddCategory(e)} esto es igual a onNewCategory={onAddCategory}
*/
}
