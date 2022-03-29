import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, delay } from "rxjs";
import { UserInterface } from "./user.interface";

@Injectable()

export class UsersService {
    private apiUrl: string = 'http://localhost:3000/customers'
    constructor(private http: HttpClient) { }

    getUsers(): Observable<UserInterface[]> {
        return this.http.get<UserInterface[]>(this.apiUrl).pipe(delay(5000), map((users: UserInterface[]) => {
            return users.map(user => ({
                id: user.id,
                name: {
                    first: user.name.first,
                    last: `${user.name.last} lorem ipsum...`
                }
            }))
        }))
    }

    removeUser(id: string): Observable<{}> {
        return this.http.delete(`${this.apiUrl}${id}`)
    }

    addUser(name: string): Observable<UserInterface> {
        const user = {
            name,
            author: 30
        }
        return this.http.post<UserInterface>(this.apiUrl, user)
    }
}