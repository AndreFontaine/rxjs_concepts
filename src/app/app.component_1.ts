import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { from, of } from 'rxjs'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected ofData: number[] = []
  protected fromData: number = 0
  // observable
  private ofNumebers$ = of([1, 2, 3, 4, 5])
  private fromNumebers$ = from([1, 2, 3, 4, 5])

  constructor() {
    // observers
    // All the array at once
    this.ofNumebers$.subscribe((data) => {
      this.ofData = data
      console.log('subscriber', data)
    })

    // One by one
    this.fromNumebers$.subscribe((data) => {
      this.fromData = data
      console.log('subscriber', data)
    })
    this.addNumbers()
  }

  // TODO: investigate how to add numbers to an Observable
  addNumbers(): void {
    setTimeout(() => {
      this.ofNumebers$ = of([6, 7, 8, 9, 10])
    }, 6000)
  }
}
