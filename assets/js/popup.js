let isMinimized = false; // Flag to track whether the pop-up is minimized or not

// Function to show the pop-up
function showPopup() {
  document.getElementById('popup').style.display = 'block';
  setTimeout(function(){
    document.getElementById('popup').style.transform = 'translate(-50%, 0)';
  }, 100); // Delay the animation slightly for smoother effect
}

// Function to close the pop-up
function closePopup() {
  document.getElementById('popup').style.transform = 'translate(-50%, 100%)';
  setTimeout(function(){
    document.getElementById('popup').style.display = 'none';
  }, 500); // Delay hiding the pop-up until after the transition
}

// Function to minimize the pop-up
function minimizePopup() {
  if (!isMinimized) {
    document.getElementById('popup').style.transform = 'translate(-50%, calc(100% - 50px))'; // Show a slight portion of the pop-up
    document.querySelector('.minimize-btn').style.display = 'none'; // Hide the minimize button
    document.querySelector('.maximize-btn').style.display = 'block'; // Show the maximize button
    isMinimized = true;
  } else {
    document.getElementById('popup').style.transform = 'translate(-50%, 100%)'; // Fully minimize the pop-up
    document.querySelector('.minimize-btn').style.display = 'block'; // Show the minimize button
    document.querySelector('.maximize-btn').style.display = 'none'; // Hide the maximize button
    isMinimized = false;
  }
}

// Function to maximize the pop-up
function maximizePopup() {
  document.getElementById('popup').style.transform = 'translate(-50%, 0)'; // Fully show the pop-up
  document.querySelector('.minimize-btn').style.display = 'block'; // Show the minimize button
  document.querySelector('.maximize-btn').style.display = 'none'; // Hide the maximize button
  isMinimized = false;
}

// Show the pop-up after the page loads for 10 seconds
setTimeout(showPopup, 10000);
