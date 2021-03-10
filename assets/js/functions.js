// import { srcs, alts } from './skilldata.js';
import { skillObjs, make_data_nodes } from './skilldata.js';

document.addEventListener('DOMContentLoaded', (event) => {
  let graphMode = false;
  let skillType = 'all';

  populateSkillIcons();
  addSkillNav();

  const more_skills = document.getElementById('more_skills');
  const skills_div = document.getElementById('skills_div');
  const back_to_top_buttons = document.querySelectorAll('.back_to_top_button');
  let more_skills_expanded = false;
  const names = ['tripcamp', 'dronest', 'instavibes', 'vuirhd1', 'forgetmenotes', 'vuir_zoom'];
  const preview_options_divs = Array.from(document.querySelectorAll('.preview'));
  const hover_options_divs = Array.from(document.querySelectorAll('.hover_options'));
  // const viewLiveBtns = Array.from(document.querySelectorAll('.preview_button.live'));
  const viewFullBtns = Array.from(document.querySelectorAll('.preview_button.full'));
  const modals = Array.from(document.querySelectorAll('.modal'));
  const closeButtons = document.querySelectorAll('.x_close');

  const unitWidth = 110;
  const unitHeight = unitWidth;
  const margin = () => {
    if (window.innerWidth > 1680) return 6 * 16;
    if (window.innerWidth > 1280) return 5 * 16;
    if (window.innerWidth > 736) return 4 * 16;
    return 2 * 16;
  }
  const numberOfIcons = () => document.querySelectorAll('#skills div.shown_block').length;
  const numerOfIconsPerRow = () => Math.floor((window.innerWidth - 2 * margin()) / unitWidth);
  const numberOfRowsNeeded = () => Math.ceil(numberOfIcons() / numerOfIconsPerRow());
  const expandedTotalHeight = () => numberOfRowsNeeded() * unitHeight + 10;
  const collapsedTotalHeight = () => (numberOfRowsNeeded() < 2 ? numberOfRowsNeeded() : 2) * unitHeight + 0;

  const prevImgs = Array.from(document.querySelectorAll('.prev_img'));
  const srcObj = {
    tripcamp: ['images/tripcamp.png', 'images/tripcamp3.gif', 6000, 12000],
    dronest: ['images/dronest.png', 'images/dronest4_small.gif', 20000, 18000],
    instavibes: ['images/instavibes1.jpg', 'images/instavibes.gif', 32000, 14000],
  };
  const escapeInputs = Array.from(document.querySelectorAll('.escape'));

  const stopOtherRunningGifs = (name) => {
    prevImgs.filter(img => !img.classList.contains(name))
      .forEach(img => {
        const name = img.classList.toString().split(' ')[1];
        if (name) img.src = srcObj[name][0];
      });
  }
  escapeInputs.forEach(esp => {
    esp.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        modals.forEach(m => {
          m.classList.remove('shown_flex');
          m.classList.add('hidden');
        });
      }
    });
  });
  prevImgs.forEach(prev => {
    const name = prev.classList.toString().split(' ')[1];
    if (!name) return;
    const srcs = srcObj[name];
    setTimeout(() => {
      if (prev.src !== srcs[1]) {
        prev.src = srcs[1];
        stopOtherRunningGifs(name);
      }
    }, srcs[2]);
    setTimeout(() => {
      prev.src = srcs[0];
    }, srcs[2] + 15000);
    // let interval = srcs[3];
    // setInterval(() => {
    //   if (Math.random() > 0.5)
    //     prev.src = srcs[0]
    //   else {
    //     prev.src = srcs[1];
    //   }
    // }, interval);
  });

  if (skills_div) skills_div.style.height = `${collapsedTotalHeight()}px`;

  let handleExpandCollapse = () => {
    if (more_skills_expanded) {
      skills_div.style.height = `${expandedTotalHeight()}px`;
      more_skills.classList.add('up');
    } else {
      skills_div.style.height = `${collapsedTotalHeight()}px`;
      more_skills.classList.remove('up');
    }
  };

  preview_options_divs.forEach(div => {
    div.addEventListener('mouseover', e => {
      const name = names.find(name => div.classList.contains(name));
      const hover_options_div = hover_options_divs.find(div => div.classList.contains(name));
      if (hover_options_div) {
        // setTimeout(() => {
        hover_options_div.style.visibility = 'visible'
        // }, 500);
      }
      const prevImg = prevImgs.find(img => img.classList.contains(name));
      if (prevImg) {
        if (prevImg.src !== srcObj[name][1]) prevImg.src = srcObj[name][1];
      }
      stopOtherRunningGifs(name);
    });
    div.addEventListener('mouseleave', e => {
      const name = names.find(name => div.classList.contains(name));
      const hover_options_div = hover_options_divs.find(div => div.classList.contains(name));
      if (hover_options_div)
        hover_options_div.style.visibility = 'hidden';
      const prevImg = prevImgs.find(img => img.classList.contains(name));
      if (prevImg) {
        if (prevImg.src !== srcObj[name][0]) prevImg.src = srcObj[name][0];
      }
    });
  });
  viewFullBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const name = btn.classList.toString().split(' ')[2];
      const modal = modals.find(m => m.classList.contains(name));
      const prevImg = prevImgs.find(img => img.classList.contains(name));
      if (prevImg) {
        prevImg.src = srcObj[name][0];
      }
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('shown_flex');
        const espInput = escapeInputs.find(esp => esp.classList.contains(name));
        if (espInput && !isMobile()) espInput.focus();
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


  function populateSkillIcons() {
    const skills_div = document.getElementById('skills_div');
    skillObjs.forEach(el => {
      const article = document.createElement('div');
      article.setAttribute('class', `article_skill shown_block ${el.name} ${el.type}`);
      article.innerHTML = `<img src=${el.src} class='technology-icon 
        ${el.name} ${el.type}' alt=${el.alt} /> <div class="popup"></div>`;
      skills_div.appendChild(article);
    });
  }

  function removeSkills(type) {
    const skills_div = document.getElementById('skills_div');
    skills_div.innerHTML = "";
  }

  function skillIcon(type) {
    const style = 'style="margin-right: 0px;"'
    switch (type) {
      case 'All':
        return '';
      case 'Library':
        return `<i class="fas fa-cubes" ${style}></i>`;
      case 'Language':
        return `<i class="fas fa-code" ${style}></i>`;
      case 'Framework':
        return `<i class="fas fa-database" ${style}></i>`;
      case 'IDE':
        return `<i class="fas fa-laptop-code" ${style}></i>`;
      case 'OS':
        return `<i class="fab fa-ubuntu" ${style}></i>`;
      case 'Hardware':
        return `<i class="fas fa-microchip" ${style}></i>`;
      case 'Service':
        return `<i class="fab fa-aws" ${style}></i>`;
      default:
        return '';
    }
  }

  function skillTabType(type) {
    return `<span class="shown_if_width_900plus">${type.toUpperCase()}</span>`;
  }

  function addSkillNav() {
    const skills_nav_div = document.getElementById('skills_nav_div');
    const navdiv = document.createElement('div');
    const types = getTypes();


    navdiv.innerHTML = `<div class="skill_tab-nav four" >
      <a href="#skills" class="skill_tab-nav-option p_active" activeClassName="skill_tab-nav-option-active"  id="all_skills" >
        ALL
      </a>` + types.map((type, i) =>
      `<a  href="#skills"  class="skill_tab-nav-option 
      ${i === 0 ? 'next_to_active_left' : ''}" 
      activeClassName="skill_tab-nav-option-active"  
      id="${type}_skills" >
      ${skillIcon(type)}
      ${skillTabType(type)}
    </a>`).join('') + '</div>';
    skills_nav_div.appendChild(navdiv);
    handleSkillTabClick();
  }

  function getTypes() {
    const typeSet = new Set();
    skillObjs.forEach(el => {
      if (!typeSet.has(el.type)) typeSet.add(el.type);
    });
    const types = Array.from(typeSet);
    return types;
  }

  function handleSkillTabClick() {
    const types = getTypes();

    const makeOnlyOneTabActive = (type) => {
      const skill_tabs = Array.from(document.querySelectorAll('.skill_tab-nav-option'))
        .filter(e => !e.classList.contains('graph'));
      let currentActiveIndex = 0;
      const nextToActive = [];
      skill_tabs.forEach((tab, i) => {
        if (tab.id.includes(type)) {
          tab.classList.add('p_active');
          tab.classList.remove('next_to_active_right', 'next_to_active_left');
          currentActiveIndex = i;
          if (currentActiveIndex === 0) nextToActive.push(1);
          else if (currentActiveIndex === skill_tabs.length - 1) nextToActive.push(currentActiveIndex - 1)
          else {
            nextToActive.push(currentActiveIndex - 1);
            nextToActive.push(currentActiveIndex + 1);
          }
        }
        else {
          tab.classList.remove('p_active', 'next_to_active_right', 'next_to_active_left');
        }
      });

      nextToActive.forEach(index => {
        if (index < currentActiveIndex)
          skill_tabs[index].classList.add('next_to_active_right');
        else
          skill_tabs[index].classList.add('next_to_active_left');
      });
    };

    types.forEach(type => {
      const skill_tab = document.getElementById(`${type}_skills`);
      skill_tab.addEventListener('click', e => {
        showOnlyType(type);
        handleExpandCollapse();
        makeOnlyOneTabActive(type);
        skillType = type;
        if(graphMode) showGraph(skillType);
      });
    });
    const all_skill_tab = document.getElementById(`all_skills`);
    all_skill_tab.addEventListener('click', e => {
      showOnlyType('all');
      handleExpandCollapse();
      makeOnlyOneTabActive('all');
      skillType = 'all';
      if(graphMode) showGraph('all');
    });

  }
  function showOnlyType(type) {
    const articles = document.querySelectorAll('.article_skill');
    articles.forEach(a => {
      if ((type === 'all') || (a.classList.contains(type))) {
        a.classList.add('shown_block');
        a.classList.remove('hidden');
      } else {
        a.classList.add('hidden');
        a.classList.remove('shown_block');
      }
    });
  }

  const listView = document.getElementById('skill_tab_list');
  const graphView = document.getElementById('skill_tab_graph');
  listView.addEventListener('click', e => {
    listView.classList.add('p_active');
    // graphView.classList.add('next_to_active_right');
    graphView.classList.remove('p_active', 'next_to_active_left');
    graphMode = false;
    deleteGraph();
    populateSkillIcons();
  });
  graphView.addEventListener('click', e => {
    graphView.classList.add('p_active');
    // listView.classList.add('next_to_active_right');
    listView.classList.remove('p_active', 'next_to_active_left');
    graphMode = true;
    removeSkills();
    showGraph(skillType);
  });

  function deleteGraph(){
    const skills_graph_div = document.getElementById('skills_graph');
    if(skills_graph_div) {
      skills_graph_div.innerHTML = "";
      skills_graph_div.style = "";
    }
  }
  function showGraph(type) {
    deleteGraph();
    const skills_graph_div = document.getElementById('skills_graph');
    var chart = anychart.graph(make_data_nodes(type));
    // set the title
    chart.title("Skills - Projects Network");
    // skills_graph_div.setAttribute('id','skills_graph');
    skills_graph_div.setAttribute('style', "margin-top: -10px; height: 500px; width: 100%; border-radius: 10px; overflow: hidden;");
    // draw the chart
    chart.container("skills_graph").draw();
  }
  // showGraph();
});