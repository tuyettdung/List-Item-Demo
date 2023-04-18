(async function loadProd() {
  try {
    let result = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    let arrProduct = result.data.content;
    let htmlOut = "";
    let currentItem = 4;
    for (let i = 0; i < currentItem; i++) {
      let prod = arrProduct[i];
        htmlOut += 
        `
              <div class="prod-item col-lg-3 col-md-6 col-sm-12 ">
                <div class="card mt-4">
                  <div class="card-header">
                     <img src=${prod.image} class="w-100" />
                  </div>
                  <div class="card-body">
                     <p>
                       <i class="fa fa-star"></i>
                       <span>(4.5)</span>
                     </p>
                     <h6>${prod.name}</h6>
                  </div>
                  <div class="card-footer d-flex justify-content-around align-items-center">
                    <span>$${prod.price}</span>
                    <span id="btnBuy">Add to cart</span>
                  </div>
                </div>
              </div>
            `;
            
    }
    document.querySelector("#list_item").innerHTML = htmlOut;
    document.querySelector("#loadMoreBtn").onclick = function(){
      let currentItems = document.querySelectorAll('.prod-item').length;
      if (currentItem < arrProduct.length){
        for(let i = currentItems; i <arrProduct.length;i++){
          let item = arrProduct[i];
          htmlOut += 
          `
                <div class="prod-item col-lg-3 col-md-6 col-sm-12 ">
                  <div class="card mt-4">
                    <div class="card-header">
                       <img src=${item.image} class="w-100" />
                    </div>
                    <div class="card-body">
                       <p>
                         <i class="fa fa-star"></i>
                         <span>(4.5)</span>
                       </p>
                       <h6>${item.name}</h6>
                    </div>
                    <div class="card-footer d-flex justify-content-around align-items-center">
                      <span>$${item.price}</span>
                      <span id="btnBuy">Add to cart</span>
                    </div>
                  </div>
                </div>
              `;
        }
        document.querySelector("#list_item").innerHTML = htmlOut;
        document.querySelector("#loadMoreBtn").style.display = 'none';
      } 
    }

 
  } catch (err) {
    console.log("ERROR", err);
  }
})();



//Pull to refresh 
window.onload = function() {

    WebPullToRefresh.init( {
        loadingFunction: refreshProductFunction
    } );
};

var refreshProductFunction = function() {
    return new Promise( function( resolve, reject ) {
        if (true) {
            resolve();
        } else {
            reject();
        }
    } );
};




