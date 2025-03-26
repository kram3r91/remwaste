import styled from 'styled-components';

const Wrapper = styled.section`
	.title {
		color: var(--primary-500);
	}
	.info {
		text-align: center;
		margin: 1rem 0;
	}
	.cards {
		display: flex;
		flex-wrap: wrap;
	}
	.card {
		flex: 100%;
		padding: 1rem;
	}
	.card-container {
		border-radius: 1rem;
		overflow: hidden;
		border: 1px solid var(--primary-500);
		cursor: pointer;
	}
	.card-container.disabled {
		pointer-events: none;
	}
	.card.selected .card-container {
		background-color: var(--primary-500);
	}
	.card-header {
		position: relative;
	}
	.card-header span.size {
		position: absolute;
		top: 1rem;
		right: 1rem;
		padding: 0.75rem;
		border-radius: 0.75rem;
		background-color: var(--primary-500);
	}
	.card-header span.private {
		background-color: var(--red-dark);
		color: var(--red-light);
		position: absolute;
		bottom: 50%;
		left: 50%;
		transform: translate(-50%, 50%);
		padding: 0.75rem;
		border-radius: 0.75rem;
	}
	.card-header-select-skip {
		background-color: var(--white);
		color: var(--primary-500);
		position: absolute;
		bottom: 50%;
		left: 50%;
		transform: translate(-50%, 50%);
		padding: 0.75rem;
		border-radius: 0.75rem;
	}
	.card-header-select-skip:hover {
		background-color: var(--primary-500);
		color: var(--white);
	}
	.card-header-selected-skip {
		background-color: var(--primary-500);
		color: var(--white);
		position: absolute;
		bottom: 50%;
		left: 50%;
		transform: translate(-50%, 50%);
		padding: 0.75rem;
		border-radius: 0.75rem;
	}
	.card-image {
		width: 100%;
	}
	.card-content {
		padding: 1.25rem;
		display: flex;
		justify-content: space-between;
	}
	.card-content-details {
		/* display: flex; */
	}
	.card-content-title {
		font-weight: 600;
		font-size: 1.2rem;
	}
	.card-content-span {
		margin: 0.25rem 0 0.75rem;
	}
	.card-content-price {
		font-size: 2rem;
		font-weight: 600;
		color: var(--primary-500);
	}
	.card.selected .card-content-price {
		color: var(--white);
	}
	.select-skip-footer {
		position: sticky;
		bottom: 1rem;
		background-color: var(--black);
		padding: 2rem;
		width: 100%;
		color: var(--white);
		border-radius: 0.75rem;
		display: flex;
		justify-content: space-between;
	}
	.select-skip-footer-buttons {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}
	.select-skip-footer-buttons .btn-disabled {
		cursor: pointer;
	}
	@media (min-width: 992px) {
		.card {
			flex: 50%;
		}
	}
`;
export default Wrapper;
