import React, { useState } from 'react';
import { MdShoppingBag } from 'react-icons/md';
import { BsCart2 } from 'react-icons/bs';
import {
	BarApp,
	Width,
	Logo,
	FiltersContainer,
	CartQuantity,
	CartButton,
	QueryNavLink,
} from './styles';
import CurrencyDropdown from './CurrencyDropdown';
import { useQuery } from '@apollo/client';
import { ALL_CATEGORIES } from '../../../../apollo/query/products';
import { useSelector } from 'react-redux';
import CartDropdown from './../../../modules/cart/components/cart-dropdown';
import { useSearchParams } from 'react-router-dom';

const Header = () => {
	const { data } = useQuery(ALL_CATEGORIES);
	const [params] = useSearchParams();
	let category = params.getAll('cat')[0];
	const [isCartShown, setIsCartShown] = useState(false);
	const cartQuantity = useSelector((state) => state.cart.cart.length);
	return (
		<div className="container">
			<BarApp>
				<FiltersContainer>
					{data &&
						data.categories.length > 0 &&
						data.categories.map((cat) => (
							<QueryNavLink
								isActive={category === cat.name}
								key={cat.name}
								to={`/?cat=${cat.name}`}
							>
								{cat.name.toUpperCase()}
							</QueryNavLink>
						))}
				</FiltersContainer>
				<Logo>
					<MdShoppingBag size={50} />
				</Logo>
				<Width>
					<CurrencyDropdown />
					<CartButton onClick={() => setIsCartShown((prev) => !prev)}>
						{cartQuantity > 0 && <CartQuantity>{cartQuantity}</CartQuantity>}
						<BsCart2 size={25} style={{ marginBottom: '-5px' }} />
					</CartButton>
					{isCartShown && (
						<CartDropdown closeCart={() => setIsCartShown(false)} />
					)}
				</Width>
			</BarApp>
		</div>
	);
};

export default Header;
