function displayPoem(response) {
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });

}

function generatePoem (event) {
    event.preventDefault();

    let instructionInput = document.querySelector("#user-instructions")
    let apiKey = "fc04953ofdf6abd4f4a533c41b9da7tb";
    let prompt = `User instructions are: Generate a poem about ${instructionInput.value}`;
    let context = "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Do NOt put ```html``` in the poem. Make sure to follow the user instructions.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayPoem);


    
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem)