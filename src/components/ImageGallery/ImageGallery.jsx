import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ items, onClick }) => {
    return (
        <ul>
            {items.map(item => {
                return <ImageGalleryItem key={item.id} item={item} onClick={onClick} />
            })}
        </ul>
    );
};

export default ImageGallery;

ImageGallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    onClick: PropTypes.func.isRequired,
};