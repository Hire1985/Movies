import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { RouterOutlet, RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav',
  imports: [SearchComponent, RouterOutlet, RouterLink],
  templateUrl: './Nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NavComponent { }
