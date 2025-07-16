function Les3() {

const landen = ["frankrijk", "spanje", "Italië"];

return (
   <div>
      <>
      <label>
         Text input: <input name="myInput" placeholder="Voer iets in"/>
      </label>
      </>
      <>
      <button>Verhoog de leeftijd</button>
      </>
      <>
      <select name="landen">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>      {landen[0]}
      </>
   </div>
);
}

export default Les3
