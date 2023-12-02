import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="MainContainer">
     
       <div>
            <h1 className="Dooper">Dooper</h1>

            <h1 className="Welcome">Welcome</h1>
             <p className="Welcome1">welcome to <span className="Dooper1">Dooper</span> please enter your details</p>

             <p className="PhoneNumber">Phone Number</p>
             <div>

          <div className="PhoneNumberLabel">
                    <label htmlFor="phoneNumber"></label>
                        <input className="inputBox"
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          placeholder="Enter phone number"   />
            </div>
            </div>
            <div>
              <button className="buttonOtp">Send otp</button>
            </div>
          
            <div className="line-container">
                  <div className="line"></div>
                  <div className="text">Don't have an account</div>
                  <div className="line"></div>
    </div>    
             <div>
                  <button className="buttonSign">Sign Up</button>
                  
            </div>
            <div className="checkBox">
               <input type="checkbox"/>
               <label className="checkBoxContent">By signing up you agreed to <span className="Dooper1">Terms of Use</span></label>
               
            </div>
            <div>
            <input type="checkbox"/>
               <label className="checkBoxContent1">Get updates on Whatsapps</label>
            
            </div>
            <p className="para">Join the community of smart and experienced doctors.Login to access </p>
            <p></p>

            </div>     


     
      
      
           
       
    </div>
  );
}

export default App;
