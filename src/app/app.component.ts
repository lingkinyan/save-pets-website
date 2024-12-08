import { CommonModule, DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./common-components/components/header/header.component";
import { CommonComponentModule } from "./common-components/common-component.components";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, CommonComponentModule, HttpClientModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.less",
})
export class AppComponent {
  constructor(private router: Router,) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
}
