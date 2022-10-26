import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch,
} from "react-router-dom";

export default function App() {
  const posts = [
    {
      id: 1,
      title: "My Post",
      date: "5/16/2022",
      content: "Woo my first post!",
    },
    {
      id: 2,
      title: "Another Post",
      date: "5/17/2022",
      content: "Woo my next post!",
    },
    {
      id: 2,
      title: "My Last Post",
      date: "5/19/2022",
      content: "Woo my last post!",
    },
  ];

  return (
    // Routers based on the url input.
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
        {/* Uses a Routes (deprecated: Switch) to determine which URL was clicked and changed the url based on that. */}
        <Routes>
          <Route path="/posts" element={<Posts posts={posts} />}></Route>
          <Route
            path="/friends"
            element={<Friends names={["Matthew", "Jane", "John"]} />}
            exact
          ></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Welcome Home</h2>;
}

function Friends(props) {
  //Destructures names from props
  const { names } = props;
  return (
    <div>
      <h2>Hello Friends</h2>
      <ul>
        {/* Maps through each friend and provides a unique index key to each */}
        {names.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}

function Posts({ posts }) {
  console.log("postsFunctionTesting", posts);
  const match = useMatch();
  console.log("postMatch", match);

  const findPostById = (id) => posts.filter((post) => post.id == id)[0];

  return (
    <div>
      <h2>Ooo Posts</h2>
      <ul>
        {posts.map((post, index) => {
          return (
            <li key={index}>
              <Link to={`${match.url}/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
      <Routes>
        {/* :postId is a parameter and takes the next value in the URL. */}
        <Route
          path={`${match.path}/:postId`}
          render={(props) => (
            <Post {...props} data={findPostById(props.match.params.postId)} />
          )}
        />
        <Route path={match.path}>
          <h3>Please select a post</h3>
        </Route>
      </Routes>
    </div>
  );
}

function Post(props) {
  const { data } = props;
  return (
    <div>
      <h3>{data.title}</h3>
      <h4>{data.date}</h4>
      <p>{data.content}</p>
    </div>
  );
}
