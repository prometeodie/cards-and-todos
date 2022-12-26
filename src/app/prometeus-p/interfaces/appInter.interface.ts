
export interface Album {
    userId: number;
    id:     number;
    title:  string;
    footInfo: string;
    showBoolean: boolean;
}

export interface Post {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}

export interface Todo {
    userId:    number;
    id:        number;
    title:     string;
    completed: boolean;
    startTodo: string;
    finishTodo: Date;
}
