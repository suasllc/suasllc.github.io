document.addEventListener('DOMContentLoaded', (event) => {
  const more_skills = document.getElementById('more_skills');
  const skills_div = document.getElementById('skills_div');
  const back_to_top_buttons = document.querySelectorAll('.back_to_top_button');
  let more_skills_expanded = false;

  let handleExpandCollapse = () => {
    const numberOfIcons = document.querySelectorAll('#skills article').length;
    const unitWidth = 110;
    const unitHeight = unitWidth;
    const margin = () => {
      if(window.innerWidth > 1680) return 6 * 16;
      if(window.innerWidth > 1280) return 5 * 16;
      if(window.innerWidth > 736) return 4 * 16;
      return 2 * 16;
    }

    const numerOfIconsPerRow = Math.floor((window.innerWidth - 2 * margin()) / unitWidth);
    const numberOfRowsNeeded = Math.ceil(numberOfIcons/numerOfIconsPerRow);
    const collapsedTotalHeight = 2 * unitHeight + 0;
    const expandedTotalHeight = numberOfRowsNeeded * unitHeight + 0;
    console.log('numerOfIconsPerRow', numerOfIconsPerRow, numberOfIcons, numberOfRowsNeeded);
    console.log('window.innerWidth', window.innerWidth);
    if (more_skills_expanded) {
      // skills_div.classList.add('expanded');
      skills_div.style.height = `${expandedTotalHeight}px`;
      more_skills.classList.add('up');
      more_skills.classList.remove('down');
    } else {
      // skills_div.classList.remove('expanded');
      skills_div.style.height = `${collapsedTotalHeight}px`;
      more_skills.classList.add('down');
      more_skills.classList.remove('up');
    }
  };

  more_skills.addEventListener('click', e => {
    more_skills_expanded = !more_skills_expanded;
    handleExpandCollapse();
  });

  const isMobile = () => /iPhone|iPad|iPod|Android|Windows Phone|webOS|BlackBerry/i.test(navigator.userAgent);

  if (isMobile()) {
    skills_div.addEventListener('click', e => {
      setTimeout(() => {
        more_skills_expanded = !more_skills_expanded;
        handleExpandCollapse();
      }, 100);
    });
  } else {
    skills_div.addEventListener('mouseover', e => {
      setTimeout(() => {
        if (!more_skills_expanded) {
          more_skills_expanded = true;
          handleExpandCollapse();
        }
      }, 100);
    });
    skills_div.addEventListener('mouseleave', e => {
      setTimeout(() => {
        if (more_skills_expanded) {
          more_skills_expanded = false;
          handleExpandCollapse();
        }
      }, 300);
    });
  }
  back_to_top_buttons.forEach(btt => {
    btt.addEventListener('click', e => {
      // window.scrollTo(0, 0);
      window.location.href = "/#";
    });
  });
});