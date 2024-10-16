export interface mtExamPersonalInterface {
    myFullName : string,
	sheridanID : string,
	sheridanLogin : string,
	sheridanProgram : string,
	sheridanEmail : string
}

export interface restaurantInfoInterface{
    
		name: string,
		address: string,
		province: string,
		postalCode: string,
		country: string,
		contactNumber: string
}

export interface menuItemsInterface {
        name: string,
		price: number,
		calories: number,
		section: string
}