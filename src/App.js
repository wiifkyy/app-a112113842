// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Table from './komponen/tabel';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import NotFound from './pages/NotFound';
import useFetch from './hook/useFetch';
import useCustomTitle from './hook/useCustomTitle';
import useCounter from './hook/useCounter';
import useForm from './hook/useForm';
import AuthProvider from './context/AuthContext';
import Login from './komponen/Login';
import UserProfile from './komponen/UserProfile';
import Counter from './komponen/Counter'; // tambahkan komponen Counter
import './App.css'; // Import the CSS file


// Redux
import { Provider } from 'react-redux';
import store from './/store';

function App() {
  const [data, setData] = React.useState([]);
  const { counter, increment, decrement } = useCounter();
  const { values, handleChange } = useForm({ nim: '', nama: '' });
  const inputRef = React.useRef(null);

  useCustomTitle('Aplikasi Mahasiswa');

  // Custom hook to fetch data
  useFetch('https://jsonplaceholder.typicode.com/users', setData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // POST request logic here
  };

  return (
    <Provider store={store}>
      <AuthProvider>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-600">Selamat Datang di Aplikasi</h1>
            <p className="mt-4 text-2xl">Nama: Pedro Bagas W</p>
            <p className="text-2xl">NIM: A11.2021.13842</p>
          </header>
          
          <form onSubmit={handleSubmit} className="mb-4 max-w-md w-full px-4 py-3 bg-white shadow-md rounded-lg">
            <label className="block mb-2">NIM:</label>
            <input
              type="text"
              name="nim"
              value={values.nim}
              onChange={handleChange}
              ref={inputRef}
              className="border border-gray-300 rounded-md px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
              required
            />
            <br />
            <label className="block mb-2">Nama:</label>
            <input
              type="text"
              name="nama"
              value={values.nama}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
              required
            />
            <br />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Tambahkan Data
            </button>
          </form>

          <Table data={data} />
          <div className="mt-8">
            <p className="text-xl font-semibold mb-2">Counter: {counter}</p>
            <div className="space-x-4">
              <button onClick={increment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Increment
              </button>
              <button onClick={decrement} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Decrement
              </button>
            </div>
          </div>

          <Login />
          <UserProfile />

          <Counter />

          <Router>
            <div className="mt-8">
              <nav>
                <ul className="flex space-x-4">
                  <li><Link to="/" className="text-blue-500 hover:underline">Home</Link></li>
                  <li><Link to="/about" className="text-blue-500 hover:underline">About</Link></li>
                  <li><Link to="/contact" className="text-blue-500 hover:underline">Contact</Link></li>
                  <li><Link to="/notfound" className="text-blue-500 hover:underline">NotFound</Link></li>
                </ul>
              </nav>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </Router>
        </div>
      </AuthProvider>
    </Provider>
  );
}

export default App;