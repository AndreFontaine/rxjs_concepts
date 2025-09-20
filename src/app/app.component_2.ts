import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { from, fromEvent, of } from 'rxjs'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected ofData: object[] = []

  // observable
  private ofUsers$ = of([
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
  ])

  constructor() {
    // observers
    // All the array at once

    // Users (object array)
    this.ofUsers$.subscribe((data) => {
      this.ofData = data
      console.log('subscriber', data)
    })

    // Promise
    const message = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('Hello from Promise')
      }, 2000)
    })

    const message$ = from(message)

    message$.subscribe((message) => {
      console.log(message)
    })

    // Events
    const clickEvent$ = fromEvent(document, 'click')

    clickEvent$.subscribe((e) => {
      console.log('message from event', e)
    })
  }
}
