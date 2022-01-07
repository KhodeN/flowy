export enum QueryStatus {
   InProgress = 'InProgress',
   Success = 'Success',
   Error = 'Error',
}

interface QuerySent {
   status: QueryStatus.InProgress;
}

interface QuerySuccess<T> {
   data: T;
   status: QueryStatus.Success;
}

interface QueryError<T = any> {
   error: T;
   status: QueryStatus.Error;
}

export type Query<S, E = any> = QuerySent | QuerySuccess<S> | QueryError<E>;

export type PromiseType<T extends Promise<any>> = T extends Promise<infer PT> ? PT : never;
