import { useEffect, useState } from "react";
import HotelCard from "./HotelCard";

const Hotel = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setHotels(data))
    }, [])

    return (
        <div className="grid grid-cols-3 gap-10">
            {
                hotels.map(hotel => <HotelCard
                    key={hotel.id}
                    hotel={hotel}
                ></HotelCard>)
            }
        </div>
    );
};

export default Hotel;