export const getGifs = async (categoria) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=fGIhvchrQkwYA91BTiZemTwzl2XiQzLu&q=${categoria}&limit=20&offset=0`;

  const resp = await fetch(url);
  const {data} = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    type: img.type,
    url: img.images.downsized.url,
    title: img.title,
  }));

  return gifs;
};
