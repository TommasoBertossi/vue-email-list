axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(function (response) {
        const result = response.data
        console.log(result);
    });

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}).mount('#app')