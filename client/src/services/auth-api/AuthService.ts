import { AUTH_API_URL } from '../../utils/constants';
import { IAuthResponse } from '../../types';

export default class AuthService {
  static async login(email: string, password: string): Promise<IAuthResponse | undefined> {
    try {
      const response = await fetch(`${AUTH_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ email, password }),
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

  static async registration(email: string, password: string): Promise<IAuthResponse | undefined> {
    try {
      const response = await fetch(`${AUTH_API_URL}/registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ email, password }),
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

  static async logout(): Promise<Response> {
    return fetch(`${AUTH_API_URL}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      credentials: 'include',
    });
  }

  static async isAuth(): Promise<IAuthResponse | undefined> {
    try {
      const response = await fetch(`${AUTH_API_URL}/refresh`, {
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
