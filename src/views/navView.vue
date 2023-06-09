<template>
  <div class="navbar navbar-expand-lg navbar-dark bg-dark">
    
    <div class="navbar-brand">Isra Store</div>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul class="navbar-nav ">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownHome" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Best sellers
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownHome">
            <a class="dropdown-item" href="#">Page 1</a>
            <a class="dropdown-item" href="#">Page 2</a>
            <a class="dropdown-item" href="#">Page 3</a>
          </div>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Tenues de Match
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownPages">
            <a class="dropdown-item" href="#">Page A</a>
            <a class="dropdown-item" href="#">Page B</a>
            <a class="dropdown-item" href="#">Page C</a>
          </div>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownShop" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Entraînement
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownShop">
            <a class="dropdown-item" href="#">Product 1</a>
            <a class="dropdown-item" href="#">Product 2</a>
            <a class="dropdown-item" href="#">Product 3</a>
          </div>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Cadeaux et Accessoires
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownBlog">
            <a class="dropdown-item" href="#">Article 1</a>
            <a class="dropdown-item" href="#">Article 2</a>
            <a class="dropdown-item" href="#">Article 3</a>
          </div>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
    </div>

    <div class="navbar-right d-none d-md-block">
      <i class="fa-brands fa-youtube navbar-icon"></i>
      <i class="fa-brands fa-tiktok navbar-icon"></i>
      <i class="fa-brands fa-facebook navbar-icon"></i>
     
    </div>
  </div>
</template>

<script>
export default {
  name: 'navView',
  data() {
    return {
      dropdowns: {
        home: false,
        pages: false,
        shop: false,
        blog: false
      }
    };
  },
  methods: {
    showDropdown(dropdown) {
      this.dropdowns[dropdown] = true;
    },
    hideDropdown(dropdown) {
      this.dropdowns[dropdown] = false;
    }
  }
};
</script>

<style>

.navbar {
  background-color: #333;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.navbar-brand {
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
}

.navbar-menu {
  display: flex;
  align-items: center;
}

.navbar-item {
  color: white;
  font-size: 16px;
  padding: 10px;
  margin: 0 5px;
  position: relative;
}

.navbar-dropdown {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  margin-top: 10px;
}

.navbar-item:hover .navbar-dropdown {
  display: block;
}

.navbar-dropdown-item {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.navbar-right {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.navbar-icon {
  color: white;
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
}

.navbar-icon:hover {
  color: #ccc;
}
</style>
