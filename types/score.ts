export enum StepType {
  INACTIVE = 'inactive',
  CURRENT = 'current',
  FINISHED = 'finished',
}

export interface IScore {
  score: number;
  type: StepType;
}
