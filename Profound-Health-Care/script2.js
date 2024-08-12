let html =`<li class="product">
                  <div class="header">
                      <img class="product-img" src=${imgSrc} alt=${altImg}/>
                  </div>
                  <div class="footer">
                      <p class="product-cat">
                          Sale!!
                      </p>
                      <h3 class="product-name">
                          <a href=${link} target="_blank">$Productt}</a>
                      </h3>
                      <p class="product-price"><s>${oldPrice}</s> ${newPrice}</p>
                  </div>
              </li>`;