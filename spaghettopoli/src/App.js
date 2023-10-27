import logo from './logo.svg';
import './App.css';

const products = [
  { title: 'Cabbage', isFruit: false, desc: "hehehe", id: 1, url: "https://it.airliquide.com/statics/styles/crop_image_illustrated_slider/s3/2021-11/Helium%20symbol.jpg?VersionId=wh4yGrljzD.XgDB49aIG79kvu3spnquM&itok=c_jCFqAi" },
  { title: 'Garlic', isFruit: false, desc: "hehehe", id: 2, url: "https://it.airliquide.com/statics/styles/crop_image_illustrated_slider/s3/2021-11/Helium%20symbol.jpg?VersionId=wh4yGrljzD.XgDB49aIG79kvu3spnquM&itok=c_jCFqAi" },
  { title: 'Apple', isFruit: true, desc: "hehehe", id: 3, url: "https://it.airliquide.com/statics/styles/crop_image_illustrated_slider/s3/2021-11/Helium%20symbol.jpg?VersionId=wh4yGrljzD.XgDB49aIG79kvu3spnquM&itok=c_jCFqAi" },
];

export default function App() {
  const listItems = products.map(product =>

    <div class="card" style={{ width: 18 + "rem" }} id={product.id}>
      <img src={product.url} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{product.title}</h5>
        <p class="card-text">{product.desc}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

  );

  return (
    <div id="container" style={{ margin: 100 + "px" }}>
      <ul>{listItems}</ul>
    </div>

  );
}

