import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { from, fromEvent, Observable, of } from 'rxjs'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  users = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      age: 30,
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      age: 25,
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      age: 28,
    },
  ]

  constructor() {
    const $ofUsers = new Observable((observer) => {
      observer.next(this.users)
      observer.complete()
    })

    const $fromUsers = new Observable((observer) => {
      this.users.forEach((user) => {
        observer.next(user)
      })
      observer.complete()
    })

    $ofUsers.subscribe({
      next: (users) => {
        console.log(users)
      },
      error: (err) => {
        console.error(err)
      },
      complete: () => {
        console.log('All done')
      },
    })

    $fromUsers.subscribe({
      next: (user) => {
        console.log(user)
      },
      error: (err) => {
        console.error(err)
      },
      complete: () => {
        console.log('All done')
      },
    })
  }
}
