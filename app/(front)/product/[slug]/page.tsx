import AddToCart from "@/components/products/AddToCart";
import data from "@/lib/data";
// import { convertDocToObj } from '@/lib/utils';
import Image from "next/image";
import Link from "next/link";

export default function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const product = data.products.find((x) => x.slug === params.slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <>
      <div className="my-2">
        <Link href="/">Back To Products Page</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          ></Image>
        </div>
        <div>
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl">{product.name}</h1>
            </li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>
              <h1>{product.brand}</h1>
            </li>
            <li>
              <h1 className="divider"></h1>
            </li>
            <li>
              Description: <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card  bg-base-300 shadow-xl mt-3 md:mt-0">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>${product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? "In stock" : "Unavailable"}
                </div>
              </div>
              {product.countInStock !== 0 && (
                <div className="card-actions justify-center">
                  <AddToCart
                    item={{
                      ...product,
                      qty: 0,
                      color: '',
                      size: '',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
