//import useRef
export const insertionSort = (array) => {
  const arr = array;
  let i = 0;
  let timeout;
  const speed = 400; // adjust this value to change the sorting speed

  const updateBar = (index, height) => {
    const bars = document.getElementsByClassName("bar");
    bars[index].style.height = `${height}px`;
    bars[index].innerHTML = `${height}`;
  };

  const doSort = () => {
    if (i < arr.length) {
      let j = i;
      while (j > 0 && arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        updateBar(j, arr[j]);
        updateBar(j - 1, arr[j - 1]);
        j--;
      }
      i++;
      timeout = setTimeout(doSort, speed);
    } else {
      clearTimeout(timeout);
      return;
    }
  };
  doSort();
};
