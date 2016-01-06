import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';
import {Hello} from './hello';

@autoinject
export class Users {
  heading = 'Github Users';
  users = [];

  constructor(private http: HttpClient) {
    console.log(new Hello().sayHello('Test'));
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });
  }

  activate() {
    return this.http.fetch('users')
      .then(response => response.json())
      .then(users => this.users = users);
  }
}
