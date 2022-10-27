import { Title } from '@mui/icons-material';
import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home__container">
          <img 
          className="home__image"
          src="https://i.ytimg.com/vi/mObOQrxM4nA/maxresdefault.jpg" 
          alt=''/>

          <div className='home__row'>

            <Product 
              id = "12345667"
              title= "Boat_Airpod-True wireless 40hr playback with Asap charge "
              price ={1100}
              rating ={4}
              image="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_357b6c8e-1332-4864-bf5c-b83ca9caf4bc_600x.png?v=1641980343"/>
            <Product
              id = "17768667"
              title= "Noise_Airpod-13mm drive and IWP technology"
              price ={899.99}
              rating ={3}
              image="https://cdn.shopify.com/s/files/1/0997/6284/products/1_0e7776f3-fb47-4204-9f2a-bf62b215497d_480x.png?v=1655378277"/>
            <Product
              id = "13422167"
              title= "Apple_Airpods pro with Magsafe charging case"
              price ={13999}
              rating ={5}
              image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1591634795000"/>
            <Product
              id = "098888067"
              title= "Boult_Airpod-Bluetooth headset"
              price ={799}
              rating ={4}
              image="https://rukminim1.flixcart.com/image/832/832/kxqg2a80/headphone/1/s/q/-original-imaga4m8sz5ymcf7.jpeg?q=70"/>

          </div>
          <div className='home__row'>

          <Product
            id = "12974867"
            title= "Iphone 13(Red,128)"
            price ={67000}
            rating ={5}
            image="https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg"/> 
          <Product
            id = "12432767"
            title= "Oneplus 10(Emerald Forest,256)"
            price ={52999.99}
            rating ={4}
            image="https://m.media-amazon.com/images/I/618hqM-yxtL._SL1500_.jpg"/>
          <Product
            id = "123888867"
            title= "Samsung Galaxy S22 Ultra 5G (Burgundy 12GB ram,512GB)"
            price ={114999}
            rating ={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/41QPv5h1veL._SX300_SY300_QL70_FMwebp_.jpghttps://images-eu.ssl-images-amazon.com/images/I/41QPv5h1veL._SX300_SY300_QL70_FMwebp_.jpg"/>  
  
          </div>
          <div className='home__row'>

          <Product
            id = "1208667"
            title= "Macbook M2 Air (Midnight blue,512)"
            price ={156999}
            rating ={5}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665"/>

          </div>
          <div className='home__row'>

          <Product
            id = "9999999"
            title= "Hp victus(rzyen 5 5600H ) Laptop"
            price ={63000}
            rating ={4}
            image="https://m.media-amazon.com/images/I/616QgDNVs-L._SL1500_.jpg"/> 
          <Product
            id = "7777777"
            title= "Asus vivobook 15(8 Gb,512GB SSD)"
            price ={52999.99}
            rating ={3}
            image="https://dlcdnwebimgs.asus.com/gain/e94c945e-6374-44a3-a21b-62943a64f103/"/>
          <Product
            id = "16666666"
            title= "Lenovo Leign Gaming Laptop"
            price ={78999}
            rating ={5}
            image="https://img.poorvika.com/cdn-cgi/image/width=1600,height=1600,quality=75/1600_JPG/Laptops/Lenovo/Lenovo-Legion-5-Gaming-Ryzen-5-82B500MMIN/Lenovo-Legion-5-Gaming-Ryzen-5-82B500MMIN-Phantom-Black-1.jpg"/>  
  
          </div>
          
 
        </div>
        </div>
  )
}

export default Home