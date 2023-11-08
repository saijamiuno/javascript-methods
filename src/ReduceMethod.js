import React from "react";

function ReduceMethod() {
  const euros = [29.76, 41.85, 46.5];

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
