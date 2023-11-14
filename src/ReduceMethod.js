import React from "react";
import products from "./products.json";
import products1 from "./inventoryProducts.json";

function ReduceMethod() {
  const euros = [29.76, 41.85, 46.5];
  let productIndex = products?.products.map((e) => e?.productIndex);
  let invetory = products1?.products1;

  console.log(productIndex, "productIndex");
  console.log(invetory, "invetory");

  const findDuplicateProductNumbers = () => {
    // const uniqueProductNumbers = [];
    // const duplicateProductNumbers = [];

    // invetory.forEach((value) => {
    //   const productNumber = value?.productNumber;

    //   if (uniqueProductNumbers.includes(productNumber)) {
    //     duplicateProductNumbers.push(productNumber);
    //   } else {
    //     uniqueProductNumbers.push(productNumber);
    //   }
    // });

    // return duplicateProductNumbers;
    let james = [
      {
        name: "james",
        age: 20,
      },
      {
        name: "james",
        age: 29,
      },
      {
        name: "jami",
        age: 25,
      },
      {
        name: "syed",
        age: 18,
      },
    ];

    let totalAges = james?.reduce(
      (acc, value) => {
        if (value?.name === "james") {
          acc.jamesNum += value.age;
        } else if (value?.name === "syed") {
          acc.syed += value.age;
        } else {
          acc.sai += value.age;
        }
        return acc;
      },
      { jamesNum: 0, syed: 0, sai: 0 }
    );

    console.log(totalAges, "totalAges");

    // let jamesNum = 0,
    //   aliNum = 0,
    //   jamiNum = 0;
    // james.map((s) => {
    //   if (s.name === "james") {
    //     jamesNum += s.age;
    //   } else if (s.name === "jami") {
    //     aliNum += s.age;
    //   } else {
    //     jamiNum += s.age;
    //   }
    // });
    // console.log({
    //   jamesNum,
    //   aliNum,
    //   jamiNum,
    // });
    // return {
    //   jamesNum,
    //   aliNum,
    //   jamiNum,
    // };

    const ali = invetory.reduce(
      (accumulator, value) => {
        const productNumber = value?.productNumber;

        if (accumulator.uniqueProductNumbers.includes(productNumber)) {
          accumulator.duplicateProductNumbers.push(productNumber);
        } else {
          accumulator.uniqueProductNumbers.push(productNumber);
        }

        return accumulator;
      },
      { uniqueProductNumbers: [], duplicateProductNumbers: [] }
    );
    console.log(ali.uniqueProductNumbers, "alll");
  };

  console.log(findDuplicateProductNumbers(), "findDuplicateProductNumbers");

  const arraySum = euros.reduce((total, value, index, array) => {
    return (total += value);
  });

  console.log(arraySum, "arraySum");

  const arrayAverage = euros.reduce((total, value, index, array) => {
    total += value;
    if (index === array.length - 1) {
      return total / array.length;
    } else {
      return total;
    }
  });

  console.log(arrayAverage, "arrayAverage");

  const multiWith5 = euros.reduce((total, value, index, array) => {
    total.push(value * 5);
    return total;
  }, []);

  console.log(multiWith5, "multiWith5");

  const above30 = () => {
    return euros.reduce((total, value, index, array) => {
      if (value > 30) {
        total.push(value);
      }
      return total;
    }, []);
  };

  console.log(above30(), "above30");

  const fruitBasket = [
    "banana",
    "cherry",
    "orange",
    "apple",
    "cherry",
    "orange",
    "apple",
    "banana",
    "cherry",
    "orange",
    "fig",
  ];

  const findNoOfFruits = () => {
    return fruitBasket.reduce((total, value, index, array) => {
      if (total[value]) {
        total[value] = total[value] + 1;
      } else {
        total[value] = 1;
      }
      return total;
    }, []);
  };

  console.log(findNoOfFruits(), "findNoOfFruits");

  const data = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const flatedArray = () => {
    return data?.reduce((total, value, index, array) => {
      return total.concat(value);
    }, []);
  };

  console.log(flatedArray(), "flatedArray");

  const dataObjects = [
    { a: "happy", b: "robin", c: ["blue", "green"] },
    { a: "tired", b: "panther", c: ["green", "black", "orange", "blue"] },
    { a: "sad", b: "goldfish", c: ["green", "red"] },
  ];

  const filteredObjectColors = () => {
    return dataObjects.reduce((total, value, index, array) => {
      value?.c?.map((e) => total.push(e));
      return total;
    }, []);
  };
  const filteredObjectColorsNoDub = () => {
    return dataObjects.reduce((total, value, index, array) => {
      /* eslint-disable array-callback-return */
      value?.c?.map((e) => {
        if (total.includes(e)) {
          return;
        } else {
          total.push(e);
        }
      });
      return total;
    }, []);
  };

  console.log(filteredObjectColors(), "filteredObjectColors");
  console.log(filteredObjectColorsNoDub(), "filteredObjectColorsNoDub");

  const filterdObjects = () => {
    return dataObjects.reduce((total, value, index, array) => {
      total.push(value?.a);
      return total;
    }, []);
  };

  console.log(filterdObjects(), "filterdObjects");

  return <div>ReduceMethod</div>;
}

export default ReduceMethod;
