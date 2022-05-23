import { Component, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get linkRoute(): Observable<string[]> {
    // This one makes the correct link
    // return of(["/", "2"]);

    // This one does not give the correct link
    return of(["/", "2"]).pipe(delay(0));

    // This one does create a link to /1 but does not update it to /2:
    // return concat(
    //   of(["/", "1"]),
    //   of(["/", "2"]).pipe(delay(0)));
  }
}
