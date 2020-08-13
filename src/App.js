import React from 'react';
import './App.css';
import bin from './bin.svg'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField } from '@material-ui/core';
function App() {
  return (
    <div className="App">
      <header className="header">
        ŠEVA NK MALEČNIK - ČLANI 
      </header>
      <div className="body">
        <div className='newUser'>
          <TextField label='Ime in priimek'></TextField>
          <Button>Dodaj</Button>
        </div>
        <TableContainer>
          <Table className="list">
            <TableHead>
              <TableRow>
                <TableCell>Ime</TableCell>
                <TableCell>Stevilo</TableCell>
                <TableCell>Urejanje</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Ziga Lah</TableCell>
                <TableCell>2</TableCell>
                <TableCell>
                  <div className='editing'>
                      <Button>+</Button>
                      <Button>-</Button>
                      <Button>
                        <img src={bin} alt="bin"></img>
                      </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default App;
