const products = [
  { name: "Ferrari F1 t-shirt 2023", price: 80, id: "1", idCat: "t-shirts", img: "../img/tShirtFerrari.jpg" },
  { name: "Mercedes F1 t-shirt 2023", price: 80, id: "2", idCat: "t-shirts", img: "../img/tShirtMercedes.jpg" },
  { name: "Ferrari F1 jacket 2023", price: 120, id: "3", idCat: "jackets", img: "../img/jacketFerrari.jpg" },
  { name: "Mercedes F1 jacket 2023", price: 120, id: "4", idCat: "jackets", img: "../img/jacketMercedes.jpg" },
  { name: "Ferrari F1 hoodie 2023", price: 140, id: "5", idCat: "hoodies", img: "../img/hoodieFerrari.jpg" },
  { name: "Mercedes F1 hoodie 2023", price: 140, id: "6", idCat: "hoodies", img: "../img/hoodieMercedes.jpg" },
  { name: "Ferrari F1 cap 2023", price: 50, id: "7", idCat: "caps", img: "../img/capFerrari.jpg" },
  { name: "Mercedes F1 cap 2023", price: 50, id: "8", idCat: "caps", img: "../img/capMercedes.jpg" },
]

export const getProducts = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products)
      }, 100)
  })
}

export const getProduct = (id) => {
  return new Promise(resolve => {
      setTimeout(() => {
          const product = products.find(prod => prod.id === id);
          resolve(product);
      }, 100)
  })
}

export const getProductsByCategory = (idCategory) => {
  return new Promise(resolve => {
      setTimeout(() => {
          const productsCategory = products.filter(prod => prod.idCat === idCategory)
          resolve(productsCategory);
      }, 100)
  })
}