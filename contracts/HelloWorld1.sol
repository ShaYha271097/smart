pragma solidity >=0.7.0 <0.9.0;

contract HelloWorld1 {
    uint256 public count = 0; // state variable

    struct Contact {
        uint256 id;
        string name;
        string phone;
    }

    event ContactCreated(uint256 id, string name, string phone);

    constructor() {
        createContact("Zafar Saleem", "123123123");
    }

    mapping(uint256 => Contact) public contacts;

    function createContact(string memory _name, string memory _phone) public {
        count++;
        contacts[count] = Contact(count, _name, _phone);
        emit ContactCreated(count, _name, _phone);
    }
}