import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface myData {
  email: string,
  status: boolean,
  quote: string
}

interface isLoggedIn {
  status: boolean
}

interface quoteStatus {
  success: boolean
}

interface logoutStatus {
  success: boolean
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<myData>('http://localhost:1234/data');
  }

 

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('http://localhost:1234/isloggedin');
  }

  logout() {
    return this.http.get<logoutStatus>('http://localhost:1234/logout');
  }
  userPost(data) {
    return this.http.post('http://localhost:1234/user', data);
  }
  userGet() {
    return this.http.get('http://localhost:1234/user');
  }

  userGetById(id) {
    return this.http.get(`http://localhost:1234/user/${id}`);
  }

  userDelete(data) {
    const id = data._id;
    return this.http.delete(`http://localhost:1234/user/${id}`);
  }

}
