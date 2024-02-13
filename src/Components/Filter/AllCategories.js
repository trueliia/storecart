import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            <h1>Order fresh produce now!</h1>
            <h2>{['VEGETABLES', 'FRUITS', 'MEATS', 'DAIRY', 'BAKERY', 'ALL'].map((category, index) => <Filter key={index} category={category}/>)}</h2>
            
        </div>
    )
}

export default AllCategories;