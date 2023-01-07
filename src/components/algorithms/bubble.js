export const bubbleSort = (array) => {
  const arr = array;
  let sorted = false;
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
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
        updateBar(i, arr[i]);
        updateBar(i + 1, arr[i + 1]);
      }
      i++;
      timeout = setTimeout(doSort, speed);
    } else {
      if (sorted) {
        clearTimeout(timeout);
        return;
      }
      sorted = true;
      i = 0;
      timeout = setTimeout(doSort, speed);
    }
  };
  doSort();
};

