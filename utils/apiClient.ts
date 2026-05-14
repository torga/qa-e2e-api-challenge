import { APIRequestContext } from '@playwright/test';

const BASE_URL = 'https://restful-booker.herokuapp.com';

export class ApiClient {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async createBooking(data: any) {
    return this.request.post(`${BASE_URL}/booking`, { data });
  }

  async getBooking(id: number) {
    return this.request.get(`${BASE_URL}/booking/${id}`);
  }
  async updateBooking(id: number, data: any, token: string) {
    return this.request.put(`${BASE_URL}/booking/${id}`, {
      data,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cookie': `token=${token}`
      }
    });
  }

  async deleteBooking(id: number, token: string) {
    return this.request.delete(`${BASE_URL}/booking/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Cookie': `token=${token}`
      }
    });
  }

  async filterBooking(params: {
    firstname?: string;
    lastname?: string;
    checkin?: string;
    checkout?: string;
  }) {
    return this.request.get(`${BASE_URL}/booking`, {
      params
    });
  }
}