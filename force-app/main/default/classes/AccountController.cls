public class AccountController {


   @AuraEnabled
   public static List<Account> getAccountList(){
	   return [SELECT id , Name from Account limit 10] ;

   }

	@AuraEnabled
	public static List<Contact> getContactList(){
		Set<String> accountSet = new Set<String>();
		Account account2 = new Account();
         


	myCust__c cs = new myCust__c();
	myCust__c cs2 = new myCust__c();
	myCust__c cs3 = new myCust__c();
	myCust__c cs4 = new myCust__c();
	myCust__c cs5 = new myCust__c();
	
		
	
		for(Account account : getAccountList()){
			accountSet.add(account.Id);
			
		
		}

		return [SELECT id , FirstName , LastName from Contact WHERE AccountId IN : accountSet];
	}
    
	
	

}