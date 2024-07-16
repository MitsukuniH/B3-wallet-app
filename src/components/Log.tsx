import { Box, List, ListItem } from "@mui/material"

//取引履歴
export const Log = () => {
  const data = localStorage.getItem("transitions");
  let log:Array<string>;
  if(!data){
    log = ["取引はありません"];
  } else {
    log = data.split(",");
  }
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