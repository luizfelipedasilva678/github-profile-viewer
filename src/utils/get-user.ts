import { User } from '../typings/user';

export default async function getUser(userName: string): Promise<User> {
  const resp = await fetch(`https://api.github.com/users/${userName}`);
  const json = await resp.json();
  return json;
}
