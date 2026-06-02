
export type Subject = {
    id: number;
    name: string;
    code: string;
    department: string;
    description: string;
    createdAt: Date;
}


export type ListResponse<T = unknown> = {
    data: T[];
    pagination?: {
        page:number;
        limit:number;
        total: number;
        totalPages: number;
    };
};

export type CreateResponse<T = unknown> = {
    data: T;
}

export type GetOneResponse<T = unknown> = {
    data: T;
}

