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
  constructor() {
    const message = new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve('Message from server')
        reject('Error in the server stream')
      }, 1000)
    })

    const message$ = from(message)

    message$.subscribe({
      next: (data) => {
        console.log(data)
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
