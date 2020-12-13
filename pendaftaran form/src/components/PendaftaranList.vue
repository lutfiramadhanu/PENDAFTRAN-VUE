<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search nama"
          v-model="nama_murid"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchNama_murid"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Pendaftaran List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(pendaftaran, index) in pendaftaran"
          :key="index"
          @click="setActivePendaftaran(pendaftaran, index)"
        >
          {{ pendaftaran.nama_murid }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllPendaftaran">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentPendaftaran">
        <h4>pendaftaran</h4>
        <div>
          <label><strong>nama_murid:</strong></label> {{ currentPendaftaran.nama_murid }}
        </div>
        <div>
          <label><strong>jenis_kelamin:</strong></label> {{ currentPendaftaran.jenis_kelamin }}
        </div>
         <div>
          <label><strong>ttl:</strong></label> {{ currentPendaftaran.ttl }}
        </div>
         <div>
          <label><strong>jumlah_saudara:</strong></label> {{ currentPendaftaran.jumlah_saudara }}
        </div>
         <div>
          <label><strong>alamat:</strong></label> {{ currentPendaftaran.alamat }}
        </div>
         <div>
          <label><strong>no_telp:</strong></label> {{ currentPendaftaran.no_telp }}
        </div>
         <div>
          <label><strong>email:</strong></label> {{ currentPendaftaran.email }}
        </div>
         <div>
          <label><strong>createdAt:</strong></label> {{ currentPendaftaran.createdAt }}
        </div>
         <div>
          <label><strong>updatedAt:</strong></label> {{ currentPendaftaran.updatedAt }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentPendaftaran.published ? "Tidak Diterima" : "Diterima" }}
        </div>

        <a class="badge badge-warning"
          :href="'/pendaftaran/' + currentPendaftaran.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    </div>
  </div>
</template>

<script>
import PendaftaranDataService from "../services/PendaftaranDataService";

export default {
  name: "pendaftaran-list",
  data() {
    return {
      pendaftaran: [],
      currentPendaftaran: null,
      currentIndex: -1,
      nama_murid: ""
    };
  },
  methods: {
    retrievePendaftaran() {
      PendaftaranDataService.getAll()
        .then(response => {
          this.pendaftaran = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrievePendaftaran();
      this.currentPendaftaran = null;
      this.currentIndex = -1;
    },

    setActivePendaftaran(pendaftaran, index) {
      this.currentPendaftaran = pendaftaran;
      this.currentIndex = index;
    },

    removeAllPendaftaran() {
      PendaftaranDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchNama_murid() {
      PendaftaranDataService.findByNama_murid(this.nama_murid)
        .then(response => {
          this.pendaftaran = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrievePendaftaran();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>