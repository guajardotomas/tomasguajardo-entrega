export const products = [
    {
        id: 1,
        name: 'CAMISA LINO - ALGODÓN',
        price: '50.990',
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://static.zara.net/assets/public/eff4/6cd8/d9c04fd98067/54d616e1d2b7/01063600251-p/01063600251-p.jpg?ts=1727954202889&w=594&f=auto',
        category: 'camisa',
        sizes: ['S', 'M', 'XL']
    },
    {
        id: 2,
        name: 'CAMISA POLO LINO EFECTO ARRUGADO',
        price: '65.990',
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://static.zara.net/assets/public/73b6/7796/842646058c9e/ae7b23f597e1/04344352700-e1/04344352700-e1.jpg?ts=1727684956644&w=287&f=auto',
        category: 'camisa',
        sizes: ['S', 'M', 'XS']
    },
    {
        id: 3,
        name: 'BERMUDA CARGO PLIEGUES',
        price: '45.990',
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://static.zara.net/assets/public/9221/21a8/af7e4bc5ac54/e70b027c4dbd/02675426505-e1/02675426505-e1.jpg?ts=1713870317362&w=287&f=auto',
        category: 'bermuda',
        sizes: ['S', 'M', 'XXL']
    },
    {
        id: 4,
        name: 'CAMISA 100% LINO',
        price: '37.990',
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://static.zara.net/assets/public/1caa/71ae/cc974f2caaa6/3ad9c3bd5e2b/03090200250-p/03090200250-p.jpg?ts=1707316112686&w=594&f=auto',
        category: 'camisa',
        sizes: ['S', 'M', 'XXL']
    },
    {
        id: 5,
        name: 'VESTIDO MIDI HALTER ZW COLLECTIO',
        price: '50.990',
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://static.zara.net/assets/public/e493/6581/83194e58adb0/d32fd657080c/04786087800-p/04786087800-p.jpg?ts=1711561311590&w=750&f=auto',
        category: 'vestido',
        sizes: ['S', 'M', 'XXS']
    },
    {
        id: 6,
        name: 'CAMISA LINO - ALGODÓN',
        price: '50.990',
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://static.zara.net/assets/public/eff4/6cd8/d9c04fd98067/54d616e1d2b7/01063600251-p/01063600251-p.jpg?ts=1727954202889&w=594&f=auto',
        category: 'camisa',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 7,
        name: 'CAMISA POLO LINO EFECTO ARRUGADO',
        price: '65.990',
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://static.zara.net/assets/public/73b6/7796/842646058c9e/ae7b23f597e1/04344352700-e1/04344352700-e1.jpg?ts=1727684956644&w=287&f=auto',
        category: 'camisa',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 8,
        name: 'BERMUDA CARGO PLIEGUES',
        price: '45.990',
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://static.zara.net/assets/public/9221/21a8/af7e4bc5ac54/e70b027c4dbd/02675426505-e1/02675426505-e1.jpg?ts=1713870317362&w=287&f=auto',
        category: 'bermuda',
        sizes: ['S', 'M', 'L']
    },
];

export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(()=>{
            res(products)
        },1000);
    })
};

export const getProductById = (id) => {
    return new Promise((res) =>{
            const productoFiltrado = products.find((product) => product.id === parseInt(id));
            setTimeout(() =>{
                res(productoFiltrado)
            },1000);
        });
};

export const getProductByCategory = (category) =>{
    return new Promise((res) =>{
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() =>{
            res(productosFiltrados);
        }, 2000);
    });
};