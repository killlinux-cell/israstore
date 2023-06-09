import { defineStore } from 'pinia'

export const useFoodStuff = defineStore('fetched', {
  state: () => ({
    foods: []
  }),

  actions: {
    async getFoods() {
      try {
        fetch('http://localhost:1337/api/articles?populate=*')
          .then((response) => response.json())
          .then((data) => {
            const foods = Object.values(data)[0]
            for (let i = 0; i < foods.length; i++) {
              this.foods.push(foods[i])
            }
            console.log(foods)
          })
          .catch((error) => {
            console.error(error)
          })
      } catch (error) {
        console.error(error)
      }
    },

    emptyStore() {
      this.foods = []
    }
  }
})
