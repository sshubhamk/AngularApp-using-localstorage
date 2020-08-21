import { CommonServiceService } from './../common-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css'],
})
export class AddCompanyComponent implements OnInit {
  companyName: string;
  gst: string;
  companies: any;
  id = 2;
  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.companies = this.commonService.getCompanies();
  }

  // tslint:disable-next-line: typedef
  onAddCompany() {
    this.id++;
    const newCompany = {
      id: this.id,
      companyName: this.companyName,
      gst: this.gst,
    };
    this.commonService.addCompany(newCompany);
    this.companies = this.commonService.getCompanies();
  }
}
