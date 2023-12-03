// Function to remove the Webflow badge
function removeWebflowBadge() {
  var badges = document.querySelectorAll('a.w-webflow-badge');
  badges.forEach(function(badge) {
    badge.remove();
  });
}

// Create an observer instance linked to a callback function
var observer = new MutationObserver(function(mutationsList, observer) {
  for (var mutation of mutationsList) {
    if (mutation.type === 'childList') {
      removeWebflowBadge();
    }
  }
});

// Start observing the document body for DOM changes
observer.observe(document.body, { childList: true, subtree: true });

// Also attempt to remove the badge initially
removeWebflowBadge();

document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('lazyVideo1');

  var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
          if(entry.isIntersecting){
              video.src = video.getAttribute('data-src');
              observer.unobserve(video);
          }
      });
  }, { threshold: 0.25 }); // Adjust threshold value as needed

  observer.observe(video);
});
document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('lazyVideo2');

  var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
          if(entry.isIntersecting){
            console.log("NOW");
              video.src = video.getAttribute('data-src');
              observer.unobserve(video);
          }
      });
  }, { threshold: 0.25 }); // Adjust threshold value as needed

  observer.observe(video);
});
