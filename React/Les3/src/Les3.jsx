import {useState} from "react";

function Les3() {

const landen = ["Frankrijk", "Spanje", "Italië"];

const [name, setName] = useState("Mike");
const [age, setAge] = useState(25);
const [country, setCountry] = useState("Frankrijk");

function updateAge() {
   setAge(age + 1);
}
function updateName(e) {
   // setName(e.target.value);//de waarde van dit element
   setName(e.target.value);
}

function updateCountry(e) {
setCountry(e.target.value);
// (e)=> setCountry(e.target.value)
}

return (
   <div className="rounded bg-black p-20 font-40" styleName="font-size: 40px;">
      <div class="bg-[#121212]">
         <h2>Informatie:</h2>
      </div>
      <label>
         <input name="myAge" placeholder="Hoe oud ben je?"/>
      </label>
      <input type="button" value="verhoog de leeftijd (+1)" onClick={updateAge} />

      <label>
         <input name="myInput" placeholder="Voer iets in"/>
      </label>

      <input type="button" value="verander naam" onChange={updateName} />
       <input type="text" placeholder="Past gelijk aan" value= {name} onChange={updateName} />

       <select name={landen} onChange={updateCountry}
      >
         {landen.map((land, index) => (
          <option value={land}>
            {land}
          </option>
        ))}
      </select>

      <p className="font-[40px]">Mijn naam is {name}, ik ben {age} oud en ik woon in {country} </p> 
   </div>
);
}

export default Les3
