import React, { useState, useEffect } from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import Web3 from 'web3'
import { CONTACT_ADDRESS, CONTACT_ABI } from './config';
const web3 = new Web3(Web3.givenProvider)

// Tạo component App
function App() {
  const [account, setAccount] = useState([])
  const [balance, setBalance] = useState([])
  const [contacts, setContacts] = useState([]);
  console.log(contacts)
  useEffect(async () => {
    await web3.eth.getAccounts().then(async address => {
      console.log(address)
      setAccount(address[0])
      await web3.eth.getBalance(address[0]).then(balance => {
        setBalance(web3.utils.fromWei(balance, 'ether'))
      });
    })
  }, [])

  const getSmartContract = async () => {
    const contactList = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);
    console.log(contactList)
    const counter = await contactList.methods.count().call();
    ;

    console.log(counter)
    for (let i = 1; i <= counter; i++) {

      const contact = await contactList.methods.contacts(i).call();
      setContacts((contacts) => [...contacts, contact]);
    }
  }

  const handleOnClickCreate = async () => {
 
}

  return (
    <div>
      <p style={{ 'fontSize': 40 }}>Current Balance: <strong>{balance}</strong></p>
      <p style={{ 'fontSize': 40 }}>Account: {account} </p>
    
      <div>  <button onClick={getSmartContract}>Get SmartContract</button></div>
      <input type='text' className='contact' />
      <input type='text' className='contact' />
      <button onClick={handleOnClickCreate}>Create Contact</button>
      <ul>
        {contacts.map((item, index) => {
          return <li key={index}>
            <p>Name: {item.name}</p>
            <p>Phone: {item.phone}</p>
          </li>
        })}
      </ul>
      <div style={{ 'display': 'flex', 'padding': 20, 'width': 200, 'justifyContent': 'space-between' }}>
        <p>Iphone11</p>
        <p>0.05 ETH</p>
        <button>Buy</button>
      </div>
      <div style={{ 'display': 'flex', 'padding': 20, 'width': 200, 'justifyContent': 'space-between' }}>
        <p>Iphone11</p>
        <p>0.05 ETH</p>
        <button>Buy</button>
      </div>
      <div style={{ 'display': 'flex', 'padding': 20, 'width': 200, 'justifyContent': 'space-between' }}>
        <p>Iphone11</p>
        <p>0.05 ETH</p>
        <button>Buy</button>
      </div>
      <div style={{ 'display': 'flex', 'padding': 20, 'width': 200, 'justifyContent': 'space-between' }}>
        <p>Iphone11</p>
        <p>0.05 ETH</p>
        <button>Buy</button>
      </div>
      <div style={{ 'display': 'flex', 'padding': 20, 'width': 200, 'justifyContent': 'space-between' }}>
        <p>Iphone11</p>
        <p>0.05 ETH</p>
        <button>Buy</button>
      </div>
    </div>
  )
}

// Render component App vào #root element
export default App;