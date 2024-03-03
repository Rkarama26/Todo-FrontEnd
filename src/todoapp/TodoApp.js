import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './TodoApp.css'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ListTodoComponent from './ListTodoComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider, { useAuth } from './security/AuthContext'


const AuthenticatedRoute = ({ children }) => {
  const authContext = useAuth()
  if (authContext.isAuthenticated)
    return children;

  return <Navigate to="/" />
}

export default function TodoApp() {
  return (
    <div className="text-center mt-5">
      <div className='TodoApp '>

        {/* //Routes--------------------- */}
        <AuthProvider>
          <BrowserRouter>
            <HeaderComponent />
            <Routes>
              <Route path='/' element={<LoginComponent />} />
              <Route path='/login' element={<LoginComponent />} />

              <Route path='/welcome/:username' element={
                <AuthenticatedRoute>
                  <WelcomeComponent />
                </AuthenticatedRoute>
              } />

              <Route path='/todos' element={
                <AuthenticatedRoute>
                  <ListTodoComponent />
                </AuthenticatedRoute>
              } />


              <Route path='/logout' element={
                <AuthenticatedRoute>
                  <LogoutComponent />
                </AuthenticatedRoute>
              } />

              <Route path='*' element={
                <AuthenticatedRoute>
                  <ErrorComponent />
                </AuthenticatedRoute>
              } />
            </Routes>
            <FooterComponent />
          </BrowserRouter>
        </AuthProvider>


      </div>
    </div>
  );
}
