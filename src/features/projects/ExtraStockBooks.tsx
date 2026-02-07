export default function ExtraStockBooks() {
  return (
    <>
      <h2>Extra-Stock Books</h2>
      {/* <div className="row">
        <div className="col-6">
          <img src="./images/ExtraStockBooks/Details.jpg" style={{width: "100%", marginBottom: "20px"}} />
        </div>
        <div className="col-6">
          <img src="./images/ExtraStockBooks/Login.jpg" style={{width: "100%", marginBottom: "20px"}} />
        </div>
      </div> */}

      <p className="project-section-header" style={{marginBottom: "10px"}}>Description: <span>A web app built with ASP.NET Core MVC and Razor Views for buying books online with discounts on bulk purchases.</span>
      </p>

      <div style={{marginBottom: "10px"}}></div>
      <p className="leftAlign">
        I built this mock book store to learn about building web apps with ASP.NET Core MVC 
        and Razor Views. It was a stepping stone before moving onto Single Page Applications
        using ASP.NET Core and React.
      </p>

      <p className="project-section-header">Core Concepts Learned:</p>
      <ul style={{marginLeft: "1em", marginTop: "-15px"}}>
          <li>Build web apps using ASP.NET Core MVC</li>
          <li>Repository Pattern</li>
          <li>SQL Express Database</li>
          <li>N-Tier Architecture</li>
          <li>Implementing Identity Framework and extending built-in services and models</li>
          <li>Using Entity Framework and code first migrations</li>
          <li>Authentication and Authorization</li>   
      </ul>

      <img src="./images/ExtraStockBooks/Home.jpg" style={{width: "70%", marginBottom: "20px"}} />
      <img src="./images/ExtraStockBooks/Details.jpg" style={{width: "70%", marginBottom: "20px"}} />
      <img src="./images/ExtraStockBooks/Login.jpg" style={{width: "70%", marginBottom: "20px"}} /> 
      <img src="./images/ExtraStockBooks/Register.jpg" style={{width: "70%", marginBottom: "20px"}} />
      <img src="./images/ExtraStockBooks/Products.jpg" style={{width: "70%", marginBottom: "20px"}} /> 
      <img src="./images/ExtraStockBooks/Update Product.jpg" style={{width: "70%", marginBottom: "20px"}} /> 
    </>
  )
}
