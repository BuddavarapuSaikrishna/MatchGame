import {ImageListItems, ImageItem} from './StyledComponents'

const ImageItems = props => {
  const {ImageDetails, CurrentImage} = props
  const {imageUrl} = ImageDetails

  const OnClickImage = () => {
    CurrentImage(imageUrl)
  }

  return (
    <ImageListItems>
      <ImageItem src={imageUrl} onClick={OnClickImage} alt="thumbnail" />
    </ImageListItems>
  )
}

export default ImageItems
