import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { filter, map, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'flexLayout';
  deviceXs!:boolean;
  mediaSub!:Subscription;
  constructor(private mediaObserver:MediaObserver){}
  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.asObservable() // New Way asObservable()
    .pipe(
      filter((changes: MediaChange[]) => changes.length > 0),
      map((changes: MediaChange[]) => changes[0])
    ).subscribe((change: MediaChange) => {
      this.deviceXs=change.mqAlias=== 'xs'? true:false;
      console.log(change.mqAlias)
      console.log(this.deviceXs);
      
    }
    )
    
}
}
