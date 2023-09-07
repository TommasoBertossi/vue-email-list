// axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
//     .then(function (response) {
//         const result = response.data
//         console.log(result);
//     });

const { createApp } = Vue

createApp({
  data() {
    return {
      emails: [],
      numberEmails: 10,
    };
  },

  methods: {
    fetchEmails() {

        for (let i = 0; i < this.numberEmails; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            const generatedEmail = response.data.response;
            this.emails.push(generatedEmail);
        });
    }
    },
  },
  mounted() {
    this.fetchEmails();
  },
}).mount('#app');