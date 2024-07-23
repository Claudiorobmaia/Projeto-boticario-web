import { useEffect, useState } from 'react'
import './style.css'
import api from '../../services/api'

function Home() {
  const [product, setProduct] = useState([])

 

  async function getProduct(){
    const productFromApi = await api.get('/produtos')
    
    setProduct(productFromApi.data)
    console.log(product)
  }
  
  useEffect(() => {
    getProduct()
  }, [])

  return (
 
      <div className='container'>
    { product.map(products => (

    <div key={products.id}>
        <p>Nome: {products.name} </p>
        <p>Preço: {products.price} </p>
        <p>Descrição: {products.description} </p>
       </div>

    ))}
   

      </div>
     
  )
}

export default Home
