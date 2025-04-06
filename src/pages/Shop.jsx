import React from 'react'
import Hero from '../components/Hero/Hero'
import TodayProduct from '../components/TodayProduct/TodayProduct'
import ProductCard from '../components/ProductCard/ProductCard'
import ProductGrid from '../components/ProductGrid/ProductGrid'
import ButtonCommon from '../components/ButtonCommon/ButtonCommon'
import Category from '../components/Category/Category'
import MonthProducts from '../components/MonthProducts/MonthProducts'
import NewArrive from '../components/NewArrive/NewArrive'
import Benefits from '../components/Benefits/Benefits'
import Scrollup from '../components/Scrollup/Scrollup'

const Shop = () => {
  return (
    <div>
      <Hero />
      <TodayProduct />
      <ProductGrid />
      <div className="d-flex justify-content-center my-5">
        <ButtonCommon name="View All Products" to="/Allproduct" />
      </div>
      <Category />
      <MonthProducts />
      <ProductGrid />
      <div className="d-flex justify-content-center my-5">
        <ButtonCommon name="View All Products" to="/Allproduct" />
      </div>
      <NewArrive />
      <Benefits />
      <Scrollup/>
      
    </div>
  );
}

export default Shop
