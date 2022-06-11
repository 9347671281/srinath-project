import React, { useState, useEffect } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const Products = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [loading, setLoading] = useState(false)

  // useEffect (() => {
  //   const showUsers = () => {
  //     setLoading(true);
  //     setTimeout(() => {
  //       axios.get(
  //           "https://fakestoreapi.com/products"
  //         )
  //         .then((res) => {
  //           setData(res.data);
  //           setLoading(false);
  //         });
  //     }, 1000);
  //   };
  // showUsers();      
  // }, [])
  // let componentMounted=true

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      //  const response = await fetch("https://fakestoreapi.com/products")
      // if(componentMounted){
      //   // The clone() method of the Response interface creates a clone of a response object, identical in every way, but stored in a different variable.
      //        setData(await response.clone().json());
      //        setFilter(await response.json());
      //        setLoading(false)
      //        console.log(filter)
      //    }
      //    return ()=>{
      //        componentMounted=false;
      //    }
      // }
      axios.get('https://fakestoreapi.com/products').then((responce) => setData(responce.data))
      // setFilter(await res);
      setLoading(false)
    }
    getProducts();
  }, [])
  console.log(data)
  // useEffect(()=>{ axios.get('https://fakestoreapi.com/products').then((responce)=>setData(responce.data))},[])
  // setFilter(responce.data)
  const Loading = () => {
    return (
      <>

        <div className='col-md-3'>
          <SkeletonTheme height={350} />
        </div>
        <div className='col-md-3'>
          <SkeletonTheme height={350} />
        </div>
        <div className='col-md-3'>
          <SkeletonTheme height={350} />
        </div>
        <div className='col-md-3'>
          <SkeletonTheme height={350} />
        </div>
      </>

    );
  };
  // filter function 
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList)
  }
  const ShowProducts = () => {
    return (
      <>

        <div className='buttons d-flex justify-content-center mb-5 pb-5'>
          <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)} >All</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")} >Men's Clothing</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}  >Womens's Clothing</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")} >jewellery</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")} >Electronic</button>
        </div>
        {filter.map((product) => {
          return (
            <>

              <div className='col-md-3 mb-4'>
                <div className="card h-100 text-center p-4 " key={product.id}>
                  <img src={product.image} className="card-img-top" alt={product.title} height="200px" />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink to={`/Products/${product.id}`} className="btn btn-outline-dark">Buy now</NavLink>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </>
    );
  }
  return (
    <div>
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col-12 mb-5'>
            <h1 className="display-6 fw-bolder
     text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className='row justify-content-center'>

          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  )
}

export default Products