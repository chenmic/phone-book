# phone-book
Basic phone book implementation, consists of contacts in a local array, written in NodeJS

### Usage:
    GET  /whos-there            - displays a static message
    GET  /contacts              - returns a JSON representing all the contacts
    GET  /contacts/find/<name>  - returns a JSON representing the contact <name> if exists or 404 otherwise
    POST /contacts/add          - expects a JSON object with `name`, `phone-number` and `address` in the body
                                  adds it if `name` doesn't exist and returns 409 otherwise
