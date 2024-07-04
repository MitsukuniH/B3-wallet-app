import { Box, Button } from "@mui/material"
import { CopyButton } from "./CopyButton"

export const UserInfo=()=>{
  return(
    <Box>
      <h3>You</h3>
      <CopyButton text="address"/>
      <p style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"end"}}><h2>100</h2><h3>EHT</h3></p>
      <Button>送金</Button>
    </Box>
  )
}