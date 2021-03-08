document.addEventListener('DOMContentLoaded', (event) => {
  const more_skills = document.getElementById('more_skills');
  const skills_div = document.getElementById('skills_div');
  const back_to_top_buttons = document.querySelectorAll('.back_to_top_button');
  let more_skills_expanded = false;
  const names = ['tripcamp', 'dronest', 'instavibes', 'vuirhd1', 'forgetmenotes', 'vuir_zoom'];
  const preview_options_divs = Array.from(document.querySelectorAll('.preview'));
  const hover_options_divs = Array.from(document.querySelectorAll('.hover_options'));
  const viewLiveBtns = Array.from(document.querySelectorAll('.preview_button.live'));
  const viewFullBtns = Array.from(document.querySelectorAll('.preview_button.full'));
  const modals = Array.from(document.querySelectorAll('.modal'));
  const closeButtons = document.querySelectorAll('.x_close');
  const numberOfIcons = document.querySelectorAll('#skills article').length;
  const unitWidth = 110;
  const unitHeight = unitWidth;
  const collapsedTotalHeight = 2 * unitHeight + 0;
  skills_div.style.height = `${collapsedTotalHeight}px`;

  let handleExpandCollapse = () => {
    const margin = () => {
      if(window.innerWidth > 1680) return 6 * 16;
      if(window.innerWidth > 1280) return 5 * 16;
      if(window.innerWidth > 736) return 4 * 16;
      return 2 * 16;
    }

    const numerOfIconsPerRow = Math.floor((window.innerWidth - 2 * margin()) / unitWidth);
    const numberOfRowsNeeded = Math.ceil(numberOfIcons/numerOfIconsPerRow);
    const expandedTotalHeight = numberOfRowsNeeded * unitHeight + 0;

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

  preview_options_divs.forEach(div => {
    div.addEventListener('mouseover', e => {
      const name = names.find(name => div.classList.contains(name));
      const hover_options_div = hover_options_divs.find(div => div.classList.contains(name));
      if(hover_options_div)
        hover_options_div.style.visibility = 'visible';
    });
    div.addEventListener('mouseleave', e => {
      const name = names.find(name => div.classList.contains(name));
      const hover_options_div = hover_options_divs.find(div => div.classList.contains(name));
      if(hover_options_div)
        hover_options_div.style.visibility = 'hidden';
    });
  }); 
  viewFullBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const name = btn.classList.toString().split(' ')[2];
      const modal = modals.find(m => m.classList.contains(name));
      if(modal){
        modal.classList.remove('hidden');
        modal.classList.add('shown_flex');
      }
    });
  });
  closeButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      e.preventDefault();
      modals.forEach(m => {
        m.classList.remove('shown_flex');
        m.classList.add('hidden');
      })
    });
  });

  modals.forEach(m => {
    m.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
    })
  });

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