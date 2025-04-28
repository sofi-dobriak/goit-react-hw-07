# Phonebook App

This application allows you to store and manage your contacts. It offers several useful features for working with contacts.

## Features:

1. **Add Contacts**

    - You can add new contacts by providing a name and phone number.
    - [Yup](https://github.com/jquense/yup) library is used for validation:
        - Name must be between 2 to 16 characters.
        - Phone number can only contain digits and can be separated by dashes (using a regular expression).

2. **Search Contacts by Name**

    - You can search for contacts by name.

3. **Delete Contacts**

    - You can delete contacts from the phonebook.

4. **Save Contacts in Local Storage**
    - Contacts are stored in the browser's [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
    - Data persists even when the page is reloaded.

## Technologies:

-   **React** for building the interface.
-   **Formik** for handling forms.
-   **Yup** for validation.
-   **LocalStorage** for data persistence.
