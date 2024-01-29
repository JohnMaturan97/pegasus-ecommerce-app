/* eslint-disable @next/next/no-img-element */
import ProductItem from '@/components/products/ProductItem';
import productService from '@/lib/services/productService';
import { convertDocToObj } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'pegasus',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'Next.js, Server components, Next Auth, daisyUI, Zustand',
}

export default async function Home() {
  const featuredProducts = await productService.getFeatured();
  const latestProducts = await productService.getLatest();
  const mostRatedProducts = await productService.getRating(); // Assuming this fetches products with ratings > 4.5

  // Selecting the top-rated product to feature in the "Top Products Section"
  const displayedFeaturedProduct = mostRatedProducts.slice(0, 1)[0];

  // Assuming 'otherProducts' should also come from top-rated products, excluding the first one
  const otherTopRatedProducts = mostRatedProducts.slice(1);
  const displayedLatestProduct = latestProducts.slice(0, 1)[0];
  const otherProducts = latestProducts.slice(1, 7);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Carousel for Featured Products */}
      <div className="w-full carousel rounded-box mt-4">
        {featuredProducts.map((product, index) => (
          <div key={product._id} id={`slide-${index}`} className="carousel-item relative w-full flow-root">
            <Link href={`/product/${product.slug}`}>
              <img src={product.banner} className="w-full" alt={product.name} />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#slide-${index === 0 ? featuredProducts.length - 1 : index - 1}`} className="btn btn-circle">❮</a>
              <a href={`#slide-${index === featuredProducts.length - 1 ? 0 : index + 1}`} className="btn btn-circle">❯</a>
            </div>
          </div>
        ))}
      </div>

      {/* Top Products Section */}
      <h2 className="text-2xl py-2 mt-8">Top Products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Display the featured top product */}
        {displayedFeaturedProduct && ( // Check if displayedFeaturedProduct exists
          <div className="col-span-1">
            <ProductItem key={displayedFeaturedProduct.slug} product={convertDocToObj(displayedFeaturedProduct)} />
          </div>
        )}
        {/* Display other top-rated products */}
        {otherTopRatedProducts.map((product) => (
          <div key={product.slug} className="col-span-1">
            <ProductItem key={product.slug} product={convertDocToObj(product)} />
          </div>
        ))}
      </div>

      {/* Latest Products Section */}
      <h2 className="text-2xl py-2 mt-8">Latest Products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1">
          <ProductItem key={displayedLatestProduct.slug} product={convertDocToObj(displayedLatestProduct)} />
        </div>
        {/* Display the other 6 products */}
        {otherProducts.map((product) => (
          <div key={product.slug} className="col-span-1">
            <ProductItem key={product.slug} product={convertDocToObj(product)} />
          </div>
        ))}
      </div>
    </div>

  );
}
