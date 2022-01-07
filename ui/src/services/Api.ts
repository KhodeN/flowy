export class Api {
   constructor(private apiUrl: string) {}

   public async getRoot(): Promise<string> {
      const resp = await fetch(`${this.apiUrl}`, {
         method: 'GET',
      });

      return resp.json();
   }

   public async getCategries(): Promise<string[]> {
      return Promise.resolve(['1', '2']);
   }
}
