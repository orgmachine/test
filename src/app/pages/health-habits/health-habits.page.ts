import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
@Component({
  selector: 'app-health-habits',
  templateUrl: './health-habits.page.html',
  styleUrls: ['./health-habits.page.scss'],
})
export class HealthHabitsPage {
  habits: any = [];
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private api: ApisService
  ) { 

  }
  ionViewWillEnter(){
    this.api.getHealthHabbits().then(data => {
      console.log(data);
      this.habits = data;
    }).catch(error => {
      console.log(error);
    });
  }
    viewHabit(data){
    localStorage.setItem('habitid',data.id)
    this.router.navigate(['habit',data.name])
  }
}