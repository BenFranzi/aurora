import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

export const Fold = styled.div`
  background: linear-gradient(-45deg, #23a6d5, #23d5ab);
  width: 100%;
  top: 35%;
  text-align: center;
  padding-top: 3em;
  padding-bottom: 3em;

`;

export const Header = styled.h1`
  font-size: ${props => props.sub ? '2em' : '4em'};
  font-weight: normal;
  margin-bottom: 0;
  color: ${props => props.fold ? 'white' : 'black'};
`;
