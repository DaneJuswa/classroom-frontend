import {BaseRecord, DataProvider, GetListParams, GetListResponse} from "@refinedev/core";
import  {MOCK_SUBJECTS} from "@/constants/mock-data.ts";
import {MOCK_USERS} from "@/constants/users-mockdata.ts";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({resource}:
                                                         GetListParams): Promise<GetListResponse<TData>> => {
    // if (resource !== 'subjects') return {data: [] as TData[], total: 0};

    if (resource === 'users')
      return {
      data: MOCK_USERS as unknown as TData[],
      total: MOCK_USERS.length};

    return {
      data: MOCK_SUBJECTS as unknown as TData[],
      total: MOCK_SUBJECTS.length,
    };

  },

  getOne: async () => {
    throw new Error("asdasdas")
  },
  create: async () => {
    throw new Error("asdasdas")
  },
  update: async () => {
    throw new Error("asdasdas")
  },
  deleteOne: async () => {
    throw new Error("asdasdas")
  },

  getApiUrl: () => '',
}
