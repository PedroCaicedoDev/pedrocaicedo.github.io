function ImageHome(props) {
  return (
    <>
      <img
        alt={props.alt}
        className="mx-auto rounded-full shadow-lg w-48 h-48 object-cover"
        src={props.imageSrc}
      />
    </>
  )
}
export default ImageHome
