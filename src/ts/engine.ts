import { Area } from './areas';
// create module Game, and create `tick` `render` `update` methods


export const Game = {
  init: function() {
    const lawnArea = new Area({
      level: 0,
      name: 'lawn',
      size: { x: 10, y: 10 },
      machine: {
        name: 'lawnmower',
        verb: 'mow',
        size: { x: 1, y: 1 },
        color: 'silver',
        speed: 1,
      },
      unlocked: true,
      unlockCost: 0,
      backgroundColor: 'green',
      growthColor: 'darkgreen',
    });

    lawnArea.initCanvas();

  },
  tick: function() {

  },
}
