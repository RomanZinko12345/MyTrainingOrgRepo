public class AccountController {

	public static Set<String> accountSet = new Set<String>();
  
	@AuraEnabled
   public static List<Account> getAccountList(){
	   return [SELECT id , Name from Account limit 10] ;

   }
  
       

   //added cooment 
  
	
 
   @AuraEnabled
	public static List<Contact> getContactList2(){
		
		for(Account account : getAccountList()){
			accountSet.add(account.Id);
		}
		Account account2 = new Account();
         return null;
	}


	
}
