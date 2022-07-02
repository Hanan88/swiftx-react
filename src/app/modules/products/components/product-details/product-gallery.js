import React from 'react';
import ImageGallery from 'react-image-gallery';
import { PropTypes } from 'prop-types';

const ProductGallery = ({ images }) => {
	const galleryImages = images.map((img) => ({
		original: img,
		thumbnail: img,
	}));
	return (
		<ImageGallery
			items={galleryImages}
			infinite={true}
			thumbnailPosition={'left'}
			showFullscreenButton={false}
			showPlayButton={false}
			showNav={false}
			showBullets={false}
			disableThumbnailScroll={true}
			slideOnThumbnailOver={true}
		/>
	);
};

export default ProductGallery;

ProductGallery.propTypes = {
	images: PropTypes.array.isRequired,
};
