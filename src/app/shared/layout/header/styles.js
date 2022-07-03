import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BarApp = styled.header`
	display: flex;
	padding: 20px 30px;
	align-items: center;
	justify-content: space-between;
`;

const Logo = styled.div`
	color: #52d67a;
`;

const FiltersContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	a {
		background: none;
		margin-inline: 15px;
		cursor: pointer;
	}
`;

const Select = styled.select`
    border: none;
    font-size: 15px;
`;

const Width = styled.div`
	width: 125px;
	position: relative;
`;

const CartButton = styled.button`
	background: none;
	border: none;
	text-decoration: none;
	color: #1d1f22;
	margin-left: 10px;
	position: relative;

	&:hover {
		color: #52d67a;
		border-bottom: 1px solid #52d67a;
	}
`;

const CartQuantity = styled.span`
	position: absolute;
	top: -12px;
	left: 12px;
	width: 25px;
	height: 25px;
	border-radius: 12px;
	background: #282c34;
	color: white;
	border: none;
	text-align: center;
`;

const QueryNavLink = styled(Link)`
	color: ${(props) => (props.isActive ? '#52D67A' : '#1D1F22')};
	border-bottom: ${(props) => (props.isActive ? '1px solid #52D67A' : 'none')};
`;
export {
	BarApp,
	FiltersContainer,
	Width,
	Logo,
	CartQuantity,
	CartButton,
	QueryNavLink,
	Select
};
