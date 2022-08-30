import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  settings: any;
  faqs: any[]=[];
    tab: any;

  constructor(      
    private api: ApisService,
    private util: UtilService
    ) {
		this.tab = 0;
    this.api.getSettings().then(data => {
      this.settings = data[0];
      this.faqs = this.settings.faqs;
	  console.log(this.faqs);
    }).catch(error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }
  
    showContent(item) {
    return this.tab === item;
  }

  showMilestone(item){
    this.tab = item;
  }
}
