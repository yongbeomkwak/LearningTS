import * as CryptoJS from "crypto-js";
//crypto-js의 모든것(*)을 import 하여 CryptoJS로 명칭함

class Block{
  public index:number;
  public hash:string;
  public previousHash:string;
  public data:string;
  public timestamp:number;

  static calculateBlockHash =(index:number,
    hash:string,
    previousHash:string,
    data:string,
    timestamp:number) : string =>
    {
      return CryptoJS.SHA256(index+previousHash+timestamp+data).toString();
    }

  constructor(
    index:number,
    hash:string,
    previousHash:string,
    data:string,
    timestamp:number
  )
  
  {
    this.index=index
    this.hash=hash
    this.previousHash=previousHash
    this.data=data
    this.timestamp=timestamp
  }
  
}

const geneisBlock:Block =new Block(0,"20211210","","Hello",123456)

let blockchain:Block[]=[geneisBlock]

const getBlockchain = () : Block[] => blockchain;
const getLastBlock = () :Block => blockchain[blockchain.length-1];
const getNewTimeStamp =() :number => Math.round(new Date().getTime()/1000);


console.log(blockchain)

export{};