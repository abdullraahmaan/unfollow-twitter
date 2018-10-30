$('.ProfileCard-content').each(function() {
var status = $(this)
  .find('.FollowStatus')
  .text();
var unfollowButton = $(this).find('.user-actions-follow-button');
if (status != 'Follows you') {
  unfollowButton.click();
}
});
setInterval(function() {
window.scrollTo(0, document.body.scrollHeight);
}, 2000);