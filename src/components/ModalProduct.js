import { useState, useEffect } from 'react';
const ModalProduct = ({product, menu}) => {
  const imgUrl = "https://obipranata.github.io/risu/assets/img/products/";
  const [varian, setVarian] = useState([]);

  useEffect(() => {
    if(menu == 'Cemilan'){
      setVarian(product.varian);
    }
  })
  return(
    <div className="w-[80vw] lg:w-auto relative">
      <img src={imgUrl+product.img} className="rounded-lg lg:max-h-[80vh] mx-auto" />
      <div className="text-black absolute top-8 right-4">
      {
        varian?.map((v, index) => (
          <p className="font-bold text-right varian-shadow" key={`varian-${index}`}>{v}</p>
        ))
      }
      </div>
      <p 
        className="text-white mt-2 text-sm font-face-gm desc-shadow" 
      >
        {product.description}
      </p>
    </div>
  );
}

export default ModalProduct;