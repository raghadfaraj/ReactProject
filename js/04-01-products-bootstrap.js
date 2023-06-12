// JSX Conditional rendering 
// Missing data  
const prodDataList = [
    {
        id: 100,
        title: 'Conact1',
        image: {
            src: 'https://unsplash.com/s/photos/random-people',
            alt: 'Calgary',
            size: { width: '90%', height: 200 }
        },
       
    },
    
      
    ];

function ProductsView() {
    return <div className="row">
        {prodDataList.map((product) =>
            <div className='col-lg-4 col-md-6 p-2'>
                <ProdView key={product.id} prodData={product} />
            </div>
        )}
    </div>;
}

