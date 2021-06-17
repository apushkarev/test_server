async function sendTestRequest() {

  const headers = {};
  headers['Content-Type'] = 'application/json';

  const data = {
      name: 'ap',
      value: '123'
  };

  const response = await request(`https://avt-editor.lenflash.com/api/saveFile`, 'POST', data);

  console.log(await response.json());
}

async function request(url, method = 'GET', data = null) {
  try {
    const headers = {}
    let body

    if (data) {
      headers['Content-Type'] = 'application/json'
      body = JSON.stringify(data)
    }

    const response = await fetch(url, {
      method,
      headers,
      body
    })
    return await response.json()
  } catch (e) {
    console.warn('Error:', e.message)
  }
}