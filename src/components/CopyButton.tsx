import { Button, Tooltip } from "@mui/material";
import { useState } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

//クリップボードにコピーするボタン
export const CopyButton = (
  {text}:{text:string}
)=>{
  const[isCopied, setIsCopied] = useState<boolean>(false) //コピーボタンが押されたかを記録する

  const copyAddress = (ad:string) =>{
    //クリップボードにコピー
    navigator.clipboard.writeText(ad);
    //"Copy to clipboard"から"Copied"に1秒だけ表示を変更
    setIsCopied(true)
    setTimeout(()=>{setIsCopied(false)}, 1000)
  }
  return(
    <Tooltip
      arrow
      placement='top'
      title={isCopied?"Copied!":"Copy to clipboard"}
    >
      <Button variant="text" onClick={()=>copyAddress(text)}>
        <ContentCopyIcon />
        {text}
      </Button>
    </Tooltip>
  )
}