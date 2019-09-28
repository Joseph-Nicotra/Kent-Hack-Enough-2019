const axios = require('axios');
axios.get('https://script.google.com/macros/s/AKfycbxUqkLQLY3jfCm2GlTv3XGOW5SOTpvfO0H_hYhRr4hQtTNd56A/exec').then((res)=>{
    console.log(res.data);
});