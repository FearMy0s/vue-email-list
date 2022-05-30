const app = new Vue({
  el: "#mails",
  data: {
    emailList: [],
  },
  created() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((val) => this.emailList.push(val.data.response));
    }
  },
});