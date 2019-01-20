import { PRIVATE_KEY } from './constans/LocalStorage';

const BASE_URI = 'https://api-proxy.hashstax.de/projects/unicornNr9/contexts/UnicornStax/contracts';

export const fetchJSON = (url, options) => new Promise(resolve =>
    fetch(url, {
      ...options,
      headers: {
        accept: 'application/json; charset=UTF-8',
        'Content-Type': 'application/json',
        ...options.headers
      }
    }).then(res => resolve(res.json()))
  );
export const addService = service =>
  fetchJSON('https://api-proxy.hashstax.de/projects/christoph/contexts/Stax_1/storage', {
    headers: {
      'Originator-Ref': localStorage.getItem(PRIVATE_KEY)
    },
    method: 'POST',
    body: JSON.stringify({
      service,
      account: true
    })
  });

export const shoutdown = () =>
  fetchJSON('https://api-proxy.hashstax.de/projects/christoph/contexts/Stax_1/storage', {
    header: {
      'Originator-Ref': localStorage.getItem(PRIVATE_KEY)
    },
    body: JSON.stringify({
      account: false
    })
  });

export const register = (publicKey, privateKey) =>
  fetchJSON(BASE_URI, {
    method: 'POST',
    'Originator-Ref': publicKey,
    Authorization: privateKey,
    body:
      '{ "bin": "0x608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680636d4ce63c14604e578063e5c19b2d146076575b600080fd5b348015605957600080fd5b50606060a0565b6040518082815260200191505060405180910390f35b348015608157600080fd5b50609e6004803603810190808035906020019092919050505060a9565b005b60008054905090565b80600081905550505600a165627a7a72305820baa6f63389091967a4beace0a4adc5591f0bbfad996ca7bafeb94fb87c0535ff0029", "abi": "[{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"x\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"set\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"get\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"}]"}'
  });
