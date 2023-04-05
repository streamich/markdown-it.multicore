import {render} from './methods/render';

// These methods will be picked up by worker threads.
export const methods = {
  render,
};

// This type will be used in the main thread.
export type Methods = typeof methods;
