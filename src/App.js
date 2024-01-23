import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Shopping from './shopping';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
function App() {

  let Product = [
    {
      name: "Fancy Product",
      price: "$40.00 - $80.00"
    },
    {
      name: "Special Item",
      price: "$20.00 $18.00"
    },
    {
      name: "Sale Item",
      price: "$50.00 $25.00"
    },
    {
      name: "Popular Item",
      price: "$40.00"
    },
    {
      name: "Sale Item",
      price: "$50.00 $25.00"
    },
    {
      name: "Fancy Product",
      price: "$120.00 - $280.00"
    },
    {
      name: "Special Item",
      price: "$20.00 $18.00"
    },
    {
      name: "Popular Item",
      price: "$40.00"
    },
  ]




  return (
    <>
      <div className="container">
        <Nav></Nav>
        <Header></Header>
        
        <div className="row">

          {
             Product.map((Product) => {
           return <Shopping productData={Product}></Shopping>
           
             })
          }
        </div>

        <Footer></Footer>
      </div>

    </>
  );
}

export default App;
