(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded',function(){
        console.log('Ready!!');
        
           console.log('hola brian')
        class Sneaker{
            constructor(name,size,color){
                this.name = name
                this.size = size
                this.color = color
            }
        }

        class Render{
            renderCard(newSneaker){
                const productList = document.getElementById('product-list')
                const element = document.createElement('div')
                element.innerHTML =
                `
                <div class="container">
                    <div class="card ${newSneaker.color}">
                        <div class="imgBx">
                            <img src="img/shoes-${newSneaker.color}.png" alt="shoes">
                        </div>
                        <div class="contentBx">
                            <h2>${newSneaker.name}</h2>
                            <div class="size ${newSneaker.color}">
                                <h3>Size :</h3>
                                <span>${newSneaker.size}</span>
                            </div>
                            <div class="color">
                                <h3>Color :</h3>
                                <span class="circle-${newSneaker.color}"></span>
                            </div>
                            <a href="#">Buy Now</a>
                        </div>
                    </div>
                </div>
                `;
                productList.appendChild(element)
                form.reset()
            }
        }

        const form = document.getElementById('productForm')
        form.addEventListener('submit', function(e){

            const name = document.getElementById('name').value
            const size = document.getElementById('size').value
            const colorGreen = document.getElementById('green').checked
            const colorBlue = document.getElementById('blue').checked
            const colorPink = document.getElementById('pink').checked

            if(colorGreen){
                var color = 'green'
            }
            if(colorBlue){
                var color = 'blue'
            }
            if(colorPink){
                var color = 'pink'
            }

            const newSneaker = new Sneaker(name,size,color)

            const UI = new Render()
            UI.renderCard(newSneaker)

            e.preventDefault()
        })
    });
})();
