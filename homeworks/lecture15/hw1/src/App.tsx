import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './ProtectedRoute'
import Login from './Login';
import Home from './Home';
import { useEffect, useState } from 'react';
import PList, { PItemType } from './PList';
import Profile from './Profile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const username_truth: string = "abcdef", password_truth: string = "123456";
  const handleLogin = (username: string, password: string) => {
    
    if (username !== username_truth) {
      alert("Username does not exist!");
      return false;
    } else if (password !== password_truth) {
      alert("password is incorrect!");
      return false;
    } else {
      setIsAuthenticated(true);
      return true;
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false);
  }

  const [plistdata, setPlistdata] = useState<PItemType[]>([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(data => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newplistdata: PItemType[] = data.map((value: any) => {
        return {
          username: value.login,
          img_url: value.avatar_url,
          user_url: value.url,
          repos_url: value.repos_url,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onItemClicked: (idx: number) => {
            console.log(idx);
            return Promise.resolve();
          }
        };
      });
      setPlistdata(() => {return newplistdata});
    })
    .catch(err => {
      alert(`Failed to load the user list.\n${err}`);
    })
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Home isAuthenticated = { isAuthenticated } username={ username_truth }
        handleLogout={ handleLogout }/>}/>
        <Route path="/login" element={ <Login submit_handler={ handleLogin }/> }/>
        <Route path='/users' element={ 
          <ProtectedRoute element={<PList datalist={ plistdata }/>} isAuthenticated={ isAuthenticated }/> 
        }/>
        <Route path='/users/:login' element={ 
          <ProtectedRoute element={
            <Profile items={ plistdata }/>
          } isAuthenticated={ isAuthenticated }/> 
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
