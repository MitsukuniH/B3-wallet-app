import { Box, Grid } from '@mui/material'
import './App.css'
import { Header } from './components/Header'
import { Users } from './components/Users'
import { UserInfo } from './components/UserInfo'
import { useState } from 'react'
import { Log } from './components/Log'

function App() {
  const [log, setLog]=useState<Array<string>>([]);
  return (
    <>
      <Header/>
      <main>
        <Grid container width="80vw" height="80vh" spacing={2}>
          <Grid item xs={5} >
            <Grid container height="100%" display="flex" direction="column" spacing={2}>
              <Grid item xs={5}>
                <Box className='card'>
                  <UserInfo setLog={setLog}/>
                </Box>
              </Grid>
              <Grid item xs={7}>
                <Box className='card'>
                  <h2>ユーザー一覧</h2>
                  <Users/>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={7}>
            <Box className='card'>
              <h2>取引履歴</h2>
              <Log log={log}/>
            </Box>
          </Grid>
        </Grid>
      </main>
    </>
  )
}

export default App
