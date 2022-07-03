import styled from 'styled-components';

const ProductsListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	grid-gap: 4rem;
	padding: 10px;
	margin: 20px 1.75rem;
`;
const ProductsCardContainer = styled.div`
	cursor: pointer;
	img {
		margin-inline: auto;
		display: block;
		// width: -webkit-fill-available;
		max-height: 250px;
	}
	h4 {
		margin-block: 5px;
		font-size: 18px;
		color: #69625f;
		font-weight: 300;
		padding: 5px 10px
	}
	h5 {
		color: #000;
		padding: 5px 10px
	}

	&:hover {
		box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);
		transform: scale(1.1);
		padding: 5px;

		button {
			display: block;
		} 
	}
`;

const ShippingCart = styled.button`
	position: absolute;
	display: none;
	cursor: pointer;
	background: #52d67a;
	border: none;
	color: white;
	border-radius: 50%;
	font-size: 30px;
	right: 50px;
	top: 225px;
	height: 50px;
	width: 50px;
`;

const ProductDetailsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	grid-gap: 4rem;
`;
const GalleryWrapper = styled.div`
	.image-gallery-thumbnails {
		overflow: visible;
		img {
			max-height: 70px;
		}
	}
`;

const DetailsSection = styled.div`
	h3 {
		color: #000;
		font-size: 25px;
		font-weight: 600;
		margin-block: 5px;
	}
	h5 {
		color: #6e6c6c;
		margin-block: 10px;
		font-size: 20px;
		font-weight: 500;
	}
	p {
		margin-block: 10px;
		color: #6e6c6c;
		margin-block: 10px;
	}
`;

const AttributeSet = styled.div`
	margin-block: 25px;
`;
const AttributesContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-inline-start: -5px;
	margin-block: 15px;
`;

const AttribButton = styled.button`
	cursor: pointer;
	background: ${(props) =>
		props.isSelected ? '#000' : props.isColor ? props.color : '#fff'};
	color: ${(props) => (props.isSelected ? '#fff' : '#6e6c6c')};
	border: 1px solid #6e6c6c;
	padding: 20px;
	margin-inline: 5px;
	border-radius: 3px;
`;

const SectionTitle = styled.h4`
	margin-block: 5px;
	font-weight: 600;
	font-size: 18px;
	margin-left: 15%;
`;

const SuccessButton = styled.button`
	background: #52d67a;
	color: #fff;
	padding: 15px 50px;
	width: 100%;
	border: none;
	font-weight: 500;
	border-radius: 5px;
	margin-block: 25px;
	text-transform: uppercase;
	cursor: pointer;
`;
export {
	ShippingCart,
	ProductsListContainer,
	ProductsCardContainer,
	ProductDetailsContainer,
	GalleryWrapper,
	DetailsSection,
	AttributeSet,
	AttributesContainer,
	AttribButton,
	SectionTitle,
	SuccessButton,
};
