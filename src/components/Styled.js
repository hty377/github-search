import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    vertical-align: middle;

`;

export const Input = styled.input`
      display: block;
	  width: 65%;
	  height: 30px;
      line-height: 30px;
      border: 1px solid #909090;;
      float: right;
	  padding: 0 10px;
	  margin: auto;
      color: #777;
    
`;


export const Button = styled.div`
	width: 100px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	background: #3194d0;
	border-radius: 15px;
    margin: 10px auto;
	text-align: center;
`;


export const ListWrapper = styled.div`
    width:100%;
    font-size: 20px;   
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-top: 10px;   
    height: 500px;
    overflow-Y:scroll


`;

export const Total = styled.div`
	width: 500px;
	line-height: 24px;
	font-size: 15px;
    color: #404040;
    font-style:italic;	
`;

export const ListInfo =	styled.div`
	width: 90%;
	line-height: 24px;
	font-size: 15px;
    color: #909090;	
    border-bottom: 1px solid #dcdcdc;
    padding-top: 10px;
`;

export const Date =	styled.div`
	width: 500px;
	line-height: 24px;
	font-size: 12px;
    color: #909090;	
`;


