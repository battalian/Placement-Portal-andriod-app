export class companyDetailsService{
	private companies: {name: string, place: string}[] = [];

	addCompany(company: {name: string, place: string}){
		this.companies.push(company);
	}

	getCompany(){
		return this.companies.slice();
	}
}
