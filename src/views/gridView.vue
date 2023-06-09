<template>
    <div class="center-block">
      <h2>NOS PRODUITS</h2>
    </div>

  <!-- MODAL -->
<div class="" id="modal" :class="hiddenClass">
    <div class="modal">
            <div class="modal-content">
                <span class="close" @click="closeModal">&times;</span>
                <h2>Mon modal</h2>
                <p>Contenu du modal...</p>
            </div>
        </div>
  </div>
  
  <ul>
    <li>
      <a href="" @click.prevent="toogleAuthModal">Ouvrir le modal</a>
    </li>
  </ul> 
<!-- MODAL -->



  
    <div class="grid-container">
    <div class=" grid-item "  v-for="food in foods" :key="food.id"><!-- d-flex align-items-center justify-content-center -->
      <router-link :to="'/detail/' + food.id" class="router-style">
      <div href="#" class=" gallery-link" title="Order Now"><!-- h-100 -->
        <img :src="`http://localhost:1337${food.attributes.thumbnail.data[0].attributes.formats.thumbnail.url}`" class="food-img" /><!-- w-100 object-fit-contain h-100 -->
        
          <h3 class="food-name mb-3">{{ food.attributes.title }}</h3>
          <p class="">{{ food.attributes.price }}</p>
          <p class="food-description text-wrap text-black">{{ food.attributes.description }}</p>
        
      </div>
      </router-link>
      <span class="position-absolute top-0 end-0 btn btn-sm btn-danger m-2">Nouveau</span> 
    </div>
    
  </div>


</template>

<script>
import { mapState } from "pinia";
import useModalStore from "@/stores/modal";
import { useFoodStuff } from '../stores/store';
import { mapStores } from "pinia";

export default{
    name: 'gridView',
    data(){
      return{
        foods: [],
        isModalOpen: false,
      }
    },
    beforeMount() {
    const  fetched = useFoodStuff();

    if (fetched.foods.length == 0) {
      fetched.getFoods()
    }

    let articless = fetched.foods;
    console.log(articless)
    this.foods.push(articless)
    this.foods = this.foods[0]
  },
    methods:{
      toogleAuthModal(){
        this.modalStore.isOpen = !this.modalStore.isOpen;
        console.log(this.modalStore.isOpen);
      },
      openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    },
    computed: {
      ...mapStores(useModalStore),
      ...mapState(useModalStore, ["hiddenClass"])
    }
}
</script>

<style scoped>
.posi{
  z-index: 100;
}
.grid-container {
  display: grid;
  grid-template-rows: 300px 300px 300px ; 
  grid-template-columns: repeat(3, 1fr); 
  gap: 10px;
}

.grid-item {
  background-color: #e5e4e4; 
  /* padding: 20px; */ 
  text-align: center;
}
.center-block {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 25px 25px;
    }


    /* style modal */

    .modal {
    display: none;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 60%;
    max-width: 600px;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
/* label */

/* grid */
.section-3 {
  background-color: #333;
  padding: 5rem 0;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10rem;
}

.gallery-link {
  position: relative;
  margin: 4rem 1rem;
}

.gallery-link:hover .food-img {
  
  transform: scale(1.1);
  filter: blur(0.5rem);
  opacity: 0.5;
}

.food-img {
  width: 24vw;
  height: 15vw;
  object-fit: cover;
}
.food-price{
position: absolute;
  bottom: 3vw;
  left: 2rem;
  width: 70%;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: #fff;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
  
}
.gallery-link:hover .food-price{
  width: 100%;
  transition: width 1.5s 0.5s;
}

.food-name {
  position: absolute;
  top: 0rem;
  left: 3rem;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: #000;
  width: 0;
  overflow: hidden;
  transition: width 0.3s;
}

.gallery-link:hover .food-name{
  width: 100%;
  transition: width 1.5s 0.5s;
}

.food-description {
  position: absolute;
  bottom: 3vw;
  left: 2rem;
  width: 70%;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: #fff;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
}

.gallery-link:hover .food-description {
  backdrop-filter: blur(10px);
  opacity: 1;
  visibility: visible;
  transition: opacity 1s 1s;
}




</style>