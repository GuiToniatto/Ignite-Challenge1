export interface ITodo {
    id: string;
    description: string;
    concluded?: boolean;
    onDeleteFunction: (id: string) => void;
    onConcludedFunction: (id: string, type: number) => void;
}
