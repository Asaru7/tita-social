import logo from './logo.svg';
import {useEffect,useState} from 'react';
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Home } from "./views/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import  axios from "axios";
import './App.css';

function App() {

  useEffect (() => {
    axios.get('https://dummyapi.io/data/v1/post?limit=10', {
    headers: {
          'Content-type':'application/json',
          'app-id':'634c2ac8d59366857985829e'
        }
    })

  .then((response) => {
    setPosts(response.data.data);
    }, (error) => {
    console.log(error);
    });
 axios.get('https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment',{
      headers: {
          'Content-type':'application/json',
          'app-id':'634c2ac8d59366857985829e'
        }
    })

  .then((response) => {
    setComments(response.data.data);
    }, (error) => {
    console.log(error);
    });

    }, [] );
  const [comments, setComments] = useState(null);
  const [posts, setPosts] = useState(null);
  console.log(comments);
  console.log(posts);
  return posts && (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
                <Home posts={posts} comments={comments} />
            </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
