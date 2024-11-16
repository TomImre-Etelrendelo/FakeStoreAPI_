import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Admin
      </header>
      <article>
        <h1>Admin Dashboard</h1>
        <p>This is the admin dashboard.</p>
        <div>
      <h1>Dynamic Table</h1>
      <Table columns={columns} data={data} />
    </div>
      </article>
    </div>
  );
}

export default App;
