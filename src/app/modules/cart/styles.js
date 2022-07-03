import styled from 'styled-components';

const CartCard = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	// width: 70%;
	margin: 0 auto;
	padding: 10px 0 ;
	border-bottom: 1px solid #ddd;

	img {
		// max-width: 40%;
		height: 150px
	}
`;

const CartCardDetails = styled.div`
	h3 {
		color: #000;
		font-size: 25px;
		font-weight: 600;
		margin-block: 5px;
	}
	h5 {
		color: #6e6c6c;
		margin-block: 5px;
		font-size: 20px;
		font-weight: 500;
	}
	h6 {
		color: #000;
		font-size: 18px;
		font-weight: 500;
		margin-block: 5px;
	}
`;

const QuantityContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-inline: 10px;

	button {
		background: #fff;
		border: 1px solid #6e6c6c;
		border-radius: 3px;
		padding: 5px;
		margin: 15px 5px;
		color: #6e6c6c;
		cursor: pointer;
	}
	span {
		color: #1e272e;
	}
`;

const AttributesContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-inline-start: -5px;
	margin-block: 15px;
	
`;

const CartContainer = styled.div`
	padding: 10px;
	background: #fff;
	width: 350px;
	position: absolute;
	top: 32px;
	right: 0;
	max-width: 350px;
	

	h4 {
		margin: 15px 0px;
	}
	h5 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-block: 15px 0;
	}
`;

const ActionsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-block: 10px;
	

	button {
		padding: 10px 30px;
		text-transform: uppercase;
		cursor: pointer;

		&:first-of-type {
			background: #fff;
			color: #1d1f22;
			border: 1px solid #1d1f22;
			border-radius: 5px;
		}
		&:last-of-type {
			background: #52d67a;
			color: #fff;
			border: none;
			border-radius: 5px;
		}
	}
`;

const AttribButton = styled.button`
	cursor: pointer;
	background: ${(props) =>
		props.isSelected ? '#000' : props.isColor ? props.color : '#fff'};
	color: ${(props) => (props.isSelected ? '#fff' : '#6e6c6c')};
	border: 1px solid #6e6c6c;
	padding: 10px;
	margin-inline: 5px;
	border-radius: 3px;
`;

export {
	CartCard,
	CartCardDetails,
	AttributesContainer,
	AttribButton,
	QuantityContainer,
	CartContainer,
	ActionsContainer,
};
