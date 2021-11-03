<template>
  <div v-show="showAlertBox">
    <alert-box class="w-1/6 float-right"  message-title="Email Sent Successful" message="The email send successful. One of our staff will contact you soon." btn-label="OK" @click="btnClicked"></alert-box>
  </div>
  <div class="container">
    <form ref="form" @submit.prevent="sendEmail">
      <label>Name</label>
      <input
          type="text"
          v-model="name"
          name="name"
          placeholder="Your Name"
      >
      <label>Email</label>
      <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Your Email"
      >
      <label>Message</label>
      <textarea
          name="message"
          v-model="message"
          cols="30" rows="5"
          placeholder="Message">
          </textarea>

      <input type="submit" value="Send">
    </form>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import emailjs from 'emailjs-com';
import AlertBox from "../components/AlertBox.vue";

export default defineComponent({
  name: "Email",
  components: {AlertBox},

  setup() {
    const name = ref('')
    const email = ref('')
    const message = ref('')
    const showAlertBox = ref(false)


    function btnClicked() {
      showAlertBox.value = false
    }


    function sendEmail() {
      console.log(name.value)
      console.log(email.value)
      console.log(message.value)

      try {
        emailjs.send('service_8573goa', 'template_pkv5w9c',
             {
              name: name.value,
              email: email.value,
              message: message.value,
              code: "147"
            }, 'user_nNnVnF4Eh9FMOAhIvIhEu',)
            .then(function(response) {
              showAlertBox.value = true
            }, function(error) {
              console.log('FAILED...', error);
            });

      } catch(error) {
        console.log({error})
      }
      // Reset form field
      name.value = ''
      email.value = ''
      message.value = ''
  }

  return{
    name,
    email,
    message,
    sendEmail,
    showAlertBox,
    btnClicked
  }

  }
})
</script>

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
