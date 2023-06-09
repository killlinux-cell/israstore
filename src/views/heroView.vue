<template>

    <section class="hero">
  <div class="hero-content">
    <h1>Bienvenue dans notre boutique de vêtements</h1>
    <p>Découvrez notre collection tendance pour hommes et femmes</p>
    <a href="#" class="btn">Explorer</a>
  </div>
</section>

</template>

<script>


export default{
    name: 'heroView'
}
</script>

<style scoped>

.hero {
  background-image: url('../assets/img-1.jpg');
  background-size: cover;
  background-position: center;
  height: 400px; /* Hauteur de la section hero */
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content {
  text-align: center;
  color: #ffffff;
}

.hero-content h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 18px;
  margin-bottom: 30px;
}

.btn {
  display: inline-block;
  background-color: #ffffff;
  color: #333333;
  padding: 12px 24px;
  font-size: 16px;
  text-decoration: none;
  border-radius: 4px;
}

</style>