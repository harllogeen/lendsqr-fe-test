import { Routes, Route } from 'react-router-dom'
import Signin from 'Auth/SignInView';
import DashboardLayout from 'dashboard/DashboardLayout';
import Dashboard from 'dashboard/DashboardView';
import UserDetails from 'users/details/UserDetailsView';
import NotFound from 'components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="*" element={<NotFound />} />
       
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" index element={<Dashboard />} />
          <Route path="users/details/:userId" element={<UserDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
