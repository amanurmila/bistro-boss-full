import React from 'react';

const MenuItem = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div className='flex justify-center items-center gap-3'>
            <div>
                <img className='w-20 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl' src={image} alt="" />
            </div>
            <div>
                <h4 className='font-playfair'>{name}-------</h4>
                <p className='font-light'>{recipe}</p>
            </div>
            <div>
                <h5 className='text-yellow-500'>${price}</h5>
            </div>
        </div>
    );
};

export default MenuItem;