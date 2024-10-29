import { type Customer } from '../types/customer';

export function generateMockData(page: number, limit: number): Customer[] {
  const data: Customer[] = [];

  const startId = (page - 1) * limit + 1;
  const endId = startId + limit;

  for (let i = startId; i < endId; i++) {
    data.push({
      id: i,
      name: `Customer ${i}`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
    });
  }

  return data;
}
