@RestResource(urlMapping='/apexSecurityRest')
global with sharing class ApexSecurityRest {
    public static String name4444444444444aaaa;
    public static String name4444444444444aaaa2;
    public static String name4444444444444aaaa3;
    public static String name4444444444444aaaa66;
    public static String name4444444444444aaaa67;
    public static String name4444444444444aaaa68;
    public static String name4444444444444aaaa69;
    public static String name4444444444444aaaa60;
    public static String name4444444444444aaaa61;
    @HttpGet
    global static Contact doGet() {
        Id recordId = RestContext.request.params.get('id');
        Contact result; 
        List<Contact> results = [SELECT id, Name, Title, Top_Secret__c, Account.Name FROM Contact WHERE Id = :recordId];
        
  
        SObjectAccessDecision securityDecision = Security.stripInaccessible(AccessType.READABLE, results);
        
        
            
            SObjectAccessDecision securityDecision2 =  Security.stripInaccessible(AccessType.UPDATABLE, results);
              if (!securityDecision.getRecords().isEmpty()){
                 result.Description = result.Account?.Name;
            }
        else {
            throw new SecurityException('You don\'t have access to all contact fields required to use this API');
        }
    
    return result;
      }

public class FunctionalException extends Exception{}
    public class SecurityException extends Exception{}
}