import { ProductCard, ProductDesc, ProductImg, ProductPrice, ProductsContainer,
     ProductsHeading, ProductWrapper,ProductInfo,ProductTitle, ProductButton} from "./ProductElement";

const Products = (props) => {
    return ( 
       <ProductsContainer>
           <ProductsHeading>{props.heading}</ProductsHeading>
           <ProductWrapper>
               {props.data.map(product => {
                   return(
                    <ProductCard key={product.id}>
                        <ProductImg src={product.img} alt={product.alt}/>
                        <ProductInfo>
                            <ProductTitle>{product.name}</ProductTitle>
                            <ProductDesc>{product.desc}</ProductDesc>
                            <ProductPrice>{product.price}</ProductPrice>
                            <ProductButton>{product.button}</ProductButton>
                        </ProductInfo>
                    </ProductCard>

                   )
               })}
           </ProductWrapper>
       </ProductsContainer>
     );
}
 
export default Products
;