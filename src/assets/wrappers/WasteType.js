import styled from 'styled-components';

const Wrapper = styled.section`
	.waste-type {
		grid-template-columns: 1fr;
	}
	.title {
		color: var(--primary-500);
	}
	.info {
		display: flex;
		align-items: flex-start;
		padding: 1.25rem;
		border: 1px solid var(--primary-500);
		border-radius: 0.25rem;
		margin: 2rem 0;
	}
	.info-details {
		margin: 0 0 0 0.75rem;
	}
	.info-details p {
		font-weight: 600;
		margin: 0 0 0.75rem;
	}
	.info-details ul {
		list-style-type: circle;
	}
	.all-articles {
		display: flex;
		flex-wrap: wrap;
	}
	article {
		flex: 50%;
		padding: 0.25rem;
	}
	.article-container {
		border-radius: 0.25rem;
		border: 1px solid var(--primary-500);
		padding: 1.25rem;
		cursor: pointer;
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
	article.active .article-container {
		background-color: var(--primary-500);
	}
	.article-title {
		font-weight: 600;
	}
	.article-description {
		margin: 0.75rem 0;
	}
	.article-services-list {
		display: flex;
		flex-wrap: wrap;
		list-style-type: circle;
	}
	.article-services-item {
		flex: 50%;
	}
	.waste-type-buttons {
		display: flex;
		margin: 1.25rem 0;
		justify-content: center;
		gap: 1rem;
	}
	.waste-type-buttons .btn-disabled {
		cursor: pointer;
	}
`;
export default Wrapper;
