import {init} from './multicore';
import type {PresetName, Options} from 'markdown-it';

export const render = async (markdown: string, preset?: undefined | PresetName, options?: Options): Promise<string> => {
  const mod = await init();
  return await mod.exec('render', [markdown, preset, options]);
};
