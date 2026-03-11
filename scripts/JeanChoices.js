export const JeanChoices = () => {
    let html = `
    <div class="survey-input">
    <h2>Do you own a pair of blue jeans?</h2>
    <input type="radio" name="ownsJeans" value="true" /> Yes
    <input type="radio" name="ownsJeans" value="false" /> No 
    </div>
    `
//because both name= are the same, the radio button gives 2 options but only one choice can be selected. radio buttons with the same "name" attribute form a group, but different values
    return html
}