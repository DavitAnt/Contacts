export const determineHeadingText = path => {
  switch (path) {
    case "/contacts/new":
      return "Add New Contact";
    case "/contacts/search":
      return "Search Contacts";
    case "/contacts":
      return "Contacts App";
    case "/":
      return "Contacts App";
    default:
      return "Edit Contact";
  }
};
