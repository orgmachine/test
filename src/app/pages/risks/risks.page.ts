import { Component, OnInit, } from '@angular/core';
import { UpdateComponent } from 'src/app/components/update/update.component';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import * as moment from 'moment';

@Component({
  selector: 'app-app-risks',
  templateUrl: './risks.page.html',
  styleUrls: ['./risks.page.scss'],
})
export class RisksPage implements OnInit {
  risks:any = [];
  constructor(  
    private api: ApisService,
    private util: UtilService,
    public router: Router,

  ) {
  }

  ionViewWillEnter(){
    this.api.getHealthRisk().then(data => {
      // console.log(data);
      this.risks = data;
    }).catch(error => {
      console.log(error);
    }); 
  }
  
  viewRisk(data){
    localStorage.setItem('riskid',data.id)
    this.router.navigate(['risk',data.name])
  }

  ngOnInit(){
  }
}
