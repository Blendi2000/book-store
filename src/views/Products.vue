<template>
  <div class="products">
<div class="container">
   <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-6">
              <h3>Books Page</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt quia similique, ea pariatur consectetur earum voluptates porro fugiat ut ex corrupti perspiciatis nihil reprehenderit unde? Quia amet quibusdam vel.</p>
                    <img src="/img/svg/books.svg" alt="" class="img-fluid">

            </div>
            <!-- <div class="col-md-6">
            </div> -->
        </div>
    </div>
    <hr>
    
    <div class="product-test">

      <h3 class="d-inline-block">Books List</h3>
        <button @click="addNew" class="btn btn-primary float-right">Add Book</button><hr>
      <div class="table-responsive">

        <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products">
            <td>
              {{product.name}}
              </td>
          </tr>
        </tbody>
      </table>

      </div>

    </div>
</div>

  <!-- Modal -->
      <div class="modal fade" id="product" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editLabel">Add Book</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

                <div class="row">
                  <!-- main product -->
                  <div class="col-md-8">
                    <div class="form-group">
                      <input type="text" placeholder="Book Name" v-model="product.name" class="form-control">
                    </div>

                    <div class="form-group">
                      <textarea name="description" placeholder="Book Description" v-model="product.description" class="form-control"></textarea>
                    </div>
                  </div>
                  <!-- product sidebar -->
                  <div class="col-md-4">
                    <h4 class="display-6">Book Details</h4>
                    <hr>

                    <div class="form-group">
                      <input type="text" placeholder="Book price" v-model="product.price" class="form-control">
                    </div>

                    <div class="form-group">
                      <input type="text" placeholder="Book tags" v-model="product.tag" class="form-control">
                      
                    </div>


                    <div class="form-group">
                      <label for="product_image">Book Images</label>
                      <input type="file" @change="uploadImage" class="form-control">
                    </div>
                    <!-- <div class="form-group d-flex">
                      <div class="p-1" v-for="(image, index) in product.images">
                          <div class="img-wrapp">
                              <img :src="image" alt="" width="80px">
                              <span class="delete-img" @click="deleteImage(image,index)">X</span>
                          </div>
                      </div>
                    </div> -->

                  </div>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button @click="addProduct()" type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
/*eslint-disable */

import {fb, db} from '../firebase';

export default {
  name: 'Products',
  props: {
    msg: String
  },
  data(){
    return{
      products: [],
      product:{
        name: null,
        description: null,
        price: null,
        tag: null,
        image: null,
      },
      activeItem:null
    }
  }, 
  firestore(){
    return{
      products: db.collection('products'),
    }
  },
  methods:{
    uploadImage(){},

    addNew(){
        //this.modal = 'new';
        //this.reset();
        $('#product').modal('show');
    },
    updateProduct(){
    },
    editProduct(product){
    },
    deleteProduct(doc){
    },
    readData(){
    },
    addProduct(){
      this.$firestore.products.add(this.product);
      $('#product').modal('hide');
    }
  },
  created(){
  }
};  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
