export const quickSort = (array) => {
  const arr = array;
  const speed = 400; // adjust this value to change the sorting speed

  const updateBar = (index, height) => {
    const bars = document.getElementsByClassName("bar");
    bars[index].style.height = `${height}px`;
    bars[index].innerHTML = `${height}`;
  };

  const quickSortHelper = (start, end) => {
    if (start >= end) {
      return;
    }
    const pivot = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if (arr[i] < pivot) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        updateBar(i, arr[i]);
        updateBar(pivotIndex, arr[pivotIndex]);
        pivotIndex++;
      }
    }
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    updateBar(pivotIndex, arr[pivotIndex]);
    updateBar(end, arr[end]);
    setTimeout(() => quickSortHelper(start, pivotIndex - 1), speed);
    setTimeout(() => quickSortHelper(pivotIndex + 1, end), speed);
  };
  quickSortHelper(0, arr.length - 1);
};
