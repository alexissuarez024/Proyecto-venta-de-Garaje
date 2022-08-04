const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const myOrder = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");


navEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){

 const isMyOrderClosed = myOrder.classList.contains("inactive");
    
    if (!isMyOrderClosed) {
		myOrder.classList.add("inactive");
	}

  desktopMenu.classList.toggle("inactive");
}


burgerMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu(){
   
 const isMyOrderClosed = myOrder.classList.contains("inactive");

    if (!isMyOrderClosed) {
		myOrder.classList.add("inactive");
	}
  
  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}


shoppingCart.addEventListener("click", togglemyOrder);

function togglemyOrder(){
	
 const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
 const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
 const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    if (!isDesktopMenuClosed) {
    	desktopMenu.classList.add("inactive");
    }

	  if (!isMobileMenuClosed) {
		  mobileMenu.classList.add("inactive");
	}

    if (!isProductDetailClosed){
      productDetailContainer.classList.add("inactive");
    }

  myOrder.classList.toggle("inactive");
}

function openProductDetailAside(){
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");

}

productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function closeProductDetailAside(){
  productDetailContainer.classList.add("inactive");

}

const productList = [];

productList.push({
  name: "Manga Berserk: Vol 1",
  price: "15,00",
  image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/037/558/products/berserk-011-c38d30230ba4e4195e16092751719091-640-0.jpg",
});

productList.push({
  name: "Manga Berserk: Vol 2",
  price: "15,00",
  image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/037/558/products/berserk-021-4860c5513f07ec59b116092751722043-640-0.jpg",
});

productList.push({
  name: "Manga Berserk: Vol 3",
  price: "15,00",
  image: "https://img.assinaja.com/assets/tZ/054/img/163805_520x520.jpg",
});

productList.push({
  name: "Manga ChainSawMan: Vol 1",
  price: "15,00",
  image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/037/558/products/chainsaw-man-coleccion-de-mangas-tomos-1-al-6-con-caja-estuche-editorial-ivrea1-cc005abdf084f3363016358701386435-640-0.png",
});

productList.push({
  name: "Mangas Kimetsu No Yaiba: Vol 1 al 5",
  price: "75,00",
  image: "https://ae01.alicdn.com/kf/Hc6a9f747b10b4f1e80568ca471a3385fx/Anime-Demon-Slayer-Kimetsu-no-Vol-1-5-Yaiba-Jap-n-j-venes-adolescentes-ciencia-de.jpg",
});

productList.push({
  name: "Figura Guts - Berserk",
  price: "30,00",
  image: "https://m.media-amazon.com/images/I/61QZYKIcGnL._AC_SS450_.jpg",
});

productList.push({
  name: "Figura Griffith - Berserk",
  price: "30,00",
  image: "https://m.media-amazon.com/images/I/71k8QjuHwnL._AC_SY550_.jpg",
});

productList.push({
  name: "Figuras Chibi de ChainSawMan",
  price: "25,00",
  image: "https://ae01.alicdn.com/kf/H59766733d1eb49e8af25c22b3fd33e93r/Judai-figura-de-acci-n-del-hombre-de-motosierra-mu-eco-de-juguete-de-PVC-Original.jpg",
});

productList.push({
  name: "Figura Rengoku - Kimetsu No Yaiba",
  price: "30,00",
  image: "https://akihabarna.com/min/img/productos/kimetsu-no-yaiba-rengoku-kyojuro-gem-megahouse.jpg",
});

/*Podemos seguir agregando cualquier productList que queramos y se agregara automaticamente
 gracias a el ciclo for*/


  for (product of productList){
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.image);
  productImg.addEventListener("click", openProductDetailAside);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div");

  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + product.price;

  const productName = document.createElement("p");
  productName.innerText = product.name;

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);


  const productInfoFigure = document.createElement("figure");
  
  const productImgCart = document.createElement("img");
  productImgCart.setAttribute("src", "./Iconos y Logos/icons/bt_add_to_cart.svg");

  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);
  
  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);

  }



