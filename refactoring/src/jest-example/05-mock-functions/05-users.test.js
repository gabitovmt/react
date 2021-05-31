import axios from 'axios';
import Users from "./05-users";

jest.mock('axios');

test('should fetch users', () => {
  const users = [{name: 'Alex'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);

  return Users.all().then(data => expect(data).toEqual(users));
});
