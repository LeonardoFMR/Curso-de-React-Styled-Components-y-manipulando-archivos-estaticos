import { styled } from 'styled-components';

const PieEstilizado = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 100px;
	background-color: #04244F;
	padding: 22px;
	box-sizing: border-box;
    
`;

const IconoContainer = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	li {
    	display: flex;
    	margin-right: 32px;
	}
`;

const PieTexto = styled.p`
	font-size: 16px;
	color: white;
	margin: 0;
    
`;

function Pie() {
	return (
    	<PieEstilizado>
        	<IconoContainer>
            	
        	</IconoContainer>
        	<PieTexto>Desarrollado por Leonardo Morales 2024.</PieTexto>
    	</PieEstilizado>
	);
}

export default Pie
