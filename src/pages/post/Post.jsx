import { useState, useEffect } from "react";
import axios from "axios";
import { FiMenu } from "react-icons/fi";
import styled from "styled-components";

const Post = () => {
  const [userPost, setUserPost] = useState([]);

  const getUserPost = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setUserPost(res.data));
  };

  useEffect(() => {
    getUserPost();
  }, []);
  console.log(userPost);

  return (
    <Container>
      <Wrapper>
      <Header><Label>All User Data</Label>
      <IconHold><FiMenu/></IconHold>
      </Header>

        <SearchBar style={{fontWeight:"600"}}>
          <input type="search" placeholder="Make a Seach" />
          <button style={{fontWeight:"800",  fontFamily:"Montserrat",cursor:"pointer"}}>Search</button>
        </SearchBar>
       <MainTable>
       <table>
          <thead>
            <tr >
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {userPost.map((data, index) => (
              <tr key={index}>
                <td>{data.title}</td>
                <td>{data.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
       </MainTable>
      </Wrapper>
    </Container>
  );
};

export default Post;
const Container = styled.div`
width: 90%;
  background-color: #ddd;
  min-height: 80vh;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;`;
const Wrapper = styled.div`
background-color: white;
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
const Label = styled.div`
  margin-left: 30px;
  padding-top: 30px;
  font-weight: 700;
`;

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
    font-weight: 600;
    font-size: 15px;
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
    /* font-weight: 800; */
    /* font-size: 20px; */

  }`