export interface IMarkDeviceInfosBody {
    todoId: number;
    newIsDone: boolean;
}

export interface IUpdateDeviceInfosBody {
    todoId: number;
    newTask: string;
    newIsDone: boolean;
    newDueDate: Date;
}

export interface ICreateDeviceInfosBody {
    newTask: string;
    newIsDone: boolean;
    newDueDate: Date;
    newUserId: number;
}

export interface IDeleteDeviceInfosBody {
    todoId: number;
}
