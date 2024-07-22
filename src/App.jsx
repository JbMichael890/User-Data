import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./static/Header";
import Post from "../src/pages/post/Post";
import Comment from "../src/pages/comments/Comments";
import Albums from "../src/pages/Albums/Albums";
import Photos from "./pages/photos/Photos";
import Todo from "../src/pages/todo/Todo"
import Users from "../src/pages/users/Users"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/post" element={<Post />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
