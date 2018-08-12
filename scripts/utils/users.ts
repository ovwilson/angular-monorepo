// 'use strict';

// import { Subject } from 'rxjs';
// import * as fromUsers from './../models/users';

// export class UserModel {
//     constructor(connection) { this.model = connection.model(fromUsers.schemaName, fromUsers.UserSchema); }
//     get model() { return this.model; }
// }

// export class User {

//     constructor(connection) {
//         this.connection = connection;
//         this.user$ = new Subject();
//     }

//     get subscription() { return this.user$.asObservable(); }
//     get model() { return new UserModel(this.connection).model; }

//     addUser() {
//         this.model.findOne({}, (err, user) => {
//             if (err) { console.error(err); }
//             this.user$.next(user);
//         });
//     }

// }