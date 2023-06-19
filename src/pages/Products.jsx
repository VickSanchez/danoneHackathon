import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Container } from "../components/Container";
import { ProductCard } from "../components/ProductCard";

import { useFetch } from "../hooks/UseFetch";
import { Loading } from "../components/Loading";

export const Products = () => {
  const { getProducts } = useFetch();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = ` {
    productsCollection (order:id_ASC) {
      items {
        id
        name
        description
        calories
        ingredients
        details
        presentation
        image {
         title
          url  
        }
        fats
        carbohydrates
        
      }
    }
  }`;

  useEffect(() => {
    setLoading(true);

    getProducts(query)
      .then((response) => setProducts(response.data.productsCollection.items))
      .then(() => setLoading(false));
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <section className="flex justify-content-end mt-3">
            <span className="p-input-icon-left w-full sm:w-4">
              <i className="pi pi-search" />
              <InputText placeholder="Buscar Producto" className="w-full" />
            </span>
          </section>
          <section className="flex justify-content-between align-items-center">
            {products.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  image={item.image.url}
                  product={item.name}
                  details={{ ...item }}
                />
              );
            })}
          </section>
        </>
      )}
    </Container>
  );
};
