import axios from "axios";
import "./style.css";
export default function SendOrder({
    choosedSeats, 
    nameSeats, 
    inputCPF, 
    inputName,
}) {
    if (nameSeats.length !==0 && inputName.length !== 0 && inputCPF.length === 11)
    {
        const order ={
            ids: choosedSeats,
            cpf: inputCPF,
            name: inputName,
        };
        const send = axios.post ('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many',order);
        send.then(treatment);
        send.catch(() => console.error("Failed to send", send.error))

    }
    function treatment() {
        alert ("Data sent")
    }
}