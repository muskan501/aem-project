Tab Link Component
This component is written in HTL. It consists of Nested multifield dialog.

Tab Link Dialog

Nested Multifield has some certain fields that needs to be configured.

   •Tabs: - It is basically having a sling: resourceType as a 
   “granite/ui/components/coral/foundation/form/multifield”
   which helps in generating a multifield structure.

   •Title: - It is having a sling: resourceType as a 
   “granite/ui/components/coral/foundation/form/textfield”
   where we can author the Title field in a text format.

   •Links: - It is basically having a sling: resourceType as a 
   “granite/ui/components/coral/foundation/form/multifield”
   which helps in generating a nested multifield structure.

   •Link Text: - It is having a sling: resourceType as a 
   “granite/ui/components/coral/foundation/form/textfield”
   where we can author the nested link text field in a String format.

   •Link URL: - It is having a sling: resourceType as a 
   “granite/ui/components/coral/foundation/form/pathbrowser”
   where we can author the path.

   •Link Target: - It is having a sling: resourceType as a
   “granite/ui/components/foundation/form/checkbox”
   where we have set a value in such a way that if checkbox value is true (means checked) then its target value will be "_blank" and if it is false (means unchecked) then its target value will be "empty".




   

