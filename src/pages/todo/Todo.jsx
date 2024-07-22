import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

const Todo = () => {
  const [userTodo, setuserTodo] = useState([]);

  const getuserTodo = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setuserTodo(res.data));
  };

  useEffect(() => {
    getuserTodo();
  }, []);
  console.log(userTodo);
  return (
    <Container>
      <Wrapper>
      <Header><Label>All User Data</Label>
      <IconHold><FiMenu/></IconHold>
      </Header>

        <SearchBar>
          <input type="search" placeholder="Make a Seach" />
          <button>Search</button>
        </SearchBar>
        <MainTable>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {userTodo.map((data, index) => (
                <tr key={index}>
                  <td>{data.title}</td>
                  <td>
                    {data.completed ? <Box>true</Box> : <Box2>false</Box2>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </MainTable>
      </Wrapper>
    </Container>
  );
};
export default Todo;
const Container = styled.div`
  width: 90%;
  background-color: #ddd;
  min-height: 80vh;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
`;
const Wrapper = styled.div`
  background-color: white;
`;

const Label = styled.div`
  margin-left: 30px;
  padding-top: 30px;
  font-weight: 700;
`;
const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 25px;

`
const IconHold = styled.div`
  cursor: pointer;
`
const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  width: 100%;

  button {
    height: 40px;
    width: 150px;
    background-color: #2563eb;
    border: none;
    outline: none;
    color: #fff;
    font-family: Montserrat;
  }
  input {
    height: 40px;
    width: 80%;
    background-color: #eee;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: 500;
  }
`;

const MainTable = styled.div`
  width: 90%;
  margin-right: auto;
  margin-left: auto;

  table {
    width: 100%;
  }

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    font-family: Montserrat;
    font-weight: 500;
  }
`;

const Box = styled.span`
  padding: 4px 60px;
  border-radius: 50px;
  background-color: green;
  color: #fff;
  text-align: center;
`;

const Box2 = styled.span`
  padding: 4px 60px;
  border-radius: 50px;
  background-color: red;
  color: #fff;
  text-align: center;
`;
