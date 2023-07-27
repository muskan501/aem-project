Navigation Component
This component is written in HTL. It consists of multifield dialog.

Navigation Dialog

Multifield has some certain fields that needs to be configured.

•navigationItems: - It is basically having a sling: resourceType as a “granite/ui/components/coral/foundation/form/multifield” which helps in generating a multifield structure.

•Root Page Path: - It is having a sling: resourceType as a “granite/ui/components/coral/foundation/form/pathbrowser” where we can author the path of root(Parent) page and it will display  page title of parent and child page. Page Title will be picked from the Navigation Title, else Page Title, otherwise the jcr:title.

•Link Checkbox: - It is having a sling: resourceType as a “granite/ui/components/foundation/form/checkbox” where we have set a value in such a way that if checkbox value is true (means checked) then it will not include the child pages and if it is false (means unchecked) then it will display all child pages.


Hide-in-menu-navigation:- If we don't want to include any child page from list of child pages then we have to check the checkbox of Hide in Navigation in page properties of specific page.