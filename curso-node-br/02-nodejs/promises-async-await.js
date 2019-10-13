
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
(async function main() {
  try{
    console.time('time');

    const user = await getUser();
    //const phone = await getPhone(user.id);
    //const address = await getAddress(user.id);

    const result = await Promise.all([
      getPhone(user.id),
      getAddress(user.id)
    ]);

    const phone = result[0];
    const address = result[1];

    console.log(`
      Name: ${user.name}
      Address: ${address.street}, ${address.number}
      Phone: ${phone.phone}
    `);    

    console.timeEnd('time');

  } catch(error) {
    console.error("Error:", error);
  }
}());

