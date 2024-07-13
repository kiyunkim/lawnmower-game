export type Size = {
  x: number | 1;
  y: number | 1;
};

export type Machine = {
  name: string;
  verb: string;
  size: Size;
  color: string;
  speed: number;
};

export type AreaConfig = {
  level: number;
  name: string;
  size: Size;
  machine: Machine;
  unlocked: boolean;
  unlockCost: number;
  backgroundColor: string;
  growthColor: string;
}
