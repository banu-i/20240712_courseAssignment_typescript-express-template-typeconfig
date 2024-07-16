export interface DeviceInfosAttributes {
    id?: number;
    userId: number;
    task: string;
    isDone?: boolean;
    dueDate: Date | string;
}
