const { faker } = require("@faker-js/faker");
const Categories = require("./models/Category.model")
const Brand = require("./models/Brand.model")
const Products = require("./models/Product.model");
const db = require("./config/db");


const products_list = [
    {
        id:1,
        name: "Alcatel 3H",
        description: "Tamaño de la pantalla: 6.52 "(165.64 mm x 75.59 mm x 8.8 mm)",
        price: 33199,
        image: ["https://http2.mlstatic.com/D_NQ_NP_2X_705727-MLA47762780436_102021-F.webp","https://http2.mlstatic.com/D_NQ_NP_666595-MLA47752720383_102021-O.webp","https://http2.mlstatic.com/D_NQ_NP_862968-MLA47752638548_102021-O.webp","https://http2.mlstatic.com/D_NQ_NP_940163-MLA47752638549_102021-O.webp"],
        stock: 4,
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_705727-MLA47762780436_102021-F.webp",
        brand: "Alcatel",
        category:"Phones"
    },
    {
        id:2,
        name: "Apple iPhone 11",
        description: "Clasificación IP68 de resistencia al agua y al polvo (hasta 30 minutos a una profundidad máxima de 2 metros",
        price: 177000,
        image: ["https://http2.mlstatic.com/D_NQ_NP_2X_796892-MLA46114829828_052021-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_781098-MLA46114829829_052021-F.webp","https://http2.mlstatic.com/D_NQ_NP_962164-MLA46115014397_052021-O.webp","https://http2.mlstatic.com/D_NQ_NP_615019-MLA46114829834_052021-O.webp"],
        stock: 7,
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_796892-MLA46114829828_052021-F.webp",
        brand: "Apple",
        category:"Phones"
    },
    {
        id:3,
        name: "Moto G60s",
        description: "Procesador MediaTek MT6382 Helio G95 Octa-Core de 2.05GHz con 6GB de RAM",
        price: 53000,
        image: ["https://http2.mlstatic.com/D_NQ_NP_966438-MLA48112811958_112021-O.webp","https://http2.mlstatic.com/D_NQ_NP_938617-MLA48112925074_112021-O.webp","https://http2.mlstatic.com/D_NQ_NP_733877-MLA48112828923_112021-O.webp","https://http2.mlstatic.com/D_NQ_NP_804552-MLA48112811957_112021-O.webp"],
        stock: 15,
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_966438-MLA48112811958_112021-O.webp",
        brandId: 3
    },
    {
        id:4,
        name: "Motorola Edge 20 ",
        description: "Procesador MediaTek Dimensity 720 Octa-Core de 2GHz con 6GB de RAM",
        price: 72900,
        image: ["https://http2.mlstatic.com/D_NQ_NP_833619-MLA48233725917_112021-O.webp","https://http2.mlstatic.com/D_NQ_NP_938617-MLA48112925074_112021-O.webp","https://http2.mlstatic.com/D_NQ_NP_733877-MLA48112828923_112021-O.webp","https://http2.mlstatic.com/D_NQ_NP_804552-MLA48112811957_112021-O.webp"],
        stock: 6,
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_833619-MLA48233725917_112021-O.webp",
        brandId: 3
    },
    {
        id:5,
        name: "Samsung Galaxy Tab  ",
        description: "Memoria interna expandible hasta 1 TB con fuente externa.",
        price: 53000,
        image: ["https://http2.mlstatic.com/D_NQ_NP_765874-MLA47146197629_082021-O.webp","https://http2.mlstatic.com/D_NQ_NP_662402-MLA47146427171_082021-O.webp","https://http2.mlstatic.com/D_NQ_NP_733877-MLA48112828923_112021-O.webp","https://http2.mlstatic.com/D_NQ_NP_804552-MLA48112811957_112021-O.webp"],
        stock: 6,
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_765874-MLA47146197629_082021-O.webp",
        brandId: 4
    },
    {
        id:6,
        name: "Apple Macbook Air",
        description: "GPU de hasta 8 núcleos con gráficos hasta 5 veces más veloces para apps y juegos con gráficos avanzados",
        price: 190000,
        image: ["https://http2.mlstatic.com/D_NQ_NP_801112-MLA46516512347_062021-O.webp","https://http2.mlstatic.com/D_NQ_NP_645799-MLA46516517280_062021-O.webp","https://http2.mlstatic.com/D_NQ_NP_640916-MLA46516517281_062021-O.webp","https://http2.mlstatic.com/D_NQ_NP_628610-MLA46516504412_062021-O.webp"],
        stock: 6,
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_801112-MLA46516512347_062021-O.webp",
        brandId: 2
    },
    {
        id:7,
        name: "Samsung Galaxy I7 ",
        description: "GPU de hasta 8 núcleos con gráficos hasta 5 veces más veloces para apps y juegos con gráficos avanzados",
        price: 179.399,
        image: ["https://http2.mlstatic.com/D_NQ_NP_665967-MLA49447613233_032022-O.webp","https://http2.mlstatic.com/D_NQ_NP_946007-MLA49447520832_032022-O.webp","https://http2.mlstatic.com/D_NQ_NP_705424-MLA49447629138_032022-O.webp","https://http2.mlstatic.com/D_NQ_NP_626157-MLA49447516880_032022-O.webp"],
        stock: 8,
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_665967-MLA49447613233_032022-O.webp",
        brandId: 4
    },
    {
        id:8,
        name: "Samsung Galaxy Watch4 Classic ",
        description: "Caja 42mm de acero inoxidable silver, malla silver de fluoroelastómero y bisel black de acero inoxidable SM-R880",
        price: 53.999,
        image: ["https://http2.mlstatic.com/D_NQ_NP_781975-MLA47030150137_082021-O.webp","https://http2.mlstatic.com/D_NQ_NP_642070-MLA47030150138_082021-O.webp","https://http2.mlstatic.com/D_NQ_NP_600593-MLA47030070378_082021-O.webp","https://http2.mlstatic.com/D_NQ_NP_617497-MLA47030070380_082021-O.webp"],
        stock: 16,
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_781975-MLA47030150137_082021-O.webp",
        brandId: 4
    },
    {
        id:9,
        name: "Apple Watch Series 7",
        description: "Caja de aluminio color azul medianoche - Correa deportiva azul medianoche",
        price: 78.216,
        image: ["https://http2.mlstatic.com/D_NQ_NP_858093-MLA48096508611_112021-O.webp","https://http2.mlstatic.com/D_NQ_NP_918886-MLA48096508608_112021-O.webp","https://http2.mlstatic.com/D_NQ_NP_613094-MLA48096714353_112021-O.webp","https://http2.mlstatic.com/D_NQ_NP_792251-MLA48096443783_112021-O.webp"],
        stock: 21,
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_858093-MLA48096508611_112021-O.webp",
        brandId: 2
    },
    {
        id:10,
        name: "Alcatel 1",
        description: "Procesador MediaTek MT6739 Quad-Core de 1.3GHz con 1GB de RAM",
        price: 17.799,
        image: ["https://http2.mlstatic.com/D_NQ_NP_913104-MLA41487029341_042020-O.webp","https://http2.mlstatic.com/D_NQ_NP_934103-MLA41486926442_042020-O.webp","https://http2.mlstatic.com/D_NQ_NP_968795-MLA41487029342_042020-O.webp","https://http2.mlstatic.com/D_NQ_NP_964976-MLA41487029343_042020-O.webp"],
        stock: 14,
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_913104-MLA41487029341_042020-O.webp",
        brandId: 1
    },

]

