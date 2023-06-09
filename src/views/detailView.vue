<template>
    <nav-view class="mb-2"></nav-view>
    <div class="product-page">
        <div class="product-image">
            <img src="image.jpg" alt="Image de l'article">
        </div>
        <div class="product-details">
            <h2>{{ foods[currentId].attributes.title }}</h2>
            <p class="text-success">{{ foods[currentId].attributes.price }}</p>
            <p>{{ foods[currentId].attributes.description }}</p>
            <div class="product-custom">
                <h3>Personnalisation</h3>
                <label for="size">Taille :</label>
                <select id="size">
                    <option value="small">Petit</option>
                    <option value="medium">Moyen</option>
                    <option value="large">Grand</option>
                </select>

                <label for="color">Couleur :</label>
                <select id="color">
                    <option value="red">Rouge</option>
                    <option value="blue">Bleu</option>
                    <option value="green">Vert</option>
                </select>

                <button class="add-to-cart ms-3">Ajouter au panier</button>
            </div>
        </div>
    </div>
    <footer-view class="fixed-bottom"></footer-view>
</template>

<script>
import footerView from './footerView.vue'
import navView from './navView.vue'

export default{
    name: 'detailView',
    components:{
        footerView,
        navView,
    }
}
</script>

<script setup>
    import { useFoodStuff } from '@/stores/store'
    const fetched = useFoodStuff()

    const foods = fetched.foods

    let currentUrl = window.location.href
    const splitUrl = currentUrl.split('/')
    let currentId = splitUrl[4]
    currentId = currentId - 1

</script>

<style scoped>

.product-page {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.product-image img {
    max-width: 100%;
    height: auto;
}

.product-details {
    flex-grow: 1;
    margin-left: 20px;
}

.product-details h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

.product-details p {
    margin-bottom: 20px;
}

.product-custom h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

.product-custom label {
    display: block;
    margin-bottom: 5px;
}

.product-custom select {
    margin-bottom: 10px;
}

.add-to-cart {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

.add-to-cart:hover {
    background-color: #0056b3;
}

</style>