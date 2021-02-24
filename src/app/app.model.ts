export interface Trick {
  label: string;
  stackblitz?: string;
  caniuse?: string;
  wonIndex?: number;
}

export enum EngineState {
  START = 'START',
  RESTART = 'RESTART',
  RESET = 'RESET',
  RUNNING = 'RUNNING',
  FINISHED = 'FINISHED'
}
