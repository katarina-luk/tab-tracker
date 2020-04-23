<template>
 <div class="bg">
    <view-wrapper>
      <mdb-mask class="d-flex gradient justify-content-center align-items-center">
        <mdb-container>
          <mdb-row>
            <div class="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
              <h1 class="h1-responsive font-weight-bold">MusicShutter </h1>
              <hr class="hr-light"/>
              <h6 class="mb-4">MusicShutter will help you orginaze your favourite music. Enjoy my dear friend</h6>
             <v-btn
             flat
             dark
             :to="{name:'login'}">
               Login
            </v-btn>
             <v-btn
              v-if='$store.state.isUserLoggedIn'
             flat
             dark
            :to="{name:'songs'}">
              Continue as a guest
            </v-btn>
             <v-btn
             flat
             dark
             :to="{name:'register'}">
               Sign Up
            </v-btn>
            </div>
            <mdb-col md="6" xl="5" class="mb-4">
             <!-- mdb-card id="classic-card">
                <mdb-card-body class="z-depth-2 white-text">
                  <h3 class="text-center"><mdb-icon icon="user"/> Register:</h3>
                  <hr class="hr-light"/>
                  <mdb-input label="Your name" labelColor="white" icon="user"/>
                  <mdb-input label="Your email" labelColor="white" icon="envelope"/>
                  <mdb-input label="Your password" labelColor="white" icon="lock" type="password"/>
                  <div class="text-center mt-4 black-text">
                    <mdb-btn color="indigo">Sign Up</mdb-btn>
                    <hr class="hr-light"/>
                    <div class="text-center d-flex justify-content-center white-label">
                      <a class="p-2 m-2">
                        <mdb-icon fab icon="twitter" class="white-text"/>
                      </a>
                      <a class="p-2 m-2">
                        <mdb-icon fab icon="linkedin" class="white-text"/>
                      </a>
                      <a class="p-2 m-2">
                        <mdb-icon fab icon="instagram" class="white-text"/>
                      </a>
                    </div>
                  </div>
                </mdb-card-body>
              </mdb-card -->
            </mdb-col>
          </mdb-row>
        </mdb-container>
      </mdb-mask>
    </view-wrapper>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, ViewWrapper, mdbMask, mdbBtn, mdbCard, mdbCardBody, mdbInput, mdbIcon, mdbNavbarBrand } from 'mdbvue'
export default {
  name: 'ClassicFormPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    ViewWrapper,
    mdbMask,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbInput,
    mdbIcon,
    mdbNavbarBrand
  }
}
</script>

<style>
body, html {
  height: 100%;
  margin: 0;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
}
.view-wrapper {
 height: 100%;
  margin: 0;
  width: 100%;
}

   .bg {
    /* The image used */
    background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg");

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .classic-form-page h6 {
    line-height: 1.7;
  }

  .top-nav-collapse {
    background: #424f95 !important;
  }

  @media (max-width: 768px) {
    .classic-form-page .navbar:not(.top-nav-collapse) {
        background: #424f95 !important;
    }
  }

  .classic-form-page label {
    color: #fff!important;
  }
</style>
