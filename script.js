//your JS code here. If required.

      // Get the counter and button elements
      const counterElement = document.getElementById('counter');
      const incrementBtn = document.getElementById('incrementBtn');

      // Set the initial counter value
      let counterValue = 0;

      // Function to handle button click
      function handleIncrementClick() {
        // Display an alert with the current counter value before incrementing
        alert(counterValue);

        // Increment the counter value
        counterValue++;

        // Update the counter element on the webpage
        counterElement.textContent = counterValue;
      }

      // Attach the click event listener to the button
      incrementBtn.addEventListener('click', handleIncrementClick);