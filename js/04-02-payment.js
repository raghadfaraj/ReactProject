async function createPackage(packageInfoObj, setResult) {
    console.log(packageInfoObj)
    setResult('Your booking is confirmed');
        window.confirm("Payment Recieved. Booking reference number is BK666. You will recieve and e mail confirmation");
}

function MyButton({ onClick, children }) {
    return <>
        <button className="btn btn-success" onClick={onClick}>
            {children}
        </button>
    </>;
}

function MyInput({ inputValue, inputLabel, inputType, setValue, readonly }) {
    return <>
        <div className="col">
            <label class="form-label">{inputLabel}</label>
            <input type={inputType} className="form-control"
                value={inputValue}
                onChange={(e) => setValue(e.target.value)}
                readOnly={readonly} />
        </div>
    </>;
}

function PackageCreateForm() {
    // Creates a numbersObj state object and initializes it with two properties(number1, number2). 
    // setNumbersObj is a method we can use to change the current state value
    const [packageInfoObj, setPackageInfoObj] = React.useState({
        id: 1,
        Name:'',
        CardNumber:"",
        ExpiryDate:'',            
        CVC:'',
        
    
        
        
        
             
    });
    const [result, setResult] = React.useState('');

    return <>
        <MyInput inputValue={packageInfoObj.FirstName}
            inputLabel="Name on Card"
            inputType='text'
            setValue={
                (value) => setPackageInfoObj({
                    ...packageInfoObj, Name: value
                })}
        />
        <MyInput inputValue={packageInfoObj.LastName}
            inputLabel="Card Number"
            inputType='text'
            setValue={
                (value) => setPackageInfoObj({
                    ...packageInfoObj, CardNumber: value
                    
                })}
        />
        
        <MyInput inputValue={packageInfoObj.Phone}
            inputLabel="Expiry Date"
            inputType="date"
            setValue={
                (value) => setPackageInfoObj({
                    ...packageInfoObj, ExpiryDate: value
                })}
        />
        <MyInput inputValue={packageInfoObj.Phone}
            inputLabel="CVC"
            inputType="text"
            setValue={
                (value) => setPackageInfoObj({
                    ...packageInfoObj, CVC: value
                })}
        />
        
       
              
        
        
        <MyButton onClick={() => createPackage(packageInfoObj, setResult)}> Confirm Payment</MyButton>
        <MyInput inputValue={result} readonly={true} />
        
    </>;
}

const container = document.getElementById('root'); // Access the root element
const root = ReactDOM.createRoot(container); // Create the React object
root.render(<PackageCreateForm />); // Render the React component 
