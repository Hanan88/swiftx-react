/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import React from 'react';
import { useQuery } from '@apollo/client';
import { ALL_CURRENCY } from '../../../../apollo/query/currencies';
import { useDispatch } from 'react-redux';
import { setSelectedCurrency } from '../../../modules/cart/redux/cart.slice';
import { Select } from './styles';

const CurrencyDropdown = () => {
	const { data } = useQuery(ALL_CURRENCY);
	const dispatch = useDispatch();
	const updateCurrency = (currency) => {
		dispatch(setSelectedCurrency(currency));
	};
	return (
		<>
			<Select
				className="form-select float-start border-0 w-75"
				aria-label="Default select example"
				onChange={(e) => updateCurrency(e.target.value)}
			>
				{data?.currencies?.length > 0
					? data?.currencies.map((currency) => (
							<option value={currency.symbol} key={currency.label}>
								{currency.label} {currency.symbol}
							</option>
					  ))
					: null}
			</Select>
		</>
	);
};

export default CurrencyDropdown;
