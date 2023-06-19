import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { ProgressBar } from "primereact/progressbar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export const ProductDetails = ({ visible, details }) => {
  const [datatable, setDatatable] = useState([]);

  const valueTemplate = (value) => {
    return <React.Fragment>{value}</React.Fragment>;
  };
  const caloriesBodyTemplate = (rowData) => {
    return (
      <ProgressBar
        value={rowData.calories}
        showValue
        style={{ height: "20px" }}
        displayValueTemplate={valueTemplate}
      ></ProgressBar>
    );
  };
  useEffect(() => {
    setDatatable([details]);
  }, []);

  return (
    <Dialog
      header={details.name}
      visible={visible.show}
      onHide={() => visible.hide(false)}
      blockScroll
      className="p-3"
      style={{ width: "100vw" }}
    >
      <section className="flex flex-column align-items-center">
        <img src={details.image.url} alt={details.name} width={200} />
        {details.description}
      </section>
      <section className="mt-5">
        <DataTable value={datatable}>
          <Column
            header="Calories (kcal)"
            field="calories"
            align="center"
            alignHeader="center"
            body={caloriesBodyTemplate}
          />
          <Column
            header="Fats (gr)"
            field="carbohydrates"
            align="center"
            alignHeader="center"
          />
          <Column
            header="Carbohydrates (gr)"
            field="fats"
            align="center"
            alignHeader="center"
          />
          <Column
            header="Presentation (gr)"
            field="presentation"
            align="center"
            alignHeader="center"
          />
        </DataTable>
      </section>

      <section className="flex justify-content-evenly my-6">
        <section>
          <h4>Ingredients :</h4>
          <ul style={{ listStyle: "none" }}>
            <li>{details.ingredients[0]}</li>
            <li>{details.ingredients[1]}</li>
            <li>{details.ingredients[2]}</li>
          </ul>
        </section>
        <section>
          <h4>Product Details :</h4>
          <ul style={{ listStyle: "none" }}>
            <li>{details.details[0]}</li>
            <li>{details.details[1]}</li>
            <li>{details.details[2]}</li>
          </ul>
        </section>
      </section>
    </Dialog>
  );
};
