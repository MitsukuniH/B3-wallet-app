import { Box, Button, IconButton, Modal, TextField } from "@mui/material"
import { CopyButton } from "./CopyButton"
import { Dispatch, SetStateAction, useState } from "react"
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { USERS } from "../SampleData";

export const UserInfo=(
  {setLog}:{setLog:Dispatch<SetStateAction<Array<string>>>}
)=>{
  const [open_modal, setOpenModal]= useState<boolean>(false);
  const [to_address, setToAddress] = useState<string>("");
  const [amount, setAmount] = useState<number>(0.1);
  const [balance, setBalance] = useState<number>(100);
  const [err, setErr] = useState<string>("");

  const handleSubmit = ()=>{
    const found = USERS.find(e=>e.address===to_address);
    if(!found){
      setErr("有効なアドレスを入力してください");
      return;
    }
    const user_name = found.name;
    if(amount > balance){
      setErr("送金額が所持額を超えています");
      return;
    }
    setBalance(b=>b-amount);
    setLog(l=>[`${amount}ETHの送金:Youから${user_name}`,...l]);

    handleClose();
  }
  const handlePaste = ()=>{
    navigator.clipboard.readText().then(r=>setToAddress(r));
  }
  const handleClose = ()=>{
    setOpenModal(false);
    setErr("");
  }
  return(
    <Box>
      <h3>You</h3>
      <CopyButton text="address"/>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"end"}}><h2>{balance}</h2><h3>EHT</h3></div>
      <Button onClick={()=>setOpenModal(true)}>送金</Button>
      <Modal open={open_modal} onClose={handleClose}>
        <Box className="modal">
          <TextField label="送金先" value={to_address} onChange={e=>setToAddress(e.target.value)} InputProps={{endAdornment:(
            <IconButton aria-label="paste" onClick={handlePaste}><ContentPasteIcon/></IconButton>
          )}}/>
          <TextField type="number" value={amount} onChange={e=>setAmount(Number(e.target.value))} inputProps={{min:0, step:0.1}}/>
          <Button onClick={handleSubmit}>送金</Button>
          <Box color="red">{err}</Box>
        </Box>
      </Modal>
    </Box>
  )
}