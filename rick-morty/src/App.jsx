/* eslint-disable react-hooks/rules-of-hooks */
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Characters, Details, Episode, Location } from './pages';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Characters />} />
          <Route element={<Details />} path=":id" />
        </Route>

        <Route path="/episode">
          <Route index element={<Episode />} />
          <Route element={<Details />} path=":id" />
        </Route>

        <Route path="/location">
          <Route index element={<Location />} />
          <Route element={<Details />} path=":id" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
