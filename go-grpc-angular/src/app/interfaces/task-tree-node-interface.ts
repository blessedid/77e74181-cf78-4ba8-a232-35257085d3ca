export interface TaskTreeNodeInterface {
  key: number;
  name: string;
  id: number;
  level?: number;
  expand?: boolean;
  score: any;
  firstDate: number;
  changeDate: number;
  status: string;
  statusColor: string;
  executor: any;
  children?: TaskTreeNodeInterface[] | number[];
  parent?: TaskTreeNodeInterface;
  isGroup: boolean;
  statsStatusList?: any;
  statsAggregateList?: any;
  parentInd?: number;
}
