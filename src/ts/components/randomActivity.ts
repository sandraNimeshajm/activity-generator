const randomActivity = () => {
  const activityContainer = document.querySelector(".js-activity");
  const activityBtn = document.querySelector(".js-btn");

  const fetchActivity = () => {
    const url = `https://www.boredapi.com/api/activity`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const activity = {
          activity: data.activity,
          accessibility: data.accessibility,
          participants: data.participants,
          type: data.type,
        };

        displayActivity(activity);
      });
  };
  fetchActivity();

  const displayActivity = (activity) => {
    const activityHTMLString = `
          <div class="activity__card">
          <h1 class="activity__card-title">Random activity generator</h1>
          <div class="activity__card-text-box">
          <p class="activity__card-text"><span class="activity__card-text-title">Activity</span>: ${activity.activity}</p>
               <p class="activity__card-text"><span class="activity__card-text-title">Accessibility</span>: ${activity.accessibility}</p>
              <p class="activity__card-text"><span class="activity__card-text-title">Participants</span>: ${activity.participants}</p>
              <p class="activity__card-text"><span class="activity__card-text-title">Type</span>: ${activity.type}</p>
          </div>
              
              
          </div>
      `;

    activityContainer.innerHTML = activityHTMLString;

    activityBtn.addEventListener("click", fetchActivity);
  };
};

export default randomActivity;
