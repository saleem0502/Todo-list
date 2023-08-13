import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const dataInfo = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  }

  const removItems=(index)=>{
    let arr =data;
    arr.splice(index,1);
    setData([...arr]);

  }


  return (
    <div className="App">
      <Header />
      {/* form  */}
      <div className='form'>
        <Stack direction="row" spacing={2}>
          <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
          <Button onClick={dataInfo} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>


      {/* data map */}
      <div className='data'>
        <div className='dataInfo'>
        <h3>#</h3>
          <h3>Name</h3>
          <h3>E-mail</h3>
          <h3>Remove</h3>
        </div>
        {
          data.map((e, index) => {
            return (
              <div className='dataInfo'>
                <h3>{index+1}</h3>
                <h3>{e.name}</h3>
                <h3>{e.email}</h3>
                <Stack>
                  <h3><Button onClick={()=>removItems(index)} variant="contained" color="error">
                    <DeleteIcon />
                  </Button></h3>
                </Stack>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
