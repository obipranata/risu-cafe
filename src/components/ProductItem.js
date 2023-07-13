const ProductItem = ({menu, product, setModalProduct, setIsOpen}) => {
  const imgUrl = "https://obipranata.github.io/risu/assets/img/products/";
  return(
  <div 
    className="product-card h-[211px] w-[155px] rounded-lg mt-4 relative border border-[#46E300] cursor-pointer product-item-border"
  >
      <div onClick={() => {setModalProduct(product); setIsOpen(true);}}>
        {
          menu == 'Minuman' ? 
          <div className="absolute top-1 right-1">
            {product.ice ? <p className="text-[#AFE894] font-bold leading-4 text-xs" >ICE</p> : ''}
            {product.hot ? <p className="text-[#AFE894] font-bold leading-4 text-xs" >HOT</p> : ''}
          </div>
          :
          ''
        }

        <img src={imgUrl+product.img} className="rounded-lg object-cover h-[211px] w-[155px]" />
        <div className="absolute bottom-0 px-4 pb-4">
          <h3 className="product-title text-primary leading-4 font-semibold text-base product-title-shadow" >
            {product.name}
          </h3>
          <h2 
            className="text-white mt-3 font-semibold text-xs price-shadow font-face-gm" 
          >
            {product.price}
          </h2>
        </div>
      </div>
  </div>
  );
}

export default ProductItem;