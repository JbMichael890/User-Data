import styled from "styled-components";
import { TbDownload } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Users>
          <h2>Users</h2>
          <button
            style={{
              fontWeight: "600",
              border: "none",
              borderRadius: "15px",
              height: "30px",
              border: "1px solid #ddd",
              margin: "10px",
            }}
          >
            80 users
          </button>
        </Users>
        <See>{/* <p>See your active workplace and make changes</p> */}</See>
        <Navigation>
          <MainNav to="/post">
            <nav>Post</nav>
          </MainNav>
          <MainNav to="/comment">
            <nav>Comments</nav>
          </MainNav>
          <MainNav to="/albums">
            <nav>Albums</nav>
          </MainNav>
          <MainNav to="/photos">
            <nav>Photos</nav>
          </MainNav>
          <MainNav to="/todo">
            <nav>Todo</nav>
          </MainNav>
          <MainNav to="/users">
            <nav>Users</nav>
          </MainNav>
        </Navigation>

        <Holder>
          <button
            style={{
              margin: "20px",
              border: "1px solid #ddd",
              height: "30px",
              width: "150px",
              borderRadius: "5px",
              fontWeight: "600",
              cursor: "pointer",
              
            }}
          >
            <TbDownload /> Download CSV
          </button>
          <button
            style={{
              fontWeight: "600",
              border: "none",
              borderRadius: "5px",
              height: "30px",
              border: "1px solid #eee",
              backgroundColor: "rgb(37 99 235)",
              cursor: "pointer",
              outline: "none",
              color: "white",
              fontFamily: "Montserrat",
            }}
          >
            + Add users
          </button>
        </Holder>
      <main>  <FiMenu/></main>
      </Wrapper>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: #ddd;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  main{
    display: none;
    @media (max-width: 500px) {
      display: flex;
      cursor: pointer;
    }
  }
`;

const Users = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Holder = styled.div`
@media (max-width: 500px) {
  display: none;
}
`;
const See = styled.div``;
const Navigation = styled.div`
  display: flex;
  nav {
    margin: 0px 15px;
    font-weight: 500;
    cursor: pointer;
  }
  @media (max-width: 1010px) {
    display: none;
  }
`;
const MainNav = styled(NavLink)`
  text-decoration: none;
  color: #3f88c5;

  &.active {
    color: rgb(37 99 235);
  }
`;
