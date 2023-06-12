
function PackageView({ packageData}) {
    return  (
       
       <div className="HomePage">
        <h2>{packageData.title}</h2>
        {packageData.image &&
            <img src={packageData.image.src} alt={packageData.image.alt} 
                width={packageData.image.size.width} 
            />
        }
        <p>{packageData.desitination}</p>
        <p>{packageData.description}</p>

        {packageData.desitination &&
            <p>{prodData.desitination.description}: <a href={prodData.email.url}>{prodData.email.text}</a></p>
        }
         {packageData.description &&
            <p>{prodData.phone.description}: <a href={prodData.phone.url}>{prodData.phone.text}</a></p>
        }
         {packagedData.image &&
            <p>{prodData.address.description}: <a href={prodData.address.url}>{prodData.address.text}</a></p>
        }
        </div>
    );
}
