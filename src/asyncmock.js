const products = [
  { name: "Alfa Romeo t-shirt 2023", price: 80, id: "1", idCategory: "t-shirts", idTeam: "alfa-romeo", logo: "../img/logoAlfaRomeo.svg", description: "", img: "../img/tShirtAlfaRomeo.jpg" },
  { name: "Alfa Romeo jacket 2023", price: 120, id: "2", idCategory: "jackets", idTeam: "alfa-romeo", logo: "../img/logoAlfaRomeo.svg", description: "", img: "../img/jacketAlfaRomeo.jpg" },
  { name: "Alfa Romeo hoodie 2023", price: 140, id: "3", idCategory: "hoodies", idTeam: "alfa-romeo", logo: "../img/logoAlfaRomeo.svg", description: "", img: "../img/hoodieAlfaRomeo.jpg" },
  { name: "Alfa Romeo cap 2023", price: 50, id: "4", idCategory: "caps", idTeam: "alfa-romeo", logo: "../img/logoAlfaRomeo.svg", description: "", img: "../img/capAlfaRomeo.jpg" },

  { name: "AlphaTauri t-shirt 2023", price: 80, id: "5", idCategory: "t-shirts", idTeam: "alpha-tauri", logo: "../img/logoAlphaTauri.svg", description: "", img: "../img/tShirtAlphaTauri.jpg" },
  { name: "AlphaTauri jacket 2023", price: 120, id: "6", idCategory: "jackets", idTeam: "alpha-tauri", logo: "../img/logoAlphaTauri.svg", description: "", img: "../img/jacketAlphaTauri.jpg" },
  { name: "AlphaTauri hoodie 2023", price: 140, id: "7", idCategory: "hoodies", idTeam: "alpha-tauri", logo: "../img/logoAlphaTauri.svg", description: "", img: "../img/hoodieAlphaTauri.jpg" },
  { name: "AlphaTauri cap 2023", price: 50, id: "8", idCategory: "caps", idTeam: "alpha-tauri", logo: "../img/logoAlphaTauri.svg", description: "", img: "../img/capAlphaTauri.jpg" },

  { name: "Alpine t-shirt 2023", price: 80, id: "9", idCategory: "t-shirts", idTeam: "alpine", logo: "../img/logoAlpine.png", description: "", img: "../img/tShirtAlpine.jpg" },
  { name: "Alpine jacket 2023", price: 120, id: "10", idCategory: "jackets", idTeam: "alpine", logo: "../img/logoAlpine.png", description: "", img: "../img/jacketAlpine.jpg" },
  { name: "Alpine hoodie 2023", price: 140, id: "11", idCategory: "hoodies", idTeam: "alpine", logo: "../img/logoAlpine.png", description: "", img: "../img/hoodieAlpine.jpg" },
  { name: "Alpine cap 2023", price: 50, id: "12", idCategory: "caps", idTeam: "alpine", logo: "../img/logoAlpine.png", description: "", img: "../img/capAlpine.jpg" },

  { name: "Aston Martin t-shirt 2023", price: 80, id: "13", idCategory: "t-shirts", idTeam: "aston-martin", logo: "../img/logoAstonMartin.svg", description: "", img: "../img/tShirtAstonMartin.jpg" },
  { name: "Aston Martin jacket 2023", price: 120, id: "14", idCategory: "jackets", idTeam: "aston-martin", logo: "../img/logoAstonMartin.svg", description: "", img: "../img/jacketAstonMartin.jpg" },
  { name: "Aston Martin hoodie 2023", price: 140, id: "15", idCategory: "hoodies", idTeam: "aston-martin", logo: "../img/logoAstonMartin.svg", description: "", img: "../img/hoodieAstonMartin.jpg" },
  { name: "Aston Martin cap 2023", price: 50, id: "16", idCategory: "caps", idTeam: "aston-martin", logo: "../img/logoAstonMartin.svg", description: "", img: "../img/capAstonMartin.jpg" },

  { name: "Ferrari t-shirt 2023", price: 80, id: "17", idCategory: "t-shirts", idTeam: "ferrari", logo: "../img/logoFerrari.png", description: "", img: "../img/tShirtFerrari.jpg" },
  { name: "Ferrari jacket 2023", price: 120, id: "18", idCategory: "jackets", idTeam: "ferrari", logo: "../img/logoFerrari.png", description: "", img: "../img/jacketFerrari.jpg" },
  { name: "Ferrari hoodie 2023", price: 140, id: "19", idCategory: "hoodies", idTeam: "ferrari", logo: "../img/logoFerrari.png", description: "", img: "../img/hoodieFerrari.jpg" },
  { name: "Ferrari cap 2023", price: 50, id: "20", idCategory: "caps", idTeam: "ferrari", logo: "../img/logoFerrari.png", description: "", img: "../img/capFerrari.jpg" },

  { name: "Haas t-shirt 2023", price: 80, id: "21", idCategory: "t-shirts", idTeam: "haas", logo: "../img/logoHaas.png", description: "", img: "../img/tShirtHaas.jpg" },
  { name: "Haas jacket 2023", price: 120, id: "22", idCategory: "jackets", idTeam: "haas", logo: "../img/logoHaas.png", description: "", img: "../img/jacketHaas.jpg" },
  { name: "Haas hoodie 2023", price: 140, id: "23", idCategory: "hoodies", idTeam: "haas", logo: "../img/logoHaas.png", description: "", img: "../img/hoodieHaas.jpg" },
  { name: "Haas cap 2023", price: 50, id: "24", idCategory: "caps", idTeam: "haas", logo: "../img/logoHaas.png", description: "", img: "../img/capHaas.jpg" },

  { name: "McLaren t-shirt 2023", price: 80, id: "25", idCategory: "t-shirts", idTeam: "mclaren", logo: "../img/logoMcLaren.png", description: "", img: "../img/tShirtMcLaren.jpg" },
  { name: "McLaren jacket 2023", price: 120, id: "26", idCategory: "jackets", idTeam: "mclaren", logo: "../img/logoMcLaren.png", description: "", img: "../img/jacketMcLaren.jpg" },
  { name: "McLaren hoodie 2023", price: 140, id: "27", idCategory: "hoodies", idTeam: "mclaren", logo: "../img/logoMcLaren.png", description: "", img: "../img/hoodieMcLaren.jpg" },
  { name: "McLaren cap 2023", price: 50, id: "28", idCategory: "caps", idTeam: "mclaren", logo: "../img/logoMcLaren.png", description: "", img: "../img/capMcLaren.jpg" },

  { name: "Mercedes t-shirt 2023", price: 80, id: "29", idCategory: "t-shirts", idTeam: "mercedes", logo: "../img/logoMercedes.svg", description: "", img: "../img/tShirtMercedes.jpg" },
  { name: "Mercedes jacket 2023", price: 120, id: "30", idCategory: "jackets", idTeam: "mercedes", logo: "../img/logoMercedes.svg", description: "", img: "../img/jacketMercedes.jpg" },
  { name: "Mercedes hoodie 2023", price: 140, id: "31", idCategory: "hoodies", idTeam: "mercedes", logo: "../img/logoMercedes.svg", description: "", img: "../img/hoodieMercedes.jpg" },
  { name: "Mercedes cap 2023", price: 50, id: "32", idCategory: "caps", idTeam: "mercedes", logo: "../img/logoMercedes.svg", description: "", img: "../img/capMercedes.jpg" },

  { name: "Red Bull t-shirt 2023", price: 80, id: "33", idCategory: "t-shirts", idTeam: "red-bull", logo: "../img/logoRedBull.png", description: "", img: "../img/tShirtRedBull.jpg" },
  { name: "Red Bull jacket 2023", price: 120, id: "34", idCategory: "jackets", idTeam: "red-bull", logo: "../img/logoRedBull.png", description: "", img: "../img/jacketRedBull.jpg" },
  { name: "Red Bull hoodie 2023", price: 140, id: "35", idCategory: "hoodies", idTeam: "red-bull", logo: "../img/logoRedBull.png", description: "", img: "../img/hoodieRedBull.jpg" },
  { name: "Red Bull cap 2023", price: 50, id: "36", idCategory: "caps", idTeam: "red-bull", logo: "../img/logoRedBull.png", description: "", img: "../img/capRedBull.jpg" },

  { name: "Williams t-shirt 2023", price: 80, id: "37", idCategory: "t-shirts", idTeam: "williams", logo: "../img/logoWilliams.png", description: "", img: "../img/tShirtWilliams.jpg" },
  { name: "Williams jacket 2023", price: 120, id: "38", idCategory: "jackets", idTeam: "williams", logo: "../img/logoWilliams.png", description: "", img: "../img/jacketWilliams.jpg" },
  { name: "Williams hoodie 2023", price: 140, id: "39", idCategory: "hoodies", idTeam: "williams", logo: "../img/logoWilliams.png", description: "", img: "../img/hoodieWilliams.jpg" },
  { name: "Williams cap 2023", price: 50, id: "40", idCategory: "caps", idTeam: "williams", logo: "../img/logoWilliams.png", description: "", img: "../img/capWilliams.jpg" },
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
          const productsCategory = products.filter(prod => prod.idCategory === idCategory)
          resolve(productsCategory);
      }, 100)
  })
}

export const getProductsByTeam = (idTeam) => {
  return new Promise(resolve => {
      setTimeout(() => {
          const productsTeam = products.filter(prod => prod.idTeam === idTeam)
          resolve(productsTeam);
      }, 100)
  })
}
