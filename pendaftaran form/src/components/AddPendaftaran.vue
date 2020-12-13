<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nama_murid">nama_murid</label>
        <input
          type="text"
          class="form-control"
          id="nama_murid"
          required
          v-model="pendaftaran.nama_murid"
          name="nama_murid"
        />
      </div>

      <div class="form-group">
        <label for="jenis_kelamin">jenis_kelamin</label>
        <input
          class="form-control"
          id="jenis_kelamin"
          required
          v-model="pendaftaran.jenis_kelamin"
          name="jenis_kelamin"
        />
      </div>

       <div class="form-group">
        <label for="ttl">ttl</label>
        <input
          class="form-control"
          id="ttl"
          required
          v-model="pendaftaran.ttl"
          name="ttl"
        />
      </div>

      <div class="form-group">
        <label for="agama">Agama</label>
        <input
          class="form-control"
          id="agama"
          required
          v-model="pendaftaran.agama"
          name="agama"
        />
      </div>

      <div class="form-group">
        <label for="jumlah_saudara">jumlah_saudara</label>
        <input
          class="form-control"
          id="jumlah_saudara"
          required
          v-model="pendaftaran.jumlah_saudara"
          name="jumlah_saudara"
        />
      </div>

      <div class="form-group">
        <label for="alamat">alamat</label>
        <input
          class="form-control"
          id="alamat"
          required
          v-model="pendaftaran.alamat"
          name="alamat"
        />
      </div>

      <div class="form-group">
        <label for="no_telp">no_telp</label>
        <input
          class="form-control"
          id="no_telp"
          required
          v-model="pendaftaran.no_telp"
          name="no_telp"
        />
      </div>

      <div class="form-group">
        <label for="email">email</label>
        <input
          class="form-control"
          id="email"
          required
          v-model="pendaftaran.email"
          name="email"
        />
      </div>
      <button @click="savePendaftaran" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newPendaftaran">Add</button>
    </div>
  </div>
</template>

<script>
import PendaftaranDataService from "../services/PendaftaranDataService";
export default {
  name: "Add-pendaftaran",
  data() {
    return {
      pendaftaran: {
        id: null,
        nama_murid: "",
        jenis_kelamin: "",
        ttl: "",
        agama: "",
        jumlah_saudara: "",
        alamat: "",
        no_telp: "",
        email: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    savePendaftaran() {
      var data = {
        nama_murid: this.pendaftaran.nama_murid,
        jenis_kelamin: this.pendaftaran.jenis_kelamin,
        ttl: this.pendaftaran.ttl,
        agama: this.pendaftaran.agama,
        jumlah_saudara: this.pendaftaran.jumlah_saudara,
        alamat: this.pendaftaran.alamat,
        no_telp: this.pendaftaran.no_telp,
      };
      
      PendaftaranDataService.create(data)
        .then(response => {
          this.pendaftaran.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newPendaftaran() {
      this.submitted = false;
      this.pendaftaran = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>