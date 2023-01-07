import { useState, useEffect, useMemo, useRef } from "react";
import "./Sortcss.css";
import { bubbleSort } from "./algorithms/bubble";
import { quickSort } from "./algorithms/quick";
import { insertionSort } from "./algorithms/insertion";
//sort returns a bar graph of array. below will be 3 buttons bubble, quick, and insertion.
function Sort() {
  //grabbing 10 random numbers from 0-100
  const [array, setArray] = useState([]);

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < 20; i++) {
      array.push(randomIntFromInterval(0, 340));
    }
    setArray(array);
  };
  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  //function to not reset numbers but scramble them
  const scrambleArray = () => {
    const scrambledArray = [...array];
    for (let i = 0; i < scrambledArray.length; i++) {
      const j = Math.floor(Math.random() * scrambledArray.length);
      [scrambledArray[i], scrambledArray[j]] = [
        scrambledArray[j],
        scrambledArray[i],
      ];
    }
    setArray(scrambledArray);
  };

  //have to use useEffect to call resetArray() once the page loads
  useEffect(() => {
    resetArray();
  }, []);

  const statistics = useMemo(() => {
    const highest = Math.max(...array);
    const lowest = Math.min(...array);
    const average = array.reduce((a, b) => a + b, 0) / array.length;
    return { highest, lowest, average };
  }, [array]);

  return (
    <div>
      <div className="sort-container">
        <div className="buttons">
          <button
            className="button"
            onClick={() => {
              //call bubble sort function
              bubbleSort(array);
            }}
          >
            Bubble Sort
          </button>
          <button className="button"
            onClick={() => {
              //call quick sort function
              quickSort(array);
            }}
          >Quick Sort</button>
          <button
            className="button"
            onClick={() => {
              //call insertion sort function
              insertionSort(array);
            }}
          >
            Insertion Sort
          </button>
          <button
            className="button"
            onClick={() => {
              resetArray();
            }}
          >
            Reset
          </button>
        </div>
        <div className="bar-container">
          {array.map((value, index) => (
            <div
              className="bar"
              key={index}
              style={{
                height: `${value}px`,
                backgroundColor: "#99acea",
              }}
            >
              <p>{value}</p>
            </div>
          ))}
        </div>
        <button
          className="button"
          onClick={() => {
            scrambleArray(array);
          }}
        >
          Scramble
        </button>
        <h2 className="dash-title">Stats</h2>
        <div className="statistics">
          <p>
            Highest: <span className="statData">{statistics.highest}</span>
          </p>
          <p>
            Lowest: <span className="statData">{statistics.lowest}</span>
          </p>
          <p>
            Average:
            <span className="statData">{statistics.average}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sort;
