import { AUTH_API_URL } from '../../utils/constants';

export default class UserService {
  static async fetchUsers() {
    try {
      const response = await fetch(`${AUTH_API_URL}users`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        credentials: 'include',
      });

      const data = await response.json();

      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }
}