const categories_list = [
    {
        id: 1,
        name: "Phones",
        thumbnail: "store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-og-202104?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1617339367000",
    },
    {
        id: 2,
        name: "Computers",
        thumbnail: "prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/33/3301045/APPLE-MacBook-Pro-16-Srebrny.jpg",
    },
    {
        id: 3,
        name: "Smart Watch",
        thumbnail: "www.apple.com/newsroom/images/product/watch/standard/Apple-watch-watchos7_three-watchfaces_06222020.jpg.landing-big_2x.jpg",
    },
    {
        id: 4,
        name: "Tablets",
        thumbnail: "media.revistagq.com/photos/614b0cd12efa7ebc613dcc10/master/pass/Apple_iPad-mini_colors_09142021.jpg"
    }

]

const brands_list = [
    {
        id: 1,
        name: "Alcatel",
        image: "e7.pngegg.com/pngimages/80/345/png-clipart-alcatel-mobile-telephone-telecommunication-alcatel-one-touch-iphone-iphone-angle-electronics.png"
    },
    {
        id: 2,
        name: "Apple",
        image: "w7.pngwing.com/pngs/654/859/png-transparent-apple-logo-cupertino-cartoon-crowd-company-computer-logo.png"
    },
    {
        id: 3,
        name: "Motorola",
        image: "e7.pngegg.com/pngimages/932/415/png-clipart-motorola-xoom-logo-motorola-solutions-iphone-electronics-text.png"
    },
    {
        id: 4,
        name: "Samsung",
        image: "e7.pngegg.com/pngimages/717/794/png-clipart-logo-apple-inc-v-samsung-electronics-co-business-samsung-text-logo.png"
    }
]

productscategories_list=[
    {
        id:1,
        productId:1,
        categoryId:1
    },
    {
        id:2,
        productId:2,
        categoryId:1
    },
    {
        id:3,
        productId:3,
        categoryId:1
    },
    {
        id:4,
        productId:4,
        categoryId:1
    },
    {
        id:5,
        productId:5,
        categoryId:4
    },
    {
        id:6,
        productId:6,
        categoryId:2
    },
    {
        id:7,
        productId:7,
        categoryId:2
    },
    {
        id:8,
        productId:9,
        categoryId:3
    },
    {
        id:9,
        productId:8,
        categoryId:3
    },
]

async function setupSeed(){
    await Categories.bulkCreate(categories_list)
    await Brand.bulkCreate(brands_list)   
 }
 
 
 db.sync()
   .then(setupSeed)
   .then(() => process.exit(0))
   .catch((err) => {
     console.log("Somethin went wrong on the seed process", err.message);
     process.exit(1);
 });