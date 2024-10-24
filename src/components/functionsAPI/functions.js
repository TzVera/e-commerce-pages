import axios from 'axios'

const allProducts = async (stateProducts) => {
    const products = await axios.get('https://fakestoreapi.com/products')
    stateProducts(products.data)
}

const oneProduct = async (productId, stateProduct) => {
    const product = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    stateProduct(product.data)
}

export {
    allProducts,
    oneProduct
}