import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SelectSkip';
import selectSkip from '../utils/selectSkip';
import img from '../assets/images/containers.jpeg';
import { GoAlert } from 'react-icons/go';

const SelectSkip = () => {
	const [skip, setSkip] = useState([]);
	const navigate = useNavigate();

	const handleBack = (e) => {
		e.preventDefault();
		navigate('/waste-type');
	};
	const handleContinue = (e) => {
		e.preventDefault();
		navigate('/permit-check');
	};
	return (
		<Wrapper>
			<main className="select-skip">
				<h4 className="title">Choose Your Skip Size</h4>
				<p className="info">
					Select the skip size that best suits your needs
				</p>
				<div className="cards">
					{selectSkip.map((select) => {
						const {
							id,
							yards,
							hirePeriod,
							price,
							privateProperty,
						} = select;
						return (
							<article
								key={id}
								className={`card ${
									skip.id === id ? 'selected' : ''
								}`}
							>
								<div
									className={`card-container ${
										privateProperty ? 'disabled' : ''
									}`}
									onClick={() => setSkip(select)}
								>
									<header className="card-header">
										<img
											src={img}
											alt="image"
											className="card-image"
										/>
										<span className="size">
											{yards} Yards
										</span>
										{privateProperty ? (
											<span className="private">
												<GoAlert /> Private Property
												Only
											</span>
										) : (
											<p
												className={`card-header-select${
													skip.id === id ? 'ed' : ''
												}-skip`}
											>
												{skip.id === id
													? 'Selected'
													: 'Select this Skip'}
											</p>
										)}
									</header>
									<div className="card-content">
										<div className="card-content-details">
											<p className="card-content-title">
												{yards} Yard Skip
											</p>
											<p className="card-content-span">
												{hirePeriod} day hire period
											</p>
										</div>
										<p className="card-content-price">
											£{price}
										</p>
									</div>
								</div>
							</article>
						);
					})}
				</div>
				{skip.id && (
					<footer className="select-skip-footer">
						<p className="select-skip-footer-details">
							{skip.yards} Yard Skip / £{skip.price} per week
						</p>
						<div className="select-skip-footer-buttons">
							<button
								className="btn btn-disabled"
								onClick={handleBack}
							>
								back
							</button>
							<button className="btn" onClick={handleContinue}>
								Continue
							</button>
						</div>
					</footer>
				)}
			</main>
		</Wrapper>
	);
};

export default SelectSkip;
