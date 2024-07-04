import { Box, List, ListItem} from '@mui/material'
import { USERS } from '../SampleData'
import { CopyButton } from './CopyButton'

//ユーザー一覧を表示する
export const Users = ()=>{
  return(
    <Box overflow="scroll" height="15rem">
    <List>
      {USERS.map((e,i)=><ListItem key={i}>
        {e.name}
        <CopyButton text={e.address}/>
      </ListItem>)}
    </List>
    </Box>
)
}