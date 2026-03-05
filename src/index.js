import './styles.css';

document.addEventListener("DOMContentLoaded", () => {


  const card = document.querySelectorAll(".card");


  window.addEventListener("scroll", () => {
    const container = document.querySelector(".container");
    const title = document.querySelector(".main-titletwo");
    const faqtitle = document.querySelector(".faqtitle");
    if (!container || !title || !faqtitle) return;
    const rect = container.getBoundingClientRect();
    const rect2 = title.getBoundingClientRect();
    const rect3 = faqtitle.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 10;
    const inView2 = rect2.top < window.innerHeight && rect2.bottom > 30;
    const inView3 = rect3.top < window.innerHeight && rect3.bottom > 30;
    if (inView) {
      card.forEach((inf) => {
        inf.style.transform = "translateX(0)";
      });
    }
    if (inView2) {
      title.style.transform = "translateY(0)";
      title.style.opacity = "100";
    }

    if (inView3) {
      faqtitle.style.transform = "translateY(0)";
      faqtitle.style.opacity = "100";
    }
  });

  const menuBtn = document.querySelector('.menu-toggle');
  const navDrawer = document.querySelector('.nav-link');

  if (menuBtn && navDrawer) {
    menuBtn.addEventListener('click', (e) => {
      // TEMPORARY: If this doesn't show up on the phone, 
      // an invisible layer is blocking the button.
      alert("Button Tapped!"); 

      menuBtn.classList.toggle('active');
      navDrawer.classList.toggle('active');
    });
  }
    

  // faq section

  // const faqcontainers = document.querySelectorAll(".faqdropdown");

  // faqcontainers.forEach((container) => {
  //   const top = container.querySelector(".topcontent");
  //   const bottom = container.querySelector(".dropcontent");
  //   const arrow = container.querySelector(".droparrow");

  //   top.addEventListener("click", () => {
  //     top.classList.toggle("active");
  //     container.classList.toggle("active");
  //     bottom.classList.toggle("active");
  //     arrow.classList.toggle("active");
  //   });
  // });

  // timeline
  const timeLineData = [
    {
      emoji: "🎫",
      title: "Check-In",
      time: "8:00",
      description:
        "Arrive at the venue, get your badge, and pick up your swag bag!",
      label: "WHAT TO BRING: ",
      details: "Valid ID, laptop, charger, and confirmation email",
    },
    {
      emoji: "🎉",
      title: "Opening",
      time: "8:30",
      description:
        "Kick off the event with welcomes from our organizers and sponsors!",
      label: "DETAILS",
      details:
        "Meet the team, learn about prizes, and get pumped for the day ahead",
    },
    {
      emoji: "💻",
      title: "Hacking Begins",
      time: "9:00",
      description:
        "Start building your projects! Tech stack intro workshop for beginners.",
      label: "WORKSHOP TOPIC",
      details:
        "Getting started with web development, APIs, and essential tools for hackathons",
    },
    {
      emoji: "🎓",
      title: "Workshop",
      time: "9:30",
      description:
        "Learn new skills and technologies from industry professionals.",
      label: "TOPICS",
      details:
        "AI/ML basics, mobile app development, and UI/UX design fundamentals.",
    },

    {
      emoji: "🚀",
      title: "Workshop",
      time: "10:30",
      description: "Dive deeper into advanced topics and cutting-edge tools.",
      label: "TOPICS",
      details:
        "Cloud deployment, database optimization, and advanced API integration.",
    },

    {
      emoji: "🍕",
      title: "Lunch",
      time: "12:30",
      description: "Take a break, refuel, and network with other hackers!",
      label: "MENU",
      details:
        "Pizza, sandwiches, salads, drinks, and vegetarian/vegan options available.",
    },

    {
      emoji: "🎮",
      title: "Games",
      time: "14:30",
      description:
        "Take a break from coding and compete in our gaming tournament!",
      label: "GAMES",
      details:
        "Brawl Stars and Block Blast competitions with prizes for winners.",
    },

    {
      emoji: "⏰",
      title: "Submissions",
      time: "18:30",
      description:
        "Final submissions are due. Make sure your project is submitted!",
      label: "SUBMISSION REQUIREMENTS",
      details:
        "GitHub repo link, demo video, and project description on Devpost.",
    },

    {
      emoji: "🍽️",
      title: "Dinner",
      time: "18:45",
      description:
        "Enjoy dinner while our judges review and evaluate all projects.",
      label: "WHAT'S HAPPENING",
      details:
        "Relax with food while judges score projects. Winners announced at closing!",
    },

    {
      emoji: "🏆",
      title: "Awards",
      time: "20:00",
      description: "Celebrate the winners and wrap up an amazing day of hacking!",
      label: "AWARDS",
      details:
        "19 prizes across multiple tracks including Best Overall, Best Beginner, and category winners.",
    },
  ];

  // const items = document.querySelectorAll(".timeline-items");
  // const hoverCard = document.getElementById("hoverInfo");
  // const hoverEmoji = document.getElementById("hoverEmoji");
  // const hoverTitle = document.getElementById("hoverTitle");
  // const hoverTime = document.getElementById("hoverTime");
  // const hoverDesc = document.getElementById("hoverDesc");
  // const hoverLabel = document.getElementById("hoverLabel");
  // const hoverDetails = document.getElementById("hoverDetails");

  // let hideTimeout;

  // items.forEach((item, index) => {
  //   item.addEventListener("mouseenter", () => {
  //     clearTimeout(hideTimeout);
  //     const data = timeLineData[index];
  //     if (!data) return;

  //     hoverEmoji.textContent = data.emoji;
  //     hoverTitle.textContent = data.title;
  //     hoverTime.textContent = data.time;
  //     hoverDesc.textContent = data.description;
  //     hoverLabel.textContent = data.label;
  //     hoverDetails.textContent = data.details;

  //     const rect = item.getBoundingClientRect();
  //     hoverCard.style.left = rect.left + window.scrollX + "px";
  //     hoverCard.style.top = rect.bottom + window.scrollY + 16 + "px";

  //     hoverCard.classList.add("show");

  //     document
  //       .querySelectorAll(".dot")
  //       .forEach((d) => d.classList.remove("active"));
  //     item.querySelector(".dot").classList.add("active");
  //   });

  //   item.addEventListener("mouseleave", () => {
  //     hideTimeout = setTimeout(() => {
  //       hoverCard.classList.remove("show");
  //     }, 150);
  //   });
  // });

  // hoverCard.addEventListener("mouseenter", () => {
  //   clearTimeout(hideTimeout);
  // });

  // hoverCard.addEventListener("mouseleave", () => {
  //   hoverCard.classList.remove("show");
  // });
});