<template>
  <div class="home container">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
 <Navbar></Navbar>
    <!-- <Front></Front> -->
    <!-- <product-list></product-list> -->
    <br>
    <br>
    <br>
    <br>
  <div class="container h-100">
        <div class="row p-5 h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <img src="/img/svg/product.svg" alt="" width="400">
          </div>
          <div class="col-md-6">
            <h3>Learn More About us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!
            </p>
             <button class="btn custom-btn btn-outline-primary mr-4">Browse Products</button>
          </div>
        </div>
      </div>
      <Login></Login>
    <mini-cart></mini-cart>
    <hr>
<footer class="page-footer">
  <div class="container">
    <br>
    <div class="row">
      <div class="col-lg-8 col-md-8 col-sm-12">
      <h6 class="text-uppercase font-weight-bold">Additional Information</h6><br>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum quam odio, quis placerat ante luctus eu. Sed aliquet dolor id sapien rutrum, id vulputate quam iaculis.</p>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12">
      <h6 class="text-uppercase font-weight-bold">Contact</h6>
      <p>Lagjia Kalabria p.n
      <br/>info@mywebsite.com
      <br/>+ 383 38 541 400
      <br/>+ 383 44 541 400</p>
    </div>
  </div>
  </div>
  <div class="footer-copyright text-center">© 2021 Copyright: Bookstore.com</div>
</footer>
</div>  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Front from "@/components/Front.vue"
import Products from '@/sections/Products.vue'
import Login from '@/components/Login.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld,Front,
    Products,Login
  }
}
</script>
