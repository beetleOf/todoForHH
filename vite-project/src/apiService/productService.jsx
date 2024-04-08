import axiosInstance from "./apiInstance";

class ProductService {
  constructor(api) {
    this.api = api;
  }

  getLoadProds(count = 8) {
    return this.api.get(`/?_start=0&_limit=${count}`).then((res) => res.data);
  }

  getProds() {
    return this.api.get(`/`).then((res) => res.data);
  }

  getOneProd(id) {
    return this.api.get(`/${id}`).then((res) => res.data);
  }

  addNewProd(obj) {
    return this.api.post("/", obj).then((res) => res.data);
  }

  switchStatusProd(obj) {
    return this.api.put(`/${obj.id}`, obj).then((res) => res.data);
  }

  deleteProd(id) {
    return this.api.delete(`/${id}`)
  }
  editProd(obj) {
    return this.api.put(`/${obj.id}`, obj).then((res) => res.data);
  }
}

export default new ProductService(axiosInstance);
