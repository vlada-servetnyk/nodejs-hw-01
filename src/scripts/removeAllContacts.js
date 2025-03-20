import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = () => {
    return writeContacts([]);
 };

removeAllContacts();
