import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesTableComponent implements OnInit {
  displayedColumns = ['name', 'power', 'location'];
  heroes: SuperHero[] = [];

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit(): void {
    this.heroes = this.superHeroService.getSuperHeroes();
    console.log(this.heroes);
  }

}
