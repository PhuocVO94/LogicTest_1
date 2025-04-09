async function processWithDelay(numbers: number[]): Promise<void> {
  if (!Array.isArray(numbers)) {
    throw new Error("Input must be an array of numbers");
  }

  if (numbers.length === 0) {
    return Promise.resolve();
  }

  for (const number of numbers) {
    await new Promise((resolve) => setTimeout(resolve, number * 1000));
    console.log(number);
  }
}
processWithDelay([1, 2, 3, 4, 5]);
