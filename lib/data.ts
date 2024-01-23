import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "iPhone 13 Pro",
      slug: "iphone-13-pro",
      category: "Smartphone",
      image: "/images/iphone13pro.jpg",
      price: 999,
      brand: "Apple",
      rating: 4.8,
      numReviews: 25,
      countInStock: 15,
      description: "Advanced smartphone with superior camera and performance",
      isFeatured: true,
      banner: "/images/banner1.jpg",
    },
    {
      name: "MacBook Pro 16-inch",
      slug: "macbook-pro-16",
      category: "Laptop",
      image: "/images/macbookpro16.jpg",
      price: 2399,
      brand: "Apple",
      rating: 4.9,
      numReviews: 40,
      countInStock: 10,
      description:
        "Powerful laptop with high-performance capabilities for professionals",
      isFeatured: false,
      banner: "/images/banner2.jpg",
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
      rating: 4.7,
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
      rating: 4.6,
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
  ],
};

export default data;
