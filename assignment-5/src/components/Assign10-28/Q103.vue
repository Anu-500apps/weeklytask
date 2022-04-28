 <template>
 <div class="hello">
   <h1>Question3 Using cheerio</h1>
    <h1>{{ msg }}</h1>
     <!-- <ul>
      <li v-for="(message, index) in messages" :key="index">
        <b>{{ messages.ip }} [{{ message.type }}]:</b>
        {{ message.blocked }}
      </li>
    </ul>  -->
    <!-- <button @click="fetchUrl">click</button> -->
    <h1>{{message}}</h1>
  </div>
</template>

<script>
import axios from "axios";
import cheerio from "cheerio";
export default {
  name: "ScrapIP",
  props: {
    msg: String,
    message: Array
  },
  methods: {
    fetchUrl() {
      for (let i = 0; i < 5; i++) {
        const ip = "192.168.0." + i;
        const url = "https://bootstrap-vue.org/docs" + ip + ".html";
        axios.get(url).then(response => {
          const $ = cheerio.load(response);
       console.log(ip);
       console.log($)
          setTimeout(() => {
            if ($(".global_data_cnt_DNSBLBlacklistTest").text() == 243) {
              this.messages.push({
                ip: ip,
                type: "Blacklist Test",
                blocked: $(".global_data_cnt_DNSBLBlacklistTest").text()
              });
            }
          }, 10000);
        });
      }
    }
  },
  created() {
    this.fetchUrl();
  }
};
</script>
