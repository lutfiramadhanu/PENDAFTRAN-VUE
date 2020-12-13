import http from "../http-common";

class PendaftaranDataService {
  getAll() {
    return http.get("/pendaftaran");
  }

  get(id) {
    return http.get(`/pendaftaran/${id}`);
  }

  create(data) {
    return http.post("/pendaftaran", data);
  }

  update(id, data) {
    return http.put(`/pendaftaran/${id}`, data);
  }

  delete(id) {
    return http.delete(`/pendaftaran/${id}`);
  }

  deleteAll() {
    return http.delete(`/pendaftaran`);
  }

  findByNama_murid(nama_murid) {
    return http.get(`/pendaftaran?nama_murid=${nama_murid}`);
  }
}

export default new PendaftaranDataService();