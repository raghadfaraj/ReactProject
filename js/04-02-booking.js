async function createPackage(packageInfoObj, setResult) {
    console.log(packageInfoObj)
    setResult('Your booking is confirmed');
    <input type="button" value="button name" onclick="window.open('http://www.website.com/page')" />
    window.confirm("Booking Confirmed. Booking reference number is BK666. You will recieve and e mail confirmation");
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
        Destination:"",
        Date:'',            
        travelDoc:'',
        Instructions:'',
    
        
        
        
             
    });
    const [result, setResult] = React.useState('');

    return <>
        <MyInput inputValue={packageInfoObj.FirstName}
            inputLabel="Number of Passengers"
            inputType='number'
            setValue={
                (value) => setPackageInfoObj({
                    ...packageInfoObj, noTravlers: value
                })}
        />
        <MyInput inputValue={packageInfoObj.LastName}
            inputLabel="Start Date"
            inputType='date'
            setValue={
                (value) => setPackageInfoObj({
                    ...packageInfoObj, date: value
                    
                })}
        />
        
        <MyInput inputValue={packageInfoObj.Phone}
            inputLabel="Total Days"
            inputType="text"
            setValue={
                (value) => setPackageInfoObj({
                    ...packageInfoObj, totalDays: value
                })}
        />
        <MyInput inputValue={packageInfoObj.Phone}
            inputLabel="Travel Document No"
            inputType="text"
            setValue={
                (value) => setPackageInfoObj({
                    ...packageInfoObj, travelDoc: value
                })}
        />
        <MyInput inputValue={packageInfoObj.Phone}
            inputLabel="Anount"
            inputType="amount"
            setValue={
                (value) => setPackageInfoObj({
                    ...packageInfoObj, amount: value
                })}
        />
        <MyInput inputValue={packageInfoObj.endDate}
            inputLabel="Special Instructions/ Requirements"
            inputType='text area'
            setValue={
                (value) => setPackageInfoObj({
                    ...packageInfoObj, endDate: value
                })}
        />
       
              
        
        
        <MyButton onClick={() => createPackage(packageInfoObj, setResult)} > Confirm Booking</MyButton>
        <MyInput inputValue={result} readonly={true} />

    </>;
}

const container = document.getElementById('root'); // Access the root element
const root = ReactDOM.createRoot(container); // Create the React object
root.render(<PackageCreateForm />); // Render the React component 
