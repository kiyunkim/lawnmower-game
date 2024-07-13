import { AreaConfig, Machine } from '../types';
import { canvas } from './canvas';

export class Area {
  #config: AreaConfig;

  constructor(config: AreaConfig) {
    this.#config = config;
  }

  get config() {
    return this.#config;
  }

  init() {
    this.initCanvas();
  }

  initCanvas() {
    canvas.width = this.#config.size.x * 50;
    canvas.height = this.#config.size.y * 50;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = this.#config.backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }
}
