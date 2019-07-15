new Vue({
    el: '#app',
    data: {
        name: 'Du',
        age: 22,
        linkIMG: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    methods: {
        numberRandom: function(){
            return parseFloat(Math.random())
        }
    },

})