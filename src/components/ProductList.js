import { useEffect, useState } from 'react';
import ProductItem from './ProductItem'
import CategoryTitle from './CategoryTitle'
import Modal from 'react-modal';
import ModalProduct from './ModalProduct'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    background:'#111111',
    boxShadow: '0 0 6px 1px #46E300',
    border: '1px solid #46E300',
    borderRadius:'8px',
    overflow:'none',
  },
  overlay: {
    backgroundColor: 'none'
  },
};

Modal.setAppElement('#root');

const ProductList = ({menu}) => {
  const [products, setProducts] = useState([]);
  const [modalProduct, setModalProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    fetch("https://obipranata.github.io/risu/menu.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setProducts(data);
    })
    .catch((err) => {
      if(err.name === "AbortError"){
        console.log("fetch aborted.");
      }
    })
  }, []);

  return(
    <div className="mt-5">
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
          <button onClick={closeModal} className="absolute -top-4 -right-4 bg-primary text-white rounded-full w-8 h-8 flex justify-center items-center text-xl font-bold">X</button>
        <div className="relative">
          <ModalProduct menu={menu} product={modalProduct} />
        </div>
      </Modal>
      {
        menu == 'Cemilan' ? 
        <div>
          <div className="flex gap-4 flex-wrap justify-center">
          {products.foods?.map((product, index) => (
            <ProductItem menu={menu} product={product} setIsOpen={setIsOpen} setModalProduct={setModalProduct} key={`foods-${index}`}/>
          ))}
          </div>
        </div>
        :
        <div>
          <CategoryTitle title="Signature"/>
          <div className="flex gap-4 flex-wrap justify-center mb-8">
            {products.drinks?.signature?.map((product, index) => (
              <ProductItem menu={menu} product={product} setIsOpen={setIsOpen} setModalProduct={setModalProduct} key={`signature-${index}`}/>
            ))}
          </div>
          <CategoryTitle title="Espresso Based"/>
          <div className="flex gap-4 flex-wrap justify-center mb-8">
            {products.drinks?.espresso?.map((product, index) => (
              <ProductItem menu={menu} product={product} setIsOpen={setIsOpen} setModalProduct={setModalProduct} key={`espresso-${index}`}/>
            ))}
          </div>
          <CategoryTitle title="Non-Coffe"/>
          <div className="flex gap-4 flex-wrap justify-center">
            {products.drinks?.nonCoffe?.map((product, index) => (
              <ProductItem menu={menu} product={product} setIsOpen={setIsOpen} setModalProduct={setModalProduct} key={`nonCoffe-${index}`}/>
            ))}
          </div>
        </div>
      }
    </div>
  );
}
export default ProductList;