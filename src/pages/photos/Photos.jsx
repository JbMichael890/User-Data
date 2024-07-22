import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

const Photos = () => {
  const [userPhoto, setuserPhoto] = useState([]);

  const getuserPhoto = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => setuserPhoto(res.data));
  };

  useEffect(() => {
    getuserPhoto();
  }, []);
  console.log(userPhoto);
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
                
                <th>ThumbnailUrl</th>
              </tr>
            </thead>
            <tbody>
              {userPhoto.map((data, index) => (
                <tr key={index}>
                  <td>{data.title}</td>
                  
                 <td><img src={data.thumbnailUrl} alt="" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </MainTable>
      </Wrapper>
    </Container>
  );
};

export default Photos;
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
    font-weight: 600;
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

    img{
      height: 30px;
      width: 50px;
    }
  }
`;
