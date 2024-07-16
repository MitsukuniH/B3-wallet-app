import { Box, Button, IconButton, Modal, TextField } from "@mui/material"
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { USERS } from "../SampleData";
import { useState } from "react";
import { SetState } from "../interface";

//送金メニュー
export const SendMenu = (
  {balance, open_modal, setOpenModal}:
  {balance:number, open_modal:boolean, setOpenModal:SetState<boolean>}
)=>{
  const [to_address, setToAddress] = useState<string>("");
  const [amount, setAmount] = useState<number>(0.1);
  const [err, setErr] = useState<string>("");
  
  //モーダルを閉じる際の処理
  const handleClose = ()=>{
    setOpenModal(false);
    setErr("");           //エラーをクリア
  }

  //送金を決定する際の処理
  const handleSubmit = ()=>{
    const found = USERS.find(e=>e.address===to_address);      //アドレスからユーザーを検索
    //ユーザーが見つからなかった際の処理
    if(!found){
      setErr("有効なアドレスを入力してください");
      return;
    }
    const user_name = found.name;
    //送金額が所持金を超えていた際の処理
    if(amount > balance){
      setErr("送金額が所持額を超えています");
      return;
    }
    localStorage.setItem("balance", (Math.floor((balance-amount)*10)/10).toString());

    //ログに取引を追加
    const data = localStorage.getItem("transitions")
    if(!data){
      localStorage.setItem("transitions", `${amount}ETHの送金:Youから${user_name}`);
    } else {
      localStorage.setItem("transitions", `${amount}ETHの送金:Youから${user_name},${data}`)
    }

    location.reload();   //変更を適用するためにページをリロード
    // handleClose();                                            //モーダルを閉じる
  }
  const handlePaste = ()=>{
    navigator.clipboard.readText().then(r=>setToAddress(r));
  }
  return(
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
  )
}