import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/WasteType';
import { FaInfoCircle } from 'react-icons/fa';
import wasteTypes from '../utils/wasteTypes';

const WasteType = () => {
	const [wasteType, setWasteType] = useState(Number);
	const navigate = useNavigate();

	const handleBack = (e) => {
		e.preventDefault();
		navigate('/');
	};
	const handleForm = (e) => {
		e.preventDefault();
		navigate('/select-skip');
	};
	return (
		<Wrapper>
			<main className="waste-type">
				<h4 className="title">
					Which type of waste best describes what you are disposing
					of?
				</h4>
				<div className="info">
					<FaInfoCircle color="var(--primary-500)" />
					<div className="info-details">
						<p>
							You can select multiple waste types. Some items may
							require special handling:
						</p>
						<ul>
							<li>Plasterboard and drywall materials</li>
							<li>
								Heavy construction materials (soil, concrete,
								etc.)
							</li>
						</ul>
					</div>
				</div>
				<div className="all-articles">
					{wasteTypes.map((waste) => {
						const { title, description, services, icon, id } =
							waste;
						return (
							<article
								key={id}
								className={wasteType === id ? 'active' : ''}
								onClick={() => setWasteType(id)}
							>
								<div className="article-container">
									{icon}
									<div>
										<p className="article-title">{title}</p>
										<p className="article-description">
											{description}
										</p>
										<ul className="article-services-list">
											{services.map((service) => {
												return (
													<li
														className="article-services-item"
														key={service.id}
													>
														{service.value}
													</li>
												);
											})}
										</ul>
									</div>
								</div>
							</article>
						);
					})}
				</div>
				<div className="waste-type-buttons">
					<button
						type="submit"
						className="btn btn-disabled"
						onClick={handleBack}
					>
						Back
					</button>
					<button
						type="submit"
						className={`${wasteType ? 'btn' : 'btn-disabled'}`}
						onClick={handleForm}
					>
						Continue
					</button>
				</div>
			</main>
		</Wrapper>
	);
};

export default WasteType;
