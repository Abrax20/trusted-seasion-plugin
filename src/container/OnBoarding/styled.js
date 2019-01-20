import styled from 'styled-components';

export const H1 = styled.h1``;
export const Description = styled.p``;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Container = styled.div`
  flex: 1;
  padding: 12px;
  
  textarea {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100px !important;
    margin-bottom: 15px !important;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex; 
  height: 100px;
  align-items: center;
  justify-content: center; 
`;
