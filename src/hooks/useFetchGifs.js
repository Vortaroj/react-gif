import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/gyphy';

export const useFetchGifs = (categoria) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newGifs = await getGifs(categoria);
    setGifs(newGifs);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
