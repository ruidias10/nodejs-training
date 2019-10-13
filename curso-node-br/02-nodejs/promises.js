
function getUser() {
  return new Promise((resolve, reject) => {
    //return reject(new Error("Error in getuser function"));
    setTimeout(() => {
      return resolve({
        id: 1,
        name: 'Aladin',
        date: new Date()
      })
    }, 400);
  })
}

function getPhone(idUser){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        phone: '+351 211 451 415'
      })
    }, 1000);
  });
}

function getAddress(idUser) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        street: 'Street 123, Porto',
        number: '5 AB'
      })
    }, 500);
  })
}


// execution
const user = getUser()
  .then((user) => {
    return getPhone(user.id)
      .then((phone) => {
        return {
          user,
          phone
        }
      })
  })
  .then((result) => {
    return getAddress(result.user.id)
      .then((address) => {
        const {user, phone} = result;
        return {
          user,
          phone,
          address
        }
      })
  })
  .then((result) => {
    console.log(`
      Name: ${result.user.name}
      Address: ${result.address.street}, ${result.address.number}
      Phone: ${result.phone.phone}
    `)
  })
  .catch((error) => {
    console.error("Error:", error);
  })