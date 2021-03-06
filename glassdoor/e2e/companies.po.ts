import { browser, by, element } from 'protractor';

export class CompaniesPage {

  private companies = element.all(by.css('.companies mat-list-item'));
  private delBttns = element.all(by.css('.delete'));

  private companyInput = element(by.css('#company-input'));
  private companyInputSubmit = element(by.css('.add-company'));

  navigateTo() {
    return browser.get('/companies');
  }

  async noCompanies() {
    return this.companies.count();
  }

  async addCompany(name: string) {
    this.companyInput.sendKeys(name);
    this.companyInputSubmit.click();
  }

  async delCompany(index: number) {
    this.delBttns.get(index).click();
  }

}