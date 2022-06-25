import styled from 'styled-components';

export const Box = styled.div`
	padding: 40px 1px;
	background:  #ededed;
	bottom: 0;
	z-index: 10;

	@media (max-width: 1000px) {
		padding: 70px 30px;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: left;
	max-width: 1000px;
	margin: 0 auto;
`

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	width: 400px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill,
							minmax(185px, 1fr));
	grid-gap: 220px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(auto-fill,
							minmax(200px, 1fr));
	}
`;

export const FooterLink = styled.a`
	color: #0a0032;
	margin-bottom: 20px;
	font-family: "Montserrat", Sans-serif;
	font-size: 14px;
	text-decoration: none;

	&:hover {
		color: grey;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 20px;
	font-family: "Montserrat", Sans-serif;
	color: #0a0032;
	margin-bottom: 30px;
	font-weight: bold;
`;
