<script setup>
  import { ref } from "vue";

  const role = ref("")
  const location = ref("")
</script>   

<template>
    
    <form  action="" class="row border border-dark rounded-5">
       
        <div class="input-group p-1">
          <i class="bi-search input-group-text"></i>
          <label for="" class="position-absolute m-5">
            Role  
          </label>
          <input v-model="role" type="text" class="form-control" placeholder="Software Engineer">
          <span class="input-group-text">in</span>
          <label for="" class="position-absolute" style="margin-top: 50px; margin-left: 320px;">
            Where?  
          </label>  
          <input v-model="location" type="text" class="form-control" placeholder="Los Angeles">
          <span class="input-group-text">
            <a href="#">Search</a>
          </span>
        </div>
    </form>
</template>


<style scoped>
    input:focus {
        outline: none;
        /* border-bottom: 1px solid bl; */
    }
    input, input::placeholder{
        font-size: large;
        border: none;
    }
    .input-group-text{
      background: transparent;
      border: none;
    }
    a{
      text-decoration: none
    }
    /* button {
        background-color: transparent;
        font-size: large;
        color: #0d6efd;
        border: none;
    } */
</style>