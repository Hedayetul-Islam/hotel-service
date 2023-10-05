
import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";

const Hotel = () => {
    const [hotels, setHotels] = useState([]);
    const [visibleHotels, setVisibleHotels] = useState(6);
    const [loadMore, setLoadMore] = useState(3);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setHotels(data));
    }, []);

    const showMoreHotels = () => {
        setVisibleHotels((prevVisible) => prevVisible + loadMore);
    };

    return (
        <div>
            <div className="grid grid-cols-3 gap-10 mb-6 px-10">
                {hotels.slice(0, visibleHotels).map((hotel) => (
                    <HotelCard key={hotel.id} hotel={hotel}></HotelCard>
                ))}
            </div>
            {visibleHotels < hotels.length && (
                <h3 className="text-center">
                    <button
                        className="btn btn-primary mb-6"
                        onClick={showMoreHotels}
                    >
                        Show More
                    </button>
                </h3>
            )}
        </div>
    );
};

export default Hotel;
