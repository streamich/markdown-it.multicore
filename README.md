# `markdown-it` Multicore

Executes `markdown-it` in a separate process. Currently supports the `render` method.


## Installation

```sh
npm install markdown-it.multicore
```


## Usage

```ts
import {render} from 'markdown-it.multicore';

const html = await render('# Hello World');
```


## Specification

```ts
render(markdown: string): Promise<string>;
render(markdown: string, preset?: PresetName): Promise<string>;
render(markdown: string, preset?: PresetName, options?: Options): Promise<string>;
```
