const modal = () => {
  const info = document.querySelector(".js-info");
  const closeBtn = document.querySelector(".js-close-btn");
  const activity = document.querySelector<HTMLElement>(".js-activity");
  const activityBtn = document.querySelector<HTMLElement>(".js-btn");

  function modalOpen() {
    info.classList.add("show");
    activity.style.opacity = String(0);
    activityBtn.style.opacity = String(0);
  }

  function modalClose() {
    info.classList.remove("show");
    activity.style.opacity = String(1);
    activityBtn.style.opacity = String(1);
  }

  window.addEventListener("DOMContentLoaded", modalOpen);
  closeBtn.addEventListener("click", modalClose);
};
export default modal;
