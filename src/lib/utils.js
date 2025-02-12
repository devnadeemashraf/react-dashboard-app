/**
 * Allows to Throttle the Updates to the Event Listeners
 * Expects 'duration' in milliseconds
 */
const throttleFunction = (duration = 350, fn) => {
  let lastCall;

  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= duration) {
      lastCall = now;
      fn(...args);
    }
  };
};

/**
 * Allows to Debounce the Updates to the Event Listeners
 * Expects 'delay' in milliseconds
 */
const debounceFunction = (delay = 350, fn) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

export { debounceFunction, throttleFunction };
