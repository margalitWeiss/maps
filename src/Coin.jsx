export default function Coin({sum,dollarRate,type}){
    if(type=="SHEKEL"){
        return `${parseInt(sum / Number(dollarRate))}$`;
    }
    else
    return `${sum}₪`;
}