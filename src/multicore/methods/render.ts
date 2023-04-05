import {type WorkerFn} from 'node-multicore';
import mdit, {PresetName, Options} from 'markdown-it';

type Req = [markdown: string, preset?: PresetName, options?: Options];
type Res = string;

export const render: WorkerFn<Req, Res> = ([markdown, preset, options]) => {
  const md = preset ? mdit(preset, options) : options ? mdit(options) : mdit();
  return md.render(markdown);
};
