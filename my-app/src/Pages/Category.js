import { useParams } from "react-router-dom";
import { products } from "../data/poducts";
import StarRating from "../components/StarRating";
import { categories } from "../data/categories";
import { Helmet } from "react-helmet";
function Category() {
  const { id } = useParams();
  function getCategoryNameById(categoryId) {
    const category = categories.find((category) => category.id === categoryId);
    return category ? category.name : "";
  }
  const category = getCategoryNameById(parseInt(id));
  // Rest of the component logic using the retrieved id parameter
  const filteredProducts = products.filter(
    (product) => product.cat_id === parseInt(id)
  );
  function getRandomImage() {
    const randomImageNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
    return `https://picsum.photos/300/300?random=${randomImageNumber}`;
  }
  return (
    <div className="bg-dark bg-opacity-25">
      <Helmet>
        <title>{category} - Dinox</title>
      </Helmet>
      <section className="pt-lg-5 pt-md-5  pt-0 pt-sm-0">
        <div className="container pt-md-5 pt-lg-5 pt-0 pt-sm-0">
          <div className="pt-lg-5 pt-md-5 pt-0 pt-sm-0"></div>
        </div>
      </section>

      <section className="py-5 ">
        <div className="container p-5 bg-light">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb ms-0">
              <li class="breadcrumb-item">
                <a href="/products">Produits</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                {category}
              </li>
            </ol>
          </nav>
          <h2 className=" font-monospace text-dark text-center text-lg-start mb-3">
            {category}
          </h2>
          <div className="d-flex flex-wrap justify-content-between">
            {filteredProducts.map((item) => (
              <div className="col-12 col-lg-4 col-sm-6 my-sm-2 text-center text-lg-start text-sm-center my-3">
                {item.image ? (
                  <img src={item.image} alt={item.name} />
                ) : (
                  <img src={getRandomImage()} alt={item.name} />
                )}
                <h6 className="fs-6">{category}</h6>
                <h2 className="font-monospace text-dark">{item.name}</h2>
                <StarRating rating={5} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Render category content based on the id */}
    </div>
  );
}

export default Category;
