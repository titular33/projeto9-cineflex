import React, {useState} from "react";
export default function Seat({
    infoSeat,
    isAvailable,
    choosedSeats, setChoosedSeats,
    nameSeats, setNameSeats,
})
{
    const { id, name } = infoSeat;
    const [selected, setSelected] = useState(false);
    let choosed = [];

    function ToggleSeat (id, name) {
        selected ? deleteSeat (id, name) : addSeat (id, name);
    }
    function Check(){
        if (isAvailable === false){
            alert ("Esse assento não está disponivel");
        }
    }
    function addSeat (id, name) {
        setSelected(true);
        choosed = choosedSeats.filter((item) => id !== item);
        nameSeats = nameSeats.filter((item) => name !== item);
        const test = [...choosed, id];
        const test2 = [...nameSeats, ("Assento" + name)];
        setNameSeats(test2);
        setChoosedSeats(test);
    }
    function deleteSeat (id, name) {
        setSelected(false);
        choosed = choosedSeats.filter((item) => id !== item);
        nameSeats = nameSeats.filter((item) => name !== item);
        const test = [...choosed];
        const test2 = [...nameSeats];
        setNameSeats(test2);
        setChoosedSeats(test);
    }
    return (
         <li>
             <div
                 onclick = {() => {ToggleSeat(id, name); Check(isAvailable);}}
                 className= {`seat ${isAvailable ? "gray" : "yellow"} ${selected ? "green" : ""}`}>
                 {name}
             </div>
         </li>

    );
}
