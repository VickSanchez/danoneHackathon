import React from "react";
import { Container } from "../components/Container";
import banner from "../assets/banner-bienvenida-grupo-danone.jpg";
import { Button } from "primereact/button";

export const Home = () => {
  return (
    <Container>
      <section className="flex justify-content-center">
        <img src={banner} alt="Bienvenido" className="w-full" />
      </section>
      <section className="flex flex-column justify-content-center gap-2">
        <h1 className="text-center mt-3" style={{ color: "#10249F" }}>
          Keep track of your daily colorie limit
        </h1>
        <br />
        <p className="text-center" style={{ color: "#10249F" }}>
          Tell us your maximum daily calorie intake and we will recommend the
          products that best suit your goals!
        </p>
        <section className="flex justify-content-center">
          <Button label="Start Now" className="w-auto" outlined />
        </section>
      </section>
    </Container>
  );
};
