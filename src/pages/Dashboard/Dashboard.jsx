import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
export default function Dashboard() {
  return (
    <>
    <Header/>
    <ul>
      <li>
        <NavLink to="home">HomePage</NavLink>
      </li>
      <li>
        <NavLink to="statistics">StatisticsPage</NavLink>
      </li>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </ul>
    </>
  );
}
