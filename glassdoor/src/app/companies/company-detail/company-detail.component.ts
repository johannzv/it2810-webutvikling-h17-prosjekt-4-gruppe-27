import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Company }    	from '../shared/company.model';
import { CompanyService } 	from '../shared/company.service';

@Component({
  selector: 'company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: [ './company-detail.component.css' ]
})
export class CompanyDetailComponent implements OnInit {
  company: Company;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.companyService.getCompany(+params.get('id')))
      .subscribe(company => this.company = company);
  }

  save(): void {
    this.companyService.update(this.company)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}