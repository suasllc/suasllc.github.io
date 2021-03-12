// import { srcs, alts } from './skilldata.js';
import { skillObjs, make_data_nodes, getProjectNodes } from './skilldata.js';

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

  const unitWidth = 114;
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
        if (graphMode) showGraph(skillType);
      });
    });
    const all_skill_tab = document.getElementById(`all_skills`);
    all_skill_tab.addEventListener('click', e => {
      showOnlyType('all');
      handleExpandCollapse();
      makeOnlyOneTabActive('all');
      skillType = 'all';
      if (graphMode) showGraph('all');
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
    listView.classList.remove('next_to_active_right');
    graphView.classList.add('next_to_active_left');
    graphView.classList.remove('p_active');
    graphMode = false;
    deleteGraph();
    populateSkillIcons();
    handleExpandCollapse();
  });
  graphView.addEventListener('click', e => {
    graphView.classList.add('p_active');
    graphView.classList.remove('next_to_active_left');
    listView.classList.add('next_to_active_right');
    listView.classList.remove('p_active');
    graphMode = true;
    removeSkills();
    showGraph(skillType);
    handleExpandCollapse();
  });

  function deleteGraph() {
    const skills_graph_div = document.getElementById('skills_graph');
    if (skills_graph_div) {
      skills_graph_div.innerHTML = "";
      skills_graph_div.style = "";
    }
  }
  let interval;
  function showGraph(type) {
    deleteGraph();
    const skills_graph_div = document.getElementById('skills_graph');
    const graphData = make_data_nodes(type);
    const chart = anychart.graph();
    chart.data(graphData);
    // set the title
    chart.title().useHtml(true);
    chart.title("<b>Projects-Skills Connection Network</b>" + "<br>" +
      "Illustration of the connections between my skills and my projects"
      + "<br>" + "This shows how my skills have actually been utilized");
    // skills_graph_div.setAttribute('id','skills_graph');
    skills_graph_div.setAttribute('style',
      `margin-top: -10px;
      height: 500px;
      width: 100%;
      max-height: calc(width);
      border-radius: 10px;
      background-color: #f0f0f0;
      position: relative;
      overflow: hidden;`
    );
    const layoutType = (lotype) => {
      chart.layout().type(lotype);
    }
    const controlDiv = document.createElement('div');
    controlDiv.classList.add('graph_control_div');
    controlDiv.innerHTML =
      `<label id="grid_lo" class="button small icon equal_width" name="type">
      <i class="fas fa-th"></i>
      <div class="tooltip_small"><div class="tooltip_small_text">Grid View</div></div>
    </label>
    <label class="button small equal_width" id="cluster_lo" name="type">
      <img src="images/cluster.png" width="17px" height="17px" />
      <div class="tooltip_small"><div class="tooltip_small_text">Cluster View</div></div>
    </label>
    <label class="button small icon equal_width" id="zoomin" name="type">
      <i class="fas fa-search-plus"></i>
      <div class="tooltip_small"><div class="tooltip_small_text">Zoom In</div></div>
    </label>
    <label class="button small icon equal_width" id="zoomout" name="type">
      <i class="fas fa-search-minus"></i>
      <div class="tooltip_small"><div class="tooltip_small_text">Zoom Out</div></div>
    </label>
    <label class="button small icon equal_width" id="fitscreen" name="type">
      <i class="fas fa-expand"></i>
      <div class="tooltip_small"><div class="tooltip_small_text">Fit Window</div></div>
    </label>
    <label class="button small icon equal_width" id="playpause" name="type">
      <i class="fas fa-pause" id="playpauseicon"></i>
      <div class="tooltip_small"><div class="tooltip_small_text" id="playpausetext">Play Animation</div></div>
    </label>
    <label class="button small icon equal_width" id="showhideedges" name="type">
      <img id="showhideedgesicon" src="images/connected.png" width="19px" height="19px"/>
      <div class="tooltip_small"><div class="tooltip_small_text" id="showhideedgestext">Click to HIDE edges</div></div>
    </label>
    `;
    skills_graph_div.appendChild(controlDiv);

    // add a zoom control panel
    // const zoomController = anychart.ui.zoom();
    // zoomController.target(chart);
    // zoomController.render();
    // draw the chart
    chart.layout().type("fixed");
    // chart.layout().iterationCount(0);
    // configure the visual settings of edges
    chart.edges().normal().stroke("#000000", 0);//, "5 5", "round");
    chart.edges().hovered().stroke("#0F5FA6", 1, "10 5", "round");
    chart.edges().selected().stroke("#0F5FA6", 1);
    const projectNodes = getProjectNodes(graphData);
    let playing = true;
    let showEdges = true;
    let selectingInterval;
    chart.container("skills_graph").draw(true); //Asynchronous drawing
    // setPlayPause();

    // const projects = chart.group('project');

    // let fixed = true;
    // if (interval) {
    //   clearInterval(interval);
    // }
    // interval = setInterval(() => {
    //   fixed = !fixed;
    //   if (fixed) chart.layout().type("fixed");
    //   else chart.layout().type("forced");
    // }, 8000);
    const cluster = document.getElementById('cluster_lo');
    const gridlo = document.getElementById('grid_lo');
    const zoomin = document.getElementById('zoomin');
    const zoomout = document.getElementById('zoomout');
    const fitscreen = document.getElementById('fitscreen');
    const playPause = document.getElementById('playpause');
    const showhideedges = document.getElementById('showhideedges');
    if (cluster) {
      cluster.addEventListener('click', e => {
        layoutType('forced');
      });
    }
    if (gridlo) {
      gridlo.addEventListener('click', e => {
        layoutType('fixed');
      });
    }
    if (zoomin) {
      zoomin.addEventListener('click', e => {
        chart.zoomIn();
      });
    }
    if (zoomout) {
      zoomout.addEventListener('click', e => {
        chart.zoomOut();
      });
    }
    if (fitscreen) {
      fitscreen.addEventListener('click', e => {
        chart.fit();
      });
    }
    if (playPause) {
      const ppicon = document.getElementById('playpauseicon');
      const tooltiptext = document.getElementById('playpausetext');
      playPause.addEventListener('click', e => {
        playing = !playing;
        if (playing) {
          ppicon.className = 'fas fa-pause';
          tooltiptext.innerText = "Click to Pause";
        } else {
          ppicon.className = 'fas fa-play';
          tooltiptext.innerText = "Play Animation";
        }
        setPlayPause();
      });
    }
    if (showhideedges) {
      const showhideedgesicon = document.getElementById('showhideedgesicon');
      const showhideedgestext = document.getElementById('showhideedgestext');
      showhideedges.addEventListener('click', e => {
        showEdges = !showEdges;
        if (showEdges) {
          chart.edges().normal().stroke("#0F5FA6", 1, "5 5", "round");
          projectNodes.forEach(node => chart.select(node.id));
          showhideedgesicon.src = "images/disconnected.png";
          showhideedgestext.innerText = "Click to HIDE edges";
        } else {
          chart.edges().normal().stroke("#0F5FA6", 0);
          projectNodes.forEach(node => chart.unselect(node.id));
          showhideedgesicon.src = "images/connected.png";
          showhideedgestext.innerText = "Click to SHOW edges";
        }
      });
    }
    function setPlayPause() {
      if (!playing) {
        showhideedges.disable = false;
        return clearInterval(selectingInterval);
      }
      let index = 0;
      let round = 0;
      chart.edges().selected().stroke("#0F5FA6", 1);
      showhideedges.disable = true;
      selectingInterval = setInterval(() => {
        if (index >= projectNodes.length) {
          index = 0;
          round++;
          if (round >= 3) clearInterval(selectingInterval);
        }
        chart.select(projectNodes[index].id);
        if (round < 2) {
          let iToClear = (index === 0) ? projectNodes.length - 1 : index - 1;
          chart.unselect(projectNodes[iToClear].id);
        }
        index++;
      }, 400);
    }
  }
  // showGraph();
});