import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage {
  team_member:any;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private alertCtrl: AlertController,
	  public menu: MenuController,
    private api: ApisService
  ) { 
    let id = localStorage.getItem('memberid')
    this.api.getTeamMemberById(id).then(data => {
      this.team_member = data[0];
      console.log(this.team_member)
    }).catch(error => {
      console.log(error);
    });
  }
}