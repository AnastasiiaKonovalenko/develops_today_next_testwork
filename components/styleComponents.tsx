import styled from "styled-components";

export const Input = styled.input`
  height: 40px;
  width: 250px;
  outline: none;
  padding-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const FormAddPost = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-top: 20px;
`;

export const InputAddPost = styled.input`
  height: 40px;
  outline: none;
  padding-left: 20px;
  margin-bottom: 20px;
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Main = styled.main`
  padding: 40px 140px;
`;

export const PostsList = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
`;

export const Article = styled.article`
  text-align: justify;
`;

export const H2 = styled.h2`
  background-color: rgb(134, 101, 66, 0.5);
  opacity: 0.5;
  padding-left: 30px;
`;

export const MainWithoutGrid = styled.main`
  padding: 40px 240px;
  text-align: justify;
`;

export const MainAddPost = styled.main`
  padding: 40px;
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SubmitAdd = styled.div`
  width: 102px;
  height; 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #555;
  color: white;
  margin: auto;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid #fff;
  
  &:hover {
    background-color: #fff;
    color: #555;
    border: 1px solid #555;    
  }
`;

export const TextArea = styled.textarea`
  height: 250px;
  outline: none;
  padding: 20px;
  margin-bottom: 20px;
`;
