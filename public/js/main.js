const data = {
    name: 'Volodymyr',
    surname: 'Melnychenko',
    age: 54,
    adress: {
        city: 'Kyiv',
        street: 'Romana Ratushnogo',
        ap: '4'
    },
    phone: '0500121230',
    email: 'mvi_1968@i.ua'
};

// відправка інформації на сервер, отримання і відображення результату
const sendData = async () =>  {
	try {
	  const result = await axios.post('/add', data);
	  let res = result.data; // Дані, які повернув сервер	
      console.log('result: ', res)	
	} catch (error) {
	  console.error(error); // Обробка помилок
	}
  };

  sendData();
