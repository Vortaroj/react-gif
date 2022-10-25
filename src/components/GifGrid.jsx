import {useFetchGifs} from '../hooks/useFetchGifs';
import {GifCard} from './GifCard';

export const GifGrid = ({categoria}) => {
  const {gifs, isLoading} = useFetchGifs(categoria);
  return (
    <>
      <h3>{categoria}</h3>
      {/* {isLoading ? <h2>Cargando</h2> : null} Esta es otra forma*/}
      {isLoading && <h2>Cargando</h2>}
      <div className='card-grid'>
        {gifs.map((image) => (
          <GifCard key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
