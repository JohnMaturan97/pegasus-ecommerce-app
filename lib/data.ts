import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("evo101"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("evo101"),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Sony PlayStation 5",
      slug: "sony-playstation-5",
      category: "Gaming Console",
      image: "/images/sonyplaystation5.jpg",
      price: 499,
      brand: "Sony",
      rating: 4.9,
      numReviews: 250,
      countInStock: 30,
      description: "Next-gen gaming console with advanced graphics and immersive gaming experiences.",
      isFeatured: true,
      banner: "/images/sony-playstation-5-banner.jpg",
    },
    {
      name: "Xbox Series S",
      slug: "xbox-series-s",
      category: "Gaming Console",
      image: "/images/xboxseriess.jpg",
      price: 499,
      brand: "Microsoft",
      rating: 4.8,
      numReviews: 120,
      countInStock: 25,
      description: "Powerful gaming console with high fidelity graphics and fast load times",
      isFeatured: true,
      banner: "/images/xboxseriesx-banner.jpg",
    },
    {
      name: "Sony WH-1000XM4",
      slug: "sony-wh-1000xm4",
      category: "Headphones",
      image: "/images/sonywh1000xm4.jpg",
      price: 349,
      brand: "Sony",
      rating: 4.8,
      numReviews: 15,
      countInStock: 30,
      description:
        "Industry-leading noise cancelling over-ear headphones with superior sound quality",
    },
    {
      name: "Sony A7 III",
      slug: "sony-a7-iii",
      category: "Camera",
      image: "/images/sonya7iii.jpg",
      price: 1999,
      brand: "Sony",
      rating: 4.0,
      numReviews: 20,
      countInStock: 12,
      description:
        "Full-frame mirrorless camera with exceptional autofocus and high-resolution image quality",
    },
    {
      name: "Sony Xperia 5 II",
      slug: "sony-xperia-5-ii",
      category: "Smartphone",
      image: "/images/sonyxperia5ii.jpg",
      price: 950,
      brand: "Sony",
      rating: 4.2,
      numReviews: 18,
      countInStock: 20,
      description:
        "Compact smartphone with advanced camera technology and 5G capability",
    },
    {
      name: "PlayStation 5",
      slug: "playstation-5",
      category: "Gaming Console",
      image: "/images/sonyplaystation5.jpg",
      price: 499,
      brand: "Sony",
      rating: 4.8,
      numReviews: 150,
      countInStock: 30,
      description:
        "Next-gen gaming console with ultra-high speed and immersive graphics",
    },
    {
      name: "Xbox Series X",
      slug: "xbox-series-x",
      category: "Gaming Console",
      image: "/images/xboxseriesx.jpg",
      price: 499,
      brand: "Microsoft",
      rating: 4.7,
      numReviews: 120,
      countInStock: 25,
      description:
        "Powerful gaming console with high fidelity graphics and fast load times",
    },
    {
      name: "Nintendo Switch",
      slug: "nintendo-switch",
      category: "Gaming Console",
      image: "/images/nintendoswitch.jpg",
      price: 299,
      brand: "Nintendo",
      rating: 4.6,
      numReviews: 200,
      countInStock: 40,
      description:
        "Versatile gaming console that can be played both at home and on the go",
    },
    {
      name: "Apple AirPods Pro",
      slug: "apple-airpods-pro",
      category: "Headphones",
      image: "/images/apple-airpods-pro.jpg",
      price: 249,
      brand: "Apple",
      rating: 4.8,
      numReviews: 120,
      countInStock: 20,
      description: "High-quality noise-canceling wireless earbuds with active noise cancellation."
    },
    {
      name: "Samsung 65 Smart TV",
      slug: "samsung-65-smart-tv",
      category: "TV",
      image: "/images/samsung-65-inch-tv.jpg",
      price: 899,
      brand: "Samsung",
      rating: 4.1,
      numReviews: 80,
      countInStock: 12,
      description: "65-inch Smart TV with 4K Ultra HD resolution and built-in streaming apps."
    }      
  ],
};

export default data;
