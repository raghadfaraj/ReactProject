async function createPackage(packageInfoObj, setResult) {
    console.log(packageInfoObj)
    setResult('Account Created Sucessfuly');
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
        id: 0,
        FirstName: '',
        LastName:'',
        username:'',
        Phone:'',
        Email:'',
        
        
        
             
    });
    const [result, setResult] = React.useState('');

    return <>
        <MyInput inputValue={packageInfoObj.FirstName}
            inputLabel="First Name"
            inputType='text'
            setValue={
                (value) => setPackageInfoObj({
                    ...packageInfoObj, FirstName: value
                })}
        />
        <MyInput inputValue={packageInfoObj.LastName}
            inputLabel="Last Name"
            inputType='text'
            setValue={
                (value) => setPackageInfoObj({
                    ...packageInfoObj, LastName: value
                    
                })}
        />
        <MyInput inputValue={packageInfoObj.Email}
            inputLabel="Email"
            inputType='email'
            setValue={
                (value) => setPackageInfoObj({
                    ...packageInfoObj, Email: value
                })}
        />
        <MyInput inputValue={packageInfoObj.Phone}
            inputLabel="Phone"
            inputType="tel"
            setValue={
                (value) => setPackageInfoObj({
                    ...packageInfoObj, Phone: value
                })}
        />
        <MyInput inputValue={packageInfoObj.endDate}
            inputLabel="Address"
            inputType='text'
            setValue={
                (value) => setPackageInfoObj({
                    ...packageInfoObj, endDate: value
                })}
        />
       
        
        
        
        
        <MyButton onClick={() => createPackage(packageInfoObj, setResult)}>Create Account</MyButton>
        <MyInput inputValue={result} readonly={true} />
    </>;
}

const container = document.getElementById('root'); // Access the root element
const root = ReactDOM.createRoot(container); // Create the React object
root.render(<PackageCreateForm />); // Render the React component 
