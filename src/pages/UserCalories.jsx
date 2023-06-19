import React, { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

import { Knob } from "primereact/knob";

import { Container } from "../components/Container";

export const UserCalories = () => {
  const [value, setValue] = useState("");

  return (
    <Container>
      <div className="flex justify-content-center mt-3">
        <section className="w-full sm:w-6 border-1 border-round surface-border p-3 flex flex-column justify-content-center">
          <section className="flex flex-column justify-content-center">
            <h1 className="text-center mt-3" style={{ color: "#10249F" }}>
              Set your maximum calorie limit here!
            </h1>
            <section className="w-full sm:w-8 flex justify-content-center gap-8 align-self-center mt-5">
              <span className="text-center text-xl">
                <p className="font-bold">12345</p>
                <p className="mt-2">Consumed</p>
              </span>
              <span className="text-center text-xl">
                <p className="font-bold">12345</p>
                <p className="mt-2">Remaining</p>
              </span>
              <span className="text-center text-xl">
                <p className="font-bold">12345</p>
                <p className="mt-2">Burned</p>
              </span>
            </section>

            <section className="flex flex-column gap-3 mt-8 ">
              <section className="flex justify-content-between p-2 border-1 surface-border border-round">
                <section className="flex align-items-center">
                  <Knob
                    value={50}
                    min={-50}
                    max={50}
                    size={50}
                    showValue={false}
                  />
                  <span>
                    <p className="ml-2 font-bold text-xl">Breakfast</p>
                    <p className="ml-2 text-xs"> 56/360 kcal</p>
                  </span>
                </section>

                <Button
                  icon="pi pi-plus"
                  label="COMPLETE INFORMATION"
                  rounded
                ></Button>
              </section>

              <section className="flex justify-content-between p-2 border-1 surface-border border-round">
                <section className="flex align-items-center">
                  <Knob
                    value={50}
                    min={-50}
                    max={50}
                    size={50}
                    showValue={false}
                  />
                  <span>
                    <p className="ml-2 font-bold text-xl">Lunch</p>
                    <p className="ml-2 text-xs"> 56/360 kcal</p>
                  </span>
                </section>

                <Button
                  icon="pi pi-plus"
                  label="COMPLETE INFORMATION"
                  rounded
                ></Button>
              </section>

              <section className="flex justify-content-between p-2 border-1 surface-border border-round">
                <section className="flex align-items-center">
                  <Knob
                    value={50}
                    min={-50}
                    max={50}
                    size={50}
                    showValue={false}
                  />
                  <span>
                    <p className="ml-2 font-bold text-xl">Dinner</p>
                    <p className="ml-2 text-xs"> 56/360 kcal</p>
                  </span>
                </section>

                <Button
                  icon="pi pi-plus"
                  label="COMPLETE INFORMATION"
                  rounded
                ></Button>
              </section>

              <section className="flex justify-content-between p-2 border-1 surface-border border-round">
                <section className="flex align-items-center">
                  <Knob
                    value={50}
                    min={-50}
                    max={50}
                    size={50}
                    showValue={false}
                  />
                  <span>
                    <p className="ml-2 font-bold text-xl">Snacks</p>
                    <p className="ml-2 text-xs"> 56/360 kcal</p>
                  </span>
                </section>

                <Button
                  icon="pi pi-plus"
                  label="COMPLETE INFORMATION"
                  rounded
                ></Button>
              </section>

              <section className="flex justify-content-between mt-3 px-3">
                <i className="pi pi-arrow-left text-primary"></i>
                <i className="pi pi-arrow-right text-primary"></i>
              </section>

              <section className="flex justify-content-center m-3 p-3">
                <Button
                  label="Send my Information"
                  style={{ backgroundColor: "#10249F" }}
                />
              </section>
            </section>
          </section>
        </section>
      </div>
    </Container>
  );
};
