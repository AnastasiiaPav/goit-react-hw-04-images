import styled from 'styled-components';

export const Image = styled.li`
  border-radius: 50%;
`;

export const FlexImg = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const DivGallery = styled.div`
  border: 1px solid black;
`;

export const Photo = styled.image`
  display: block;
  // border-radius: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const Input = styled.input`
  border-radius: 20px;
  margin-right: 50px;
  border-color: pink;
  background-color: rgb(245, 162, 176);
  width: 400px;
  height: 50px;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const AllButton = styled.button`
  border-radius: 20px;
  border-color: pink;
  background-color: rgb(245, 162, 176);
  cursor: pointer;
  color: gray;
`;

export const Backdrop = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #1d1c1cca;
  align-items: center;
`;

export const ModalContent = styled.div`
    padding: 20px;
    border-radius: 10px;
    background-color: white;
`