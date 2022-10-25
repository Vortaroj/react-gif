export const GifCard = (props) => {
  const {id, title, url} = props;
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
