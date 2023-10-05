import { BsBuildingAdd } from 'react-icons/bs';
import { MdOutlineKingBed, MdOutlineBathtub, MdOutlineAssistantDirection, MdFavoriteBorder } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';


const HotelCard = ({ hotel }) => {
    const { id, name, image, place, category, price, forRentOrSale } = hotel;

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='rounded h-72 p-3' src={image} alt="Shoes" /></figure>
                <h3 className='absolute top-10 left-10 bg-white text-blue-800 rounded-full font-medium px-3 py-1'>For {forRentOrSale}</h3>
                <h3 className='absolute left-0 top-64 text-white bg-blue-900 px-8 py-1 rounded-full'>{category}</h3>
                <div className="card-body">
                    <div className='flex gap-3 items-center'>
                        <CiLocationOn></CiLocationOn>
                        <h2 className="text-sm">{place}</h2>
                    </div>
                    <h2 className='card-title mb-4'>{name}</h2>
                    <div className='grid grid-cols-4 mb-4'>
                        <div>
                            <span><BsBuildingAdd></BsBuildingAdd></span>
                            <span>3 Room</span>
                        </div>
                        <div>
                            <span><MdOutlineKingBed></MdOutlineKingBed></span>
                            <span>4 Bed</span>
                        </div>
                        <div>
                            <span><MdOutlineBathtub></MdOutlineBathtub></span>
                            <span>1 Bath</span>
                        </div>
                        <div>
                            <span><MdOutlineAssistantDirection></MdOutlineAssistantDirection></span>
                            <span>732 sft</span>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <h2><span className='text-xl font-semibold text-blue-900'>${price}</span> /month</h2>
                        <div className='flex items-center gap-2'>
                            <div className='bg-white h-8 w-8 pl-2 py-2 btn-circle absolute top-10 right-10 '><MdFavoriteBorder></MdFavoriteBorder></div>
                            <Link to={`/details/${id}`}>
                                <button className='btn btn-outline text-blue-900 font-bold normal-case btn-sm'>Read more</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;