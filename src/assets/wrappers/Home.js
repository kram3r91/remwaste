import styled from 'styled-components';

const Wrapper = styled.section`
	.homelayout {
		display: grid;
		grid-template-columns: 1fr;
	}
	.homelayout-page {
		width: 90vw;
		margin: 0 auto;
		padding: 2rem 0;
	}
	@media (min-width: 992px) {
		.homelayout {
			grid-template-columns: auto 1fr;
		}
		.homelayout-page {
			width: 90%;
		}
	}
`;
export default Wrapper;
