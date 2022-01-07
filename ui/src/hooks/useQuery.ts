import { useEffect, useState } from 'react';

import { Api, useApi } from '../services';
import { PromiseType, Query, QueryStatus } from '../services/models';

export function useQuery<M extends keyof Api, R extends PromiseType<ReturnType<Api[M]>>>(
   method: M,
   params?: Parameters<Api[M]>,
): Query<R> {
   const api = useApi();
   const [query, setQuery] = useState<Query<R>>({ status: QueryStatus.InProgress });

   useEffect(() => {
      setQuery({ status: QueryStatus.InProgress });
      // @ts-ignore
      api[method](params).then(
         (data: any) => setQuery({ status: QueryStatus.Success, data }),
         error => setQuery({ status: QueryStatus.Error, error }),
      );
   }, [api, method, params]);

   return query;
}
