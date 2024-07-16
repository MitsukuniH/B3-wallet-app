import { Box, Button} from "@mui/material"
import { CopyButton } from "./CopyButton"
import { useState } from "react"
import { SendMenu } from "./SendMenu.tsx"

//ユーザー情報
export const UserInfo=()=>{
  const [open_modal, setOpenModal]= useState<boolean>(false);
  const data = localStorage.getItem("balance");
  let balance:number;
  if(!data){
    localStorage.setItem("balance", "100")
    balance = 100;
  } else {
    balance = Number(data);
  }
    
  return(
    <Box>
      <h3>You</h3>
      <CopyButton text="address"/>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"end"}}><h2>{balance}</h2><h3>EHT</h3></div>
      <Button onClick={()=>setOpenModal(true)}>送金</Button>
      <SendMenu balance={balance} open_modal={open_modal} setOpenModal={setOpenModal}/>
    </Box>
  )
}