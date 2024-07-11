import { Box, List, ListItem } from "@mui/material"

export const Log = ({log}:{log:Array<string>}) => {
  return(
    <Box overflow="scroll" height="32rem">
      <List >
      {log.map((e, i)=>(
        <ListItem key={i}>{e}</ListItem>
      ))}
      </List>
    </Box>
  )
}