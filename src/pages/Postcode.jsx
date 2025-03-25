import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/Postcode';
import { Form, useNavigate } from 'react-router-dom';
import { FormRow } from '../components';

const Postcode = () => {
	const [postCode, setPostCode] = useState('');
	const navigate = useNavigate();
	const handleChange = (e) => {
		setPostCode(e.target.value);
	};
	const handleForm = (e) => {
		e.preventDefault();
		navigate('waste-type');
	};
	return (
		<Wrapper>
			<main className="postcode">
				<h2>skip here</h2>
				<h5>With A Difference</h5>
			</main>
			<Form method="post" className="form">
				<FormRow
					type="text"
					name="Postcode"
					placeholder="Insert your postcode"
					defaultValue={postCode}
					onChange={handleChange}
				/>

				<button
					type="submit"
					className={`${
						postCode.length > 0 ? 'btn' : 'btn-disabled'
					} btn-block`}
					disabled={postCode.length <= 0}
					onClick={handleForm}
				>
					continue
				</button>
			</Form>
		</Wrapper>
	);
};

export default Postcode;
