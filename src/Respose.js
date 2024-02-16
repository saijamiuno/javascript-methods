import React from "react";

const sampleArray = [
  { id: "1", title: "sample" },
  { id: "2", title: "Button" },
  { id: "3", title: "sample3" },
  { id: "4", title: "sample4" },
];

let view = [];

const dup = [...sampleArray];
console.log(dup, "dup");

dup.some((e) => {
  view.push(e);
  return e.title === "Button";
});

// console.log(viewAfterButton, 'viewAfterButton');

const viewID = view?.map((e) => e?.id);
console.log(viewID, "viewID");

const filterArray = sampleArray.filter(
  (f) => !view?.map((e) => e?.id).includes(f?.id)
);

console.log(filterArray, "filterArray");

function Respose() {
  return <div>Respose</div>;
}

export default Respose;
