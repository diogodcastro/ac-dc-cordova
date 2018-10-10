import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ac-dc';

  ngOnInit() {
    var device;
    document.addEventListener(
      'deviceready',
      function() {
        alert(device.platform);
      },
      false
    );
  }
}
