export const refreshLocalStorage = (products) => {
    localStorage.removeItem('cart')
    localStorage.setItem('cart', JSON.stringify(products))
}
