import styled from "styled-components";
import { TbDownload } from "react-icons/tb";
import { NavLink } from "react-router-dom";
const SideBarl = () => {
  return (
    <Container>
      <Wrapper>
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
      </Wrapper>
    </Container>
  );
};

export default SideBarl;
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Wrapper = styled.div`
  background-color: #1c1c1f;
  height: 65vh;
  width: 200px;
  color: indigo;
  font-weight: 800;
`;
const Navigation = styled.div`
  /* display: flex; */
  nav {
    margin: 0px 15px;
    font-weight: 500;
    cursor: pointer;
  }
`;
const MainNav = styled(NavLink)`
  text-decoration: none;
  color: #3f88c5;

  &.active {
    color: rgb(37 99 235);
  }
`;
const Holder = styled.div``